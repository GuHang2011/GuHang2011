# Profile artwork

The current Overview uses two small, original SVG covers:

- `profile-cover-light.svg`: flat blue artwork for a light reading surface.
- `profile-cover-dark.svg`: the same composition for a dark system preference.

The README uses a native `<picture>` element. Its cover is decorative: the person's name, engineering focus, project details and navigation remain selectable text in the README. The illustrations contain no scripts, external fonts, analytics or remotely generated statistics. Project screenshots are expandable so they do not dominate the first reading screen.

## Earlier research animation

The earlier research-to-engineering diagram is retained:

- [research-motion.gif](research-motion.gif): an eight-second loop connecting questions, experiments, working systems and feedback. It has no flashes or automatic audio.
- [research-still.png](research-still.png): the static version.
- [research-banner.svg](research-banner.svg): the previous static banner.

The Overview no longer loads this animation automatically. [View the animation](research-motion.gif) or its [static version](research-still.png).

### Rebuild the archived animation

Requirements: Node.js 20+, Playwright with Chromium, and FFmpeg on `PATH`.

```sh
npm install --no-save --package-lock=false playwright@1.62.1
npx playwright install chromium
node scripts/generate-banner.cjs
```

The existing script creates the two raster assets and temporary frames in `.banner-build/`, which is ignored by Git. `BROWSER_CHANNEL` can select an installed Chromium channel such as `msedge`; `FFMPEG` can supply the executable path. Fonts use system families with fallbacks; font files are not bundled.

Artwork was created for this profile. No general reuse license is granted by this repository; contact the author before redistribution.
