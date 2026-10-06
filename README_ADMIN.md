# MS InnovateX backend/admin setup

The repository now contains a Node API server and a Firebase Realtime Database admin panel.

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

Open `/admin/admin.html` on the Node deployment. Credentials come from `ADMIN_USERNAME` and `ADMIN_PASSWORD`.

The panel can:
- hide/unhide and edit the homepage statistics bar
- edit global and per-page SEO title, description and keywords
- manage the popup advertisement, including compressed image, text and button
- view and delete contact, internship and email-marketing submissions

Email Marketing and Careers intentionally do not show the popup advertisement.

## Deployment

For Render, use:
- Build command: `npm install && npm run build`
- Start command: `npm start`

Set the variables from `.env.example`.

If Vercel hosts the React frontend separately, set `VITE_API_BASE_URL` to the Render API URL and add the Vercel origin to `FRONTEND_ORIGIN`. Keep the admin page on the Node/Render origin unless you also configure a same-origin reverse proxy.
