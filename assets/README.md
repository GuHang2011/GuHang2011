# About the profile animation

The profile banner is an original diagram of a research-to-engineering loop:
questions, experiments, working systems, and feedback. It uses no stock video,
external image service, copied illustration, or third-party footage.

- `research-motion.gif`: an eight-second loop. Text stays still; a short line
  moves slowly around the diagram. There are no flashes or automatic audio.
- `research-still.png`: the same composition without motion. The profile uses
  this for reduced-motion preferences where the renderer supports the media
  query, and always includes a direct static-image link.
- `research-banner.svg`: the previous static banner, retained as an archive.

GitHub README rendering supports an animated image without a video player or
external playback site. On small screens the diagram is decorative; the name,
research context and project links are also available as readable page text.

## Rebuild

Requirements: Node.js 20+, Playwright with Chromium, and FFmpeg on `PATH`.
Install Playwright locally and its browser, then run:

```sh
npm install --no-save --package-lock=false playwright@1.62.1
npx playwright install chromium
node scripts/generate-banner.cjs
```

The script creates the two raster assets and temporary frames in
`.banner-build/`, which is ignored by Git. `BROWSER_CHANNEL` can select an
installed Chromium channel such as `msedge`; `FFMPEG` can supply the executable
path. Fonts use system families with fallbacks, so rendering may differ slightly
between operating systems. Font files are not bundled or redistributed.

The artwork and generator were created for this profile. No general reuse
license is granted by this repository; contact the author before redistribution.
