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

This folder is already a git repository with commits on the `main` branch.
To publish it:

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

## Publish with GitHub Pages

This project deploys via the **`gh-pages` branch method** — it builds the
site locally and pushes the static output to a `gh-pages` branch, which
GitHub Pages then serves. This avoids GitHub Actions entirely, so there's
no workflow to misconfigure or fail.

1. Make sure you've pushed to GitHub as above (you need a `origin` remote
   and at least one push to `main` first).
2. Install dependencies if you haven't already, then run:

   ```bash
   npm install
   npm run deploy
   ```

   This builds the site and pushes `dist/` to a `gh-pages` branch on your
   repo (creating it if needed), using the `gh-pages` npm package.
3. On GitHub, go to your repo → **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a
   branch**, then set **Branch** to `gh-pages` and folder to `/ (root)`,
   then **Save**.
5. After a minute or two, your site is live at:
   `https://<your-username>.github.io/<your-repo>/`

To publish future changes, just run `npm run deploy` again any time after
updating and committing your source changes.

The Vite config uses a relative base path (`base: "./"`) and the app uses a
hash router, so it works correctly at that GitHub Pages subpath with no
further configuration needed.

### If `npm run deploy` fails

- **Permission denied / auth error**: make sure `git push` to `origin`
  works normally first (i.e. your GitHub credentials/SSH key are set up in
  that terminal). `gh-pages` pushes using the same git credentials.
- **"remote: Repository not found"**: double check the `origin` remote URL
  matches your actual GitHub repo (`git remote -v`).

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
