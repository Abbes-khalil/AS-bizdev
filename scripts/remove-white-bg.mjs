import sharp from "sharp";
import path from "path";

const DIR = "public/brand_assets/partenaires";

// Soft chroma-key on white: pixels at/above WHITE_HI become fully
// transparent, pixels at/below WHITE_LO stay fully opaque, and the band
// between is a linear feather so anti-aliased logo edges don't get a hard
// cutout ring.
const WHITE_HI = 250;
const WHITE_LO = 225;

const targets = [
  "BBC.webp",
  "Emba.webp",
  "Incenteev.webp",
  "TS.webp",
  "fstb.jpg",
  "lpe.jpg",
  "Promed.png",
  "Sementis.png",
  "Surfaprotec.png",
  "Business_france.png",
  "taa.png",
];

const run = async () => {
  for (const file of targets) {
    const inPath = path.join(DIR, file);
    const outPath = path.join(DIR, path.parse(file).name + "-transparent.png");

    const img = sharp(inPath);
    const { data, info } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    const { width, height, channels } = info;

    for (let i = 0; i < width * height; i++) {
      const idx = i * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const whiteness = Math.min(r, g, b);

      let alphaMul;
      if (whiteness >= WHITE_HI) alphaMul = 0;
      else if (whiteness <= WHITE_LO) alphaMul = 1;
      else alphaMul = 1 - (whiteness - WHITE_LO) / (WHITE_HI - WHITE_LO);

      data[idx + 3] = Math.round(data[idx + 3] * alphaMul);
    }

    await sharp(data, { raw: { width, height, channels } })
      .png()
      .toFile(outPath);

    console.log("wrote", outPath);
  }
};

run();
