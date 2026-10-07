const { chromium } = require('playwright');
const fs = require('node:fs/promises');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const build = path.join(root, '.banner-build');
const assets = path.join(root, 'assets');
const width = 1400;
const height = 430;
const fps = 12;
const duration = 8;

// Keep all text stationary; motion is limited to the diagram's connecting path.
function drawFrame({ frame, total }) {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const phase = frame / total;
  const color = {
    background: '#14363b',
    white: '#f8faf7',
    muted: '#b8ceca',
    line: '#456467',
    mint: '#9bd8c0',
    gold: '#edcc90',
    paper: '#ddebed',
  };
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color.background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const line = (points, stroke, lineWidth = 1) => {
    ctx.beginPath();
    points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = 'round';
    ctx.stroke();
  };
  const text = (value, x, y, font, fill = color.white) => {
    ctx.fillStyle = fill;
    ctx.font = font;
    ctx.fillText(value, x, y);
  };

  ctx.fillStyle = color.gold;
  ctx.fillRect(56, 52, 32, 3);
  text('RESEARCH & ENGINEERING', 104, 62, '19px "Segoe UI", sans-serif', color.muted);
  text('Hang Gu', 52, 184, '100px Cambria, Georgia, serif');
  text('Multimodal learning', 58, 240, '28px "Segoe UI", sans-serif');
  text('Intelligent retrieval + useful systems', 58, 284, '26px "Segoe UI", sans-serif', color.muted);
  line([[58, 326], [550, 326]], color.line);
  text('Research / Teaching / Engineering', 58, 365, '21px "Segoe UI", sans-serif', color.gold);

  line([[663, 54], [663, 376]], color.line);
  text('FROM QUESTION TO PRACTICE', 725, 68, '18px "Segoe UI", sans-serif', color.muted);
  const nodes = [
    { x: 757, label: 'Questions', number: '01', color: color.gold },
    { x: 970, label: 'Experiments', number: '02', color: color.mint },
    { x: 1183, label: 'Systems', number: '03', color: color.paper },
  ];
  const route = [[800, 186], [1013, 186], [1226, 186], [1226, 343], [800, 343], [800, 186]];
  line(route, color.line, 2);

  const segments = route.slice(1).map(([x, y], i) => ({
    x: route[i][0], y: route[i][1], dx: x - route[i][0], dy: y - route[i][1],
    length: Math.hypot(x - route[i][0], y - route[i][1]),
  }));
  const routeLength = segments.reduce((sum, segment) => sum + segment.length, 0);
  const traceAt = (distance) => {
    let remaining = (distance + routeLength) % routeLength;
    for (const segment of segments) {
      if (remaining <= segment.length) {
        return [segment.x + segment.dx * remaining / segment.length, segment.y + segment.dy * remaining / segment.length];
      }
      remaining -= segment.length;
    }
    return route[0];
  };
  const head = phase * routeLength;
  for (let i = 0; i < 40; i++) {
    ctx.globalAlpha = (i + 1) / 40;
    line([traceAt(head - 40 + i), traceAt(head - 39 + i)], color.mint, 4);
  }
  ctx.globalAlpha = 1;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    ctx.fillStyle = color.background;
    ctx.fillRect(node.x - 10, 130, 106, 118);
    text(node.number, node.x, 127, '17px "Segoe UI", sans-serif', color.muted);
    ctx.fillStyle = node.color;
    ctx.fillRect(node.x, 145, 86, 82);
    const ink = color.background;
    const x = node.x;
    if (i === 0) {
      line([[x + 26, 164], [x + 60, 164], [x + 60, 208], [x + 26, 208], [x + 26, 164]], ink, 2);
      line([[x + 34, 178], [x + 52, 178]], ink, 2);
      line([[x + 34, 187], [x + 52, 187]], ink, 2);
      line([[x + 34, 196], [x + 46, 196]], ink, 2);
    } else if (i === 1) {
      line([[x + 24, 164], [x + 24, 209], [x + 66, 209]], ink, 2);
      line([[x + 32, 193], [x + 43, 184], [x + 52, 188], [x + 63, 170]], ink, 3);
    } else {
      for (const y of [165, 192]) {
        line([[x + 23, y], [x + 63, y], [x + 63, y + 16], [x + 23, y + 16], [x + 23, y]], ink, 2);
        line([[x + 29, y + 8], [x + 33, y + 8]], ink, 3);
        line([[x + 40, y + 8], [x + 56, y + 8]], ink, 2);
      }
    }
    ctx.textAlign = 'center';
    text(node.label, node.x + 43, 270, '24px "Segoe UI", sans-serif');
    ctx.textAlign = 'start';
  }

  for (const x of [901, 1114]) {
    line([[x - 6, 180], [x, 186], [x - 6, 192]], color.muted, 2);
  }
  ctx.fillStyle = color.background;
  ctx.fillRect(875, 326, 283, 34);
  ctx.textAlign = 'center';
  text('Build. Evaluate. Refine.', 1015, 351, '20px "Segoe UI", sans-serif', color.muted);
  ctx.textAlign = 'start';
  line([[857, 338], [851, 343], [857, 348]], color.muted, 2);
}

async function main() {
  await fs.mkdir(build, { recursive: true });
  await fs.mkdir(assets, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.BROWSER_CHANNEL ? { channel: process.env.BROWSER_CHANNEL } : {}),
  });
  try {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    await page.setContent(`<html><body style="margin:0;background:#14363b"><canvas width="${width}" height="${height}" style="display:block"></canvas></body></html>`);
    for (let frame = 0; frame < fps * duration; frame++) {
      await page.evaluate(drawFrame, { frame, total: fps * duration });
      await page.locator('canvas').screenshot({ path: path.join(build, `frame-${String(frame).padStart(3, '0')}.png`) });
    }
    await fs.copyFile(path.join(build, 'frame-016.png'), path.join(assets, 'research-still.png'));
  } finally {
    await browser.close();
  }
  const result = spawnSync(process.env.FFMPEG || 'ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-y',
    '-framerate', String(fps), '-i', path.join(build, 'frame-%03d.png'),
    '-filter_complex', '[0:v]split[a][b];[a]palettegen=max_colors=64:reserve_transparent=1[p];[b][p]paletteuse=dither=bayer:bayer_scale=3:diff_mode=rectangle',
    '-loop', '0', path.join(assets, 'research-motion.gif'),
  ], { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`FFmpeg exited with ${result.status}`);
  const stat = await fs.stat(path.join(assets, 'research-motion.gif'));
  console.log(`Generated ${width}x${height}, ${duration}s, ${fps * duration} frames, ${stat.size} bytes.`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
