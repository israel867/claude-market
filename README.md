# Kurtz Auto Detailing — Website

Professional static website for Kurtz Auto Detailing, a premium mobile auto detailing business in Navasota, TX serving Bryan, College Station, Brenham, Montgomery, Waller, and Magnolia.

## File Structure

```
├── index.html              # Home page
├── services.html           # Full services & pricing menu
├── gallery.html            # Before & after photo gallery
├── reviews.html            # Client reviews
├── faq.html                # Frequently asked questions
├── about.html              # About the business
├── quote.html              # Free quote request form
├── college-station.html    # Service area — College Station
├── bryan.html              # Service area — Bryan
├── brenham.html            # Service area — Brenham
├── montgomery.html         # Service area — Montgomery
├── waller.html             # Service area — Waller
├── magnolia.html           # Service area — Magnolia
├── styles.css              # Shared stylesheet
├── main.js                 # Shared JavaScript (menu, accordion, form)
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # Crawler directives
├── images/                 # Image assets (see images/README.md)
│   └── README.md           # Image placement guide
└── README.md               # This file
```

## Tech Stack

- Pure HTML, CSS, JavaScript — no frameworks, no build step
- Google Fonts: Barlow Condensed + DM Sans
- Mobile-first responsive design
- Dark premium theme with amber/gold accent

## Local Development

Open any `.html` file in a browser, or run a local server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

## Deploy to Netlify

1. Push this repo to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click **"Add new site" → "Import an existing project"**
4. Select the GitHub repo
5. Build settings: leave blank (no build command needed for static HTML)
6. Deploy

### Custom Domain

After deploying:
1. Go to **Site settings → Domain management → Add custom domain**
2. Enter `kurtzautodetailing.com`
3. Update your domain's DNS:
   - Add a CNAME record pointing to your Netlify site URL
   - Or use Netlify DNS for automatic configuration
4. Netlify will provision a free SSL certificate automatically

### Form Handling

The quote form on `quote.html` currently shows a JS confirmation. To receive submissions:

**Option A — Netlify Forms (easiest):**
Add `netlify` attribute to the form tag: `<form id="quote-form" netlify>`

**Option B — Formspree:**
1. Create a free account at [formspree.io](https://formspree.io)
2. Update the form action: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

## Adding Images

See `images/README.md` for a complete guide on which images go where, recommended dimensions, and alt text.

## SEO

Every page includes:
- Unique title tag and meta description
- Local Business JSON-LD structured data
- Open Graph tags for social sharing
- Semantic HTML with proper heading hierarchy
- Image alt text with location keywords
- Internal linking — no dead ends
- XML sitemap and robots.txt
