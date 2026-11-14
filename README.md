# Level design portfolio starter

Plain HTML, CSS and JavaScript. No dependencies, build step or remote assets.

## Run

Open `index.html` directly in a browser. No installation is needed.
You can also serve this folder with any static web server. For example, if Python is installed, run `python -m http.server 8000` inside this folder and visit `http://localhost:8000`.
Upload this folder's contents to any static host when ready, preserving the directory structure.

## Edit

- **Name and role:** `assets/projects.js`. Update HTML page titles and descriptions before publishing too.
- **Project cards:** edit the array in `assets/projects.js`. It controls titles, labels, focus text, image paths, destinations and order. Optional `position: '60% center'` adjusts image crops.
- **Images:** replace the original SVG blockout illustrations with screenshots in `assets/images/` and update the data paths. Wide images around 1600 × 700 work well. Remove the `placeholder-label` element creation in `assets/site.js` when real screenshots are added. Images have empty alt text because they are decorative behind the project label; add useful alt text in the renderer if a screenshot conveys essential information.
- **Colours:** change the CSS custom properties at the top of `assets/styles.css`. Image text and overlay colours are separate for readability.
- **Header/footer:** edit the shared renderer in `assets/site.js` once for every page.
- **Sections:** reuse `.container`, `.intro`, `.section-heading` and `.project-list`. The project renderer is the reusable card component.
- **Placeholder pages:** About, Resume and the three distinct detail pages intentionally have no visible main content. Shared navigation/footer and hidden accessible headings remain. Add sections inside `<main>` when ready.
- **New project:** add a data entry AND copy an existing project HTML page to the destination path. Files are not generated automatically.
- **Nested pages:** pages one folder deep use `data-base="../"` and `../assets/` references. Top-level pages use an empty base.

## Accessibility

Semantic landmarks, skip link, native links, visible keyboard focus and current-page navigation. Navigation stays visible on mobile. No animation or hover-dependent controls. Shared navigation and project cards require JavaScript; a noscript notice explains this. Check contrast and mobile image crops after replacing placeholders.
