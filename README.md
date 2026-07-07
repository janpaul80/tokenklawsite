# TokenKlaw site

This is the public website for TokenKlaw. It explains what the tool does, shows the install flow, and gives people a quick way to find the GitHub repo.

Live site: [tokenklawsite.vercel.app](https://tokenklawsite.vercel.app)

## What is in here

- Next.js landing page for TokenKlaw
- Install sections for macOS, Linux, WSL, and Windows
- Supported runtime list
- Token saving examples and benchmark sections
- Privacy, terms, about, and footer pages
- Public install scripts under `public/`

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Run it locally

```bash
git clone https://github.com/janpaul80/tokenklawsite.git
cd tokenklawsite
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful scripts

```bash
npm run dev      # Start the local site
npm run build    # Build the site
npm run start    # Run the production build
npm run lint     # Run lint checks
```

## Notes

- `app/` has the pages.
- `components/` has the shared site sections.
- `public/` has logos, media, and install scripts.

## Status

Live marketing and docs site. Keep the install commands in this repo aligned with the main [TokenKlaw repo](https://github.com/janpaul80/tokenklaw).
