# MS InnovateX backend/admin setup

The repository contains a Vite React frontend, a Vercel-compatible Node API function, and a Firebase Realtime Database admin panel.

## Firebase

Create a Realtime Database and a server service account. The server uses a Google OAuth access token generated from the service-account private key, so the service-account key must stay on the server and must never be placed in React code.

For production, use the included `database.rules.json` so browser clients cannot read or write the database. The Node server uses a Google OAuth service-account token, which can bypass Realtime Database Rules for server-side access.

The application automatically creates its configuration under:

`MSINNOVATEX/siteConfig`

Submissions are stored under:

`MSINNOVATEX/submissions/contact`
`MSINNOVATEX/submissions/internship`
`MSINNOVATEX/submissions/emailMarketing`

## Admin

Open `/admin/admin.html` on the Vercel deployment. On first deployment, `ADMIN_USERNAME` and `ADMIN_PASSWORD` bootstrap the Firebase credential record; after that, `MSINNOVATEX/adminAuth` is authoritative.

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

Do not put Firebase service-account credentials in any `VITE_*` variable.


## Admin credentials

The admin credential record is stored at `MSINNOVATEX/adminAuth` with `username` and `password` fields. This is intentionally plaintext so you can directly change the credentials in Firebase when needed.

On the first startup, if `MSINNOVATEX/adminAuth` does not exist, the server uses `ADMIN_USERNAME` and `ADMIN_PASSWORD` to create it. After that, the Firebase record is authoritative. To change credentials, edit `MSINNOVATEX/adminAuth/username` and `MSINNOVATEX/adminAuth/password` in Firebase, then use the new credentials to log in.

**Security warning:** plaintext passwords in a database are less secure than hashed passwords. Restrict Firebase access to trusted administrators and never expose this node through public client-side Firebase access.

