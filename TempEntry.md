# Temporary entry before being transfered to a real blog
## Wednesday, 25 May 2022
### Installed [Simple-Icons](https://github.com/simple-icons/simple-icons) to Astro
I was easy, just enter the command line inside our Astro directory..
```
npm install simple-icons
```
What kind of magic was there I don't understand yet, but the installer detected Astro and add the dependecies in the package.json file...
```
"dependencies": {
    "simple-icons": "^6.23.0"
  }
```
next will be experimenting simple-icons inside of an Astro component.

### Tutorial to watch
1. [Build a Static Site with Figma & Astro #7 - CSS Setup & Open Props](https://www.youtube.com/watch?v=GBrYC49gYgc&list=PL4cUxeGkcC9hZm9NYpd4G-jhoeEk0ls--&index=7)
## Tuesday, 24 May 2022
### New Sites Discovery
1. [Simple Icons](https://simpleicons.org/) -- 2255 Free SVG icons for popular brands
2. [HyperUI](https://www.hyperui.dev/) -- Free Open Source Tailwind CSS Components
When I add tailwind to Astro...
```
Astro will make the following changes to your config file:

 ╭ astro.config.mjs ─────────────────────────────╮
 │ import { defineConfig } from 'astro/config';  │
 │                                               │
 │ import tailwind from "@astrojs/tailwind";     │
 │                                               │
 │ // https://astro.build/config                 │
 │ export default defineConfig({                 │
 │   integrations: [tailwind()]                  │
 │ });                                           │
 ╰───────────────────────────────────────────────╯

√ Continue? ... yes

  Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭───────────────────────────────────╮
 │ yarn add --dev @astrojs/tailwind  │
 ╰───────────────────────────────────╯

√ Continue? ... yes
✔ Installing dependencies...

  Astro will generate a minimal ./tailwind.config.cjs file.

√ Continue? ... yes
  
   success  Added the following integration to your project:
  - @astrojs/tailwind
Done in 86.14s.
```

What is the command??
```
yarn astro add tailwind
```
taken from [official Tailwind Astro integration Repo](https://github.com/withastro/astro/tree/main/packages/integrations/tailwind)

## Monday, 23 May 2022
Should check out [SHIRYO](https://shiryo.com/) P2E Game. For now no gamplay yet, but the starter pack cost around 50 MATIC.

Still deciding whethere to use [Astro](https://astro.build/), Vue, React or combinations of all.

As we can observe from this journal, I am in a scattered brain mode.
## Sunday, 22 May 2022
[![Watch the video](https://img.youtube.com/vi/bMknfKXIFA8/default.jpg)](https://www.youtube.com/watch?v=bMknfKXIFA8)<BR>
[React Course - Beginner's Tutorial for React JavaScript Library [2022]](https://www.youtube.com/watch?v=bMknfKXIFA8)

Reminder: Check YouTube Watch Later and History later.
  
## Saturday, 21 May 2022
Had almost a whole day rest, I am very fresh.

Intalled [Eslint](https://eslint.org/) with npm after watching [a tutorial on eslint](https://www.jsmastery.pro/lecture-eslint-tips?ck_subscriber_id=1738210642&utm_source=convertkit&utm_medium=email&utm_campaign=Here%27s+the+video+I+promised%20-%208219947) by [JSM](https://www.jsmastery.pro/)

Installed it globally..
```
npm install -g eslint
```

Next will be installing it in ReactJS or other framework and editing the setting and all...

### How to check your ReactJS version?
```
npm view react version
```

## Friday, 20 May 2022
May there be no hiatus away from the Internet, my computer and updates in technology.
### Lesson on git with VSCode
Next time I shouldn't put password when I generate an SSH key which caused the VSCode Git Plugin unable to sync!
### NextJS for Github Pages
I wasn't a good idea, I should try Gatsby instead.

## Thursday, 19 May 2022
- Should always check out [Setting up github repo for gatsby](https://www.gatsbyjs.com/docs/tutorial/part-1/#set-up-a-github-repo-for-your-site)!
- For cool icon/badges for Github, check out [Markdown Badges](https://ileriayo.github.io/markdown-badges/)

## Wednesday, 18 May 2022
[![Watch the video](https://img.youtube.com/vi/YZR6P6Q0tmc/default.jpg)](https://www.youtube.com/watch?v=YZR6P6Q0tmc)

Below are how to 'embed' YouTube in Github MD...
```
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

### Should checkout [HiveJS Gitlab Repo](https://gitlab.syncad.com/hive/hive-js)
### Checkout [Gatsby hive plugin](https://github.com/codingdefined/hive-blog)

## Tuesday, 17 May 2022

I guess I should be researching on [building a hive blog front end website with nextjs](https://medium.com/@chrisgarrett/building-a-hive-blog-front-end-website-with-nextjs-764b5537284e) and understand the reason on [why someone build a custom hive front end](https://peakd.com/hive-119826/@makerhacks/custom-hive-frontends).

Below are my references:
1. [building a hive blog front end website with nextjs](https://medium.com/@chrisgarrett/building-a-hive-blog-front-end-website-with-nextjs-764b5537284e)
2. [Why I Am Building Custom Hive Front-Ends, And You Should Too](https://peakd.com/hive-119826/@makerhacks/custom-hive-frontends)
3. [Getting Hive Content — Building a Hive Blog Front-End Website with NextJS Part 2](https://medium.com/@chrisgarrett/getting-hive-content-building-a-hive-blog-front-end-website-with-nextjs-part-2-43c32437b1cf)
4. [Hive Blockchain and WordPress — Best of All Worlds](https://medium.com/@chrisgarrett/hive-blockchain-and-wordpress-best-of-all-worlds-b467188b410d)
