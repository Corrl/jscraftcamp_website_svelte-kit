# JSCraftCamp Website - SvelteKit Clone

**Original** built with **Gatsby & Netlify**

- repo https://github.com/jscraftcamp/website
- website https://jscraftcamp.org/

**This version** using **SvelteKit & GitHub Pages**

- website https://corrl.github.io/jscraftcamp_website_svelte-kit/

## Develop

1. clone project
2. `npm install`
3. `npm run dev`
4. start developing

## Build

`npm run build`

The project has a base path set for hosting on GitHub Pages in `svelte.config.js`  
The preview of the build via `npm run preview` won't work because of the base path

## Storybook

`npm run storybook`

There still seem to exist various problems using Storybook with SvelteKit.  
To make the initial installation work:

1. `{ "type": "commonjs" }` in `.storybook/package.json`
2. `"preprocess": import(...)` in `.storybook/main.js`

Problems:

- Only "Svelte JS" syntax seems possible, not "Svelte NATIVE-FORMAT"
- for Components with aliased imports (`Header.svelte`,`Footer.svelte`,...) further adjustments needed https://github.com/storybookjs/storybook/issues/14952

## Conclusion

This was a great exercise for learning a bit more about SvelteKit, get an impression of Storybook, use GitHub 
Actions for the first time and also train basic HTML & CSS stuff.   