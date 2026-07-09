# TS Master — Learn TypeScript, Interactively

A self-contained study site for going from "never seen TypeScript" to
comfortable-with-generics-and-conditional-types. Twelve modules, ordered
basics → advanced, each with a live in-browser playground (Monaco editor +
the real TypeScript compiler, with a Run button and console output) and a
short quiz to check your understanding. Progress is saved in your browser
(`localStorage`), and every module can be marked complete.

Built with React + TypeScript + Vite. Inspired by
[typescriptlang.org](https://www.typescriptlang.org/).

## Modules

1. Getting Started
2. Basic Types
3. Functions
4. Interfaces & Type Aliases
5. Unions, Intersections & Narrowing
6. Classes & OOP
7. Enums & Literal Types
8. Generics
9. Advanced Types (utility types, mapped & conditional types)
10. Modules & Organizing Code
11. Decorators
12. Real-World TypeScript

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL.

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output goes to `dist/`.

## Push this to GitHub

This folder is already a git repository with one commit on the `main`
branch. To publish it:

1. Create a new **empty** repository on GitHub (no README/license/
   .gitignore — this project already has those). For example:
   `https://github.com/new` → name it e.g. `ts-master`.
2. In a terminal, `cd` into this project folder, then run:

   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

   (Use the exact URL GitHub shows you after creating the repo — it may
   differ slightly, e.g. if you chose SSH instead of HTTPS.)

## Publish with GitHub Pages (automatic)

A workflow is already included at `.github/workflows/deploy.yml`. Once you
push to `main`:

1. On GitHub, go to your repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push a commit (or re-run the workflow from the **Actions** tab). The
   workflow builds the site and deploys it automatically.
4. Your site will be live at:
   `https://<your-username>.github.io/<your-repo>/`

The Vite config uses a relative base path (`base: "./"`) and the app uses a
hash router, so it works correctly at that GitHub Pages subpath with no
further configuration needed.

Every future push to `main` redeploys automatically.

## Tech notes

- **Playground**: `@monaco-editor/react` loads the Monaco editor (same
  editor VS Code uses) from a CDN at runtime, and gets you real inline
  TypeScript type-checking as you type. The `typescript` npm package is
  lazy-loaded on first "Run" click and used to transpile + execute your
  code, capturing `console.log` output.
- **Routing**: `react-router-dom` with `HashRouter`, so client-side routes
  (`#/module/generics`) work on static hosting like GitHub Pages without
  any server-side rewrite rules.
- **Progress tracking**: stored in `localStorage`, no backend required.
