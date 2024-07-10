This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

## Learnings

- Asyncronism
- Fetch: see file fetch.tsx from functions folder, and page.tsx file to view how to apply that Learnings
- Dark mode: how to set a button which change the entire page to light mode to dark mode. In tailwind.config.ts, set darkmode: "class", then, in tag html put a class called dark. Dark class works like a breakpoint but this "breakpoint" (dark) works when user clicked a button. In this case, user can click in the moon icon 
- Tailwind don´t recognize js validations. To validate we can use clsx library. To view how to use clsx to validate, view darkMode.tsx file into functions folder.
- We can use normal css with Tailwind, but tags like breakpoints (sm, md, etc) don´t recongize personalized classes. Instead we have to create traditional breakpoints css. To see that, please view global.css file, in this file there is a class called manualGrid. this class has their own breakpoints made with css normal.
- How to set favicon: put in the root folder (app) a favicon and in layout.tsx folder (the root layout) add a head tag and link a favicon.
- @apply directive to group all tailwind classes used in a certain tag. See global.css file.
- Display grid: Featured income section has a display grid. in large screens we used grid-template-rows, grid-template-columns and grig-template-areas.
- Global css: we can use this file to create a entire design system into this file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
