This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Decisions and reasoning

- Using Next's Link component as it allows user-side navigation without full page reloads.
- API key and read access token securely stored in .env.local for security 
- tmbd.ts helper created to keep all tmbd related code in one place and stay clean when more functions are added (search, top rated etc)
- Usin a dynamic route for movie page (movie/[id]) so whatever appears after movie/ become the id parameter
- Using append_to_response=credits in getMovieDetails to combine them in to 1 request as it's more efficient (usually need 2 API requests: /movie/550 & /movie/550/credits)
