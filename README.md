# carenyc-farhan

Marketing site for BBA (Business Branding Advertisement), built from the
"Carenyc website design" Figma file.

## Stack

- [Vite](https://vite.dev) + React 19
- React Router for pages
- Sass (SCSS modules) for styling: one `*.module.scss` per component

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint
```

Fonts (Avenir LT Std, Butler) live in `public/fonts` (see `public/fonts/README.md`).

## Structure

```
src/
  assets/            images and icons exported from Figma
  components/        reusable building blocks (Header, Footer, ProjectShowcase, buttons...)
  data/              page content: projects, about, services, navigation
  pages/Home/        Home page and its sections
  styles/            design tokens (_variables), mixins/breakpoints, fonts, global styles
```

- **Design tokens** (colors, fonts, layout sizes, breakpoints) live in `src/styles/_variables.scss`.
  Use them in any module with `@use '@/styles' as *;`.
- **Responsive styles**: the 1440px desktop design is the base. Add smaller-screen
  overrides with `@include down(md) { ... }` (breakpoints: `xl`, `lg`, `md`, `sm`, `xs`).
- **Project media**: the project images are placeholders. To use a video, change a
  project's `card.media` in `src/data/projects.js` to
  `{ type: 'video', src, poster }`.

## Status

- [x] Home, Work, About, Services and Contact pages (desktop)
- [ ] Contact form submission (needs an email service / API)
- [ ] Mobile / tablet layouts (current small-screen styles are provisional)
