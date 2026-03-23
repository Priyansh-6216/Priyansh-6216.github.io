# Priyansh Suthar — Portfolio

Interactive developer portfolio built with **React + Vite**, **Three.js**, and **Framer Motion**. Features a live AI chat powered by the **Anthropic Claude API**.

## Tech Stack

- **React 18** + **Vite 5** — fast dev server and builds
- **Three.js** + **@react-three/fiber** — 3D particle sphere, floating rings, animated grid
- **Framer Motion** — page transitions, scroll animations, micro-interactions
- **GSAP** — available for advanced timeline animations
- **Lenis** — buttery smooth scrolling
- **Tailwind CSS v3** — utility styling
- **Anthropic Claude API** — live AI chat assistant
- **React Type Animation** — typewriter effect in hero

## Project Structure

```
src/
├── components/
│   ├── Cursor.jsx        # Custom animated cursor
│   ├── Footer.jsx
│   ├── HeroCanvas.jsx    # Three.js scene (particles, rings, grid)
│   ├── Loader.jsx        # Entry loading screen
│   └── Navbar.jsx
├── hooks/
│   ├── useCursor.js      # Cursor position logic
│   └── useSmoothScroll.js # Lenis smooth scroll
├── sections/
│   ├── Hero.jsx          # Three.js hero + type animation
│   ├── About.jsx         # Skills grid
│   ├── Experience.jsx    # Tabbed work history
│   ├── Projects.jsx      # 6-project card grid
│   ├── AiChat.jsx        # Live Claude AI chat
│   ├── Certifications.jsx
│   └── Contact.jsx
├── utils/
│   └── data.js           # All portfolio content lives here
├── App.jsx
├── main.jsx
└── index.css
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add your API key

Create a `.env` file in the root:

```env
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

Get your key at: https://console.anthropic.com

### 3. Run locally

```bash
npm run dev
```

Open http://localhost:5173

### 4. Build for production

```bash
npm run build
```

---

## Deploy to Vercel (Recommended)

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. When asked for build settings, Vercel auto-detects Vite.

Then add your env variable in the Vercel dashboard:
- Go to your project → **Settings** → **Environment Variables**
- Add `VITE_ANTHROPIC_API_KEY` = your key

### Option B — GitHub + Vercel dashboard

1. Push this project to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to https://vercel.com → **New Project** → Import your repo

3. Add env variable: `VITE_ANTHROPIC_API_KEY`

4. Click **Deploy** — done in ~60 seconds ✅

---

## Customization

All content is centralized in `src/utils/data.js`:

- **`PROJECTS`** — add/remove/edit projects
- **`EXPERIENCE`** — work history bullets
- **`SKILLS`** — skill categories and items
- **`CERTIFICATIONS`** — cert names, issuers, icons
- **`EDUCATION`** — degrees and schools
- **`AI_SYSTEM_PROMPT`** — controls what the AI assistant knows about you

To update colors, edit `tailwind.config.js` and `src/index.css` CSS variables.

---

## Notes

- The Claude API is called directly from the browser. This is fine for a personal portfolio — your API key is in the Vercel env and not exposed in the built bundle as long as you don't log it.
- If you want to protect the key in production, create a simple Vercel serverless function in `/api/chat.js` to proxy the request.
