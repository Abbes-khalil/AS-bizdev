<?php
/**
 * AS Biz Dev — theme bootstrap.
 *
 * Serves the React SPA through WordPress:
 *  - enqueues the hashed JS/CSS produced by `npm run build:wp`
 *  - lets the SPA handle every front-end URL instead of WordPress 404ing
 *
 * Asset filenames are hashed on each build, so they are read from Vite's
 * manifest rather than hardcoded.
 */

if (!defined('ABSPATH')) {
    exit;
}

define('ASBIZDEV_DIST', get_stylesheet_directory() . '/assets');
define('ASBIZDEV_DIST_URI', get_stylesheet_directory_uri() . '/assets');

/**
 * Read the Vite manifest and return the entry's js/css paths.
 */
function asbizdev_manifest_entry()
{
    static $entry = null;
    if ($entry !== null) {
        return $entry;
    }

    $paths = [
        ASBIZDEV_DIST . '/.vite/manifest.json',
        ASBIZDEV_DIST . '/manifest.json',
    ];

    foreach ($paths as $path) {
        if (!file_exists($path)) {
            continue;
        }

        $manifest = json_decode(file_get_contents($path), true);
        if (!is_array($manifest)) {
            continue;
        }

        foreach ($manifest as $item) {
            if (!empty($item['isEntry'])) {
                $entry = $item;
                return $entry;
            }
        }
    }

    $entry = [];
    return $entry;
}

/**
 * Enqueue the built bundle.
 */
function asbizdev_enqueue_assets()
{
    $entry = asbizdev_manifest_entry();

    if (empty($entry)) {
        return;
    }

    $version = wp_get_theme()->get('Version');

    foreach ($entry['css'] ?? [] as $css) {
        wp_enqueue_style(
            'asbizdev-' . sanitize_key($css),
            ASBIZDEV_DIST_URI . '/' . $css,
            [],
            $version
        );
    }

    if (!empty($entry['file'])) {
        wp_enqueue_script(
            'asbizdev-app',
            ASBIZDEV_DIST_URI . '/' . $entry['file'],
            [],
            $version,
            true
        );
    }

    // Preconnect to Google Fonts, matching the standalone build.
    add_filter('wp_resource_hints', function ($hints, $relation) {
        if ($relation === 'preconnect') {
            $hints[] = 'https://fonts.googleapis.com';
            $hints[] = ['href' => 'https://fonts.gstatic.com', 'crossorigin'];
        }
        return $hints;
    }, 10, 2);
}
add_action('wp_enqueue_scripts', 'asbizdev_enqueue_assets');

/**
 * The bundle is an ES module — WordPress emits a plain <script> otherwise.
 */
function asbizdev_module_type($tag, $handle, $src)
{
    if ($handle !== 'asbizdev-app') {
        return $tag;
    }

    return sprintf('<script type="module" src="%s"></script>' . "\n", esc_url($src));
}
add_filter('script_loader_tag', 'asbizdev_module_type', 10, 3);

/**
 * Routing: the SPA owns every front-end URL.
 *
 * WordPress has no posts or pages matching /who-is-who etc., so it would
 * return 404. We keep rendering index.php but correct the status to 200 —
 * otherwise search engines drop every page but the homepage.
 *
 * wp-admin, the REST API, feeds and the login page are left untouched.
 */
function asbizdev_spa_routing()
{
    if (is_admin() || wp_doing_ajax() || is_feed() || is_robots()) {
        return;
    }

    if (defined('REST_REQUEST') && REST_REQUEST) {
        return;
    }

    if (is_404()) {
        status_header(200);
        nocache_headers();
    }
}
add_action('template_redirect', 'asbizdev_spa_routing');

/**
 * Strip WordPress's front-end clutter — none of it applies to a React app.
 */
function asbizdev_cleanup()
{
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
}
add_action('init', 'asbizdev_cleanup');

/** Don't load the block editor's front-end CSS — nothing uses it. */
function asbizdev_dequeue_block_styles()
{
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('global-styles');
    wp_dequeue_style('classic-theme-styles');
}
add_action('wp_enqueue_scripts', 'asbizdev_dequeue_block_styles', 100);

function asbizdev_theme_support()
{
    add_theme_support('title-tag');
    add_theme_support('html5', ['style', 'script']);
}
add_action('after_setup_theme', 'asbizdev_theme_support');
