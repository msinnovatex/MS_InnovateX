# MS InnovateX backend/admin setup

The repository contains a Vite React frontend, a Vercel-compatible Node API function, and a Firebase Realtime Database admin panel.

## Firebase

Create a Realtime Database and a server service account.

The application automatically creates its configuration under:

`MSINNOVATEX/siteConfig`

Submissions are stored under:

`MSINNOVATEX/submissions/contact`
`MSINNOVATEX/submissions/internship`
`MSINNOVATEX/submissions/emailMarketing`

## Admin

Open `/admin/admin.html` on the Vercel deployment.

The panel can:
- hide/unhide and edit the homepage statistics bar
- edit global and per-page SEO title, description and keywords
- manage the popup advertisement, including compressed image, text and button
- add/remove custom global and per-page meta tags
- change the admin username and password from the Security tab
- view and delete contact, internship and email-marketing submissions

Email Marketing and Careers intentionally do not show the popup advertisement.

## Vercel deployment

This repository is configured for a single Vercel deployment:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- API function: `api/[...path].js`
- Admin panel: `/admin/admin.html`

In Vercel Project Settings -> Environment Variables, add:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `FIREBASE_DATABASE_URL`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`

Leave `VITE_API_BASE_URL` empty for same-origin API requests. `FRONTEND_ORIGIN` can also be left empty because frontend and API share the Vercel origin.
