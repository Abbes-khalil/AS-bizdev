import { createServer } from 'http';
import { stat, createReadStream } from 'fs';
import { resolve, parse, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = new URL('.', import.meta.url).pathname;

const PUBLIC_DIR = resolve(process.cwd());
const PORT = 3000;

// MIME types
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
};

const server = createServer(async (req, res) => {
  try {
    // Parse URL
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);

    // Prevent directory traversal
    if (pathname.includes('..')) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      return res.end('Forbidden');
    }

    // Default to index.html for root
    if (pathname === '/') pathname = '/index.html';

    // Resolve file path
    const filePath = resolve(PUBLIC_DIR, pathname.slice(1));

    // Security check: ensure file is within public directory
    if (!filePath.startsWith(PUBLIC_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      return res.end('Forbidden');
    }

    // Get file info
    const fileInfo = await stat(filePath);

    // Check if it's a file (not a directory)
    if (!fileInfo.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not Found');
    }

    // Get file extension and mime type
    const ext = extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Set headers
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=0', // Disable caching for development
    });

    // Stream file to response
    const fileStream = createReadStream(filePath);
    fileStream.pipe(res);

    // Handle stream errors
    fileStream.on('error', err => {
      console.error('File stream error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
  } catch (err) {
    if (err.code === 'ENOENT') {
      // File not found
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not Found');
    }

    console.error('Server error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    return res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Serving files from: ${PUBLIC_DIR}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  server.close(() => {
    console.log('Server stopped.');
    process.exit(0);
  });
});