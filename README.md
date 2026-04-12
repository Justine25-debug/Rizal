# Rizal

React + Vite project configured for GitHub Pages.

## Live URL

https://justine25-debug.github.io/Rizal/

## GitHub Pages deployment

This project is configured with:

- `homepage`: `https://justine25-debug.github.io/Rizal/`
- Vite production base path: `/Rizal/`
- SPA reload fallback using `public/404.html` + redirect restore in `index.html`
- deploy scripts using `gh-pages`

### Publish steps

1. Install dependencies
   - `npm install`
2. Deploy to GitHub Pages
   - `npm run deploy`

The deploy script builds the app and publishes the `dist` folder to the `gh-pages` branch.

### Required GitHub repo setting

In your repository settings:

- Go to **Settings > Pages**
- Set **Source** to **Deploy from a branch**
- Select branch **gh-pages** and folder **/(root)**
