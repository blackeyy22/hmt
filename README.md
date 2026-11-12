# HMT Homepage

Hindustan Machine Tools homepage built with Next.js App Router and React. The project includes the scroll-controlled hero film, project selector, curved service gallery, industry gallery, project process animation, enquiry forms, survey dialog and animated footer steam.

## Local development

Use Node.js 22 LTS and npm. Dependency versions are pinned in `package-lock.json`.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production container

Install Docker Desktop with Linux containers, or Docker Engine with Compose on Linux. From this folder:

```sh
docker compose up --build -d
```

Open http://localhost:3000. The multi-stage build compiles Next.js and serves the static export through Nginx on container port 8080. The runtime runs as a non-root user with a read-only filesystem; temporary files use `/tmp`. Nginx supports video byte ranges for scroll seeking. No database, external media service or environment secrets are required.

```sh
docker compose logs -f website
docker compose down
```

Set the `PORT` environment variable before running Compose to change the host port.

For an optional containerized development server:

```sh
docker build --target development -t hmt-homepage-dev .
docker run --rm -p 3000:3000 hmt-homepage-dev
```

## Build without Docker

```sh
npm run check
npm run build
```

The production website is exported to `out/`. Serve that directory with a static host that supports byte-range requests. The Next.js configuration uses `output: 'export'`; `next start` does not apply to this static-export setup.

## Source structure

| Path                              | Purpose                                                      |
| --------------------------------- | ------------------------------------------------------------ |
| `app/page.jsx`                    | Homepage composition and interaction scripts                 |
| `app/layout.jsx`                  | Page metadata, stylesheet order and document shell           |
| `components/site-header.jsx`      | Header, navigation and mobile menu                           |
| `components/homepage-content.jsx` | Homepage section order and Why HMT content                   |
| `components/sections.jsx`         | Project, service and industry galleries and their content    |
| `components/scroll-hero.jsx`      | Scroll-to-video timeline and hero controls                   |
| `components/journey.jsx`          | Connected process illustration and animation                 |
| `components/contact.jsx`          | Enquiry form layouts and fields                              |
| `components/footer-smoke.jsx`     | Textured steam and water reflection rendering                |
| `components/site-footer.jsx`      | Footer content and smoke placement                           |
| `components/survey-dialog.jsx`    | Site survey popup                                            |
| `public/app.js`                   | Navigation, gallery and form interaction controllers         |
| `public/motion.js`                | Section entrance and press animations                        |
| `public/hmt-original.css`         | Base styles and utility classes                              |
| `public/styles.css`               | Homepage layout styles                                       |
| `public/redesign.css`             | Interactive section and responsive styles                    |
| `public/assets/hmt/`              | Images, logos, steam texture and hero video used by the page |
| `docker/nginx.conf`               | Static hosting, cache headers and video delivery             |

The markup is JSX throughout. Animation controllers also use browser APIs and canvas; no HTML parser or external animation library is required.

## Integration and completion

Run `npm test` and `npm run check` before building. Review enquiry form delivery and deployment configuration before production use.
