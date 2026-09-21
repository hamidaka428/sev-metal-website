# СЕВ Метал — Website

A responsive business website developed from scratch for **СЕВ Метал ЕООД**, a metal fabrication company based in Varna, Bulgaria.

The website presents the company's products, services, completed projects, company information, and contact options through a custom responsive interface.

**Live site:** https://sevmetal.bg/

## Pages

- Home (`index.html`)
- Products (`izdeliya.html`)
- Gallery (`galeriya.html`)
- About (`za-nas.html`)
- Contact (`kontakti.html`)

## Product Categories

The website presents five main product categories:

- Metal doors
- Fences and gates
- Railings
- Grilles
- Metal structures

## Features

- Responsive layout for desktop and mobile
- Custom navigation with mobile menu
- Scroll-based header behavior
- Scroll/reveal animations using the Intersection Observer API
- Product and service presentation
- Project gallery with category filtering
- Gallery lightbox with previous/next navigation and keyboard controls
- Contact section with a pre-filled email inquiry using `mailto:`
- Lazy-loaded gallery images
- SEO-oriented page metadata
- Open Graph metadata
- JSON-LD structured data
- `sitemap.xml`
- `robots.txt`

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Oswald, Inter, JetBrains Mono)
- Responsive web design

No frontend framework is used. The main interactive functionality is implemented in `assets/js/main.js`, while the custom styling is contained in `assets/css/style.css`.

## Project Structure

```text
sev-metal-website/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── facebook/
│       ├── izdeliya/
│       ├── konstrukcii/
│       ├── ogradi/
│       ├── parapeti/
│       ├── reshetki/
│       └── vrati/
├── index.html
├── izdeliya.html
├── galeriya.html
├── za-nas.html
├── kontakti.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## Gallery

The gallery uses local project images and is generated dynamically by `assets/js/main.js`. Images are grouped by product category and loaded lazily to reduce the initial page load.

## Contact

The contact form prepares an email inquiry using the visitor's entered name, phone number, selected product type, and message. It opens the visitor's configured email client through `mailto:` rather than using a server-side form handler.

## Deployment

The project is a static website and can be deployed to a standard web host by uploading the project files while keeping the directory structure intact.

## Live Website

Visit the production website:

https://sevmetal.bg/
