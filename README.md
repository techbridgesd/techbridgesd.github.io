# TechBridge SD — Website

A multi-page website for **TechBridge SD**, a student-led community project that
brings free **AI literacy** and **cybersecurity** workshops to senior centers
across San Diego.

Built with **Vite + React + TypeScript + Tailwind CSS**, a shadcn-style Button
component, and an embedded **Spline 3D** hero background.

---

## Quick start

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the local dev server  → http://localhost:5173
npm run build    # create a production build in /dist
npm run preview  # preview the production build locally
```

> Requires [Node.js](https://nodejs.org) 18 or newer.

---

## Pages

| Route       | Page             | What it covers                                            |
| ----------- | ---------------- | --------------------------------------------------------- |
| `/`         | Home             | Mission, overview, what we teach, stats placeholder, CTA  |
| `/about`    | About            | Problem, why it matters, goals, origin story, future      |
| `/research` | Research / Info  | Facts, charts, findings, how research drives the project  |
| `/process`  | Project Process  | Timeline, phases, photo placeholders, challenges/solutions|
| `/contact`  | Contact          | Contact details, social links, working contact form       |
| `/results`  | Results / Impact | Outcomes framework, before/after sample, lessons, next steps |

The navigation bar and footer appear on every page.

---

## Customizing it

### Your logo

The site uses a built-in **SVG recreation** of the logo so it looks right
immediately. To use your real image:

1. Save your logo as `public/logo.png` (this updates the browser-tab icon).
2. (Optional) To show the PNG in the navbar/footer, edit
   `src/components/Logo.tsx` — there's a comment at the top explaining how.

### Colors & fonts

All brand colors live as CSS variables in `src/index.css` (`:root`), and the
font (Google **Sora**) is loaded in `index.html`. Tailwind maps the variables in
`tailwind.config.js`.

Brand palette: navy `#16395c`, teal `#159fb5`, gold `#f4a93a`, neutral gray.

### Real statistics

Search for the `—` (dash) placeholders on the **Home** and **Results** pages and
replace them with your real numbers as your program grows.

### Making the contact form collect messages automatically

Right now the form opens the visitor's email app with the message pre-filled
(no server required). To collect submissions automatically:

1. Create a free form at [Formspree](https://formspree.io) and copy your form ID.
2. In `src/pages/Contact.tsx`, replace the `mailto:` logic in `handleSubmit`
   with a `fetch("https://formspree.io/f/YOUR_ID", { method: "POST", ... })`.

---

## Deploying (free options)

Any static host works because `npm run build` produces a plain `/dist` folder.

- **Netlify / Vercel:** connect the repo (or drag-and-drop the `dist` folder).
  A SPA redirect rule is already included in `public/_redirects` for Netlify.
- **GitHub Pages:** upload the contents of `dist`.

---

## Documentation / deliverables

See the [`docs/`](./docs) folder:

- `sitemap.md` — site structure
- `homepage-wireframe.md` — text wireframe of the home page
- `references.md` — sources cited
- `project-reflection.md` — project reflection

---

## Tech notes

- The Spline 3D scene is lazy-loaded with a navy fallback, so it never blocks the
  page from appearing. If a visitor's device can't run it, they still see a clean
  dark hero.
- Content pages use a light, high-contrast theme with large type — chosen
  deliberately for an older audience.
- Accessibility: alt text / ARIA labels on images and icons, visible keyboard
  focus outlines, semantic headings, and AA-level color contrast.
