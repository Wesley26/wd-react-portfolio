Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Implements [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://www.npmjs.com/package/postcss), [react-spring](https://www.react-spring.io/), [react-router-dom](https://www.npmjs.com/package/react-router-dom), and [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react).

# Information

## Important Instructions

- When installing for the first time, run `npm install`. 
- For Tailwind CSS dependency, make sure to run `npm run build:css` if you do not see tailwind.css. Tailwind.css file is ignored. This command will automatically run everytime you use `npm start`.
- `npm update` runs automatically everytime you use `npm start`.
- `npm build` runs what npm start command will run, but will write to the build folder. For now, do not run this command as this repo is designed to be cloned in the future.
- Check React documentation if needed for more information [Here](https://github.com/facebook/create-react-app).

## Purpose of Repo

This repo is my boilerplate template for future front-end website designs. It is a work in progress and will be updated as I build. This readme will be updated as I add more to this boilerplate template design.

## Content of repo

### node_modules folder:
- Contains all node package dependencies, is ignored in this repo.
### public folder:
1. index.html: Index page of the entire app. Do not edit anything on this html page except the title tags.
2. manifest.json: Json that holds visual information. Do not edit on this repo.
3. robots.txt: Do not edit on this repo.
### src folder:
1. components folder:
- Footer.js: The footer web component of boilerplate web design.
- Header.js: The header web component of boilerplate web design.
- HeaderText.js: Text that appears under the Header web component.
- Navigation.js: Base navigation web component.
- NavigationMenu.js: Web component that takes each individual link and displays to the main Mavigation web component.
2. webPages folder:
Note: each js file is their own displayed web page within the app.
- About.js: Sample about web page.
- Home.js: Sample home web page.
3. Other files in src:
- App.js: The root JS file in entire app, all web components reference to this JS file; however, it is not the main JS file.
- App.test.js: Tests the App.
- index.css: Main CSS file, tailwind CSS is referenced here.
- index.js: Main JS file.
- serviceWorker.js: Part of create-react-app, do not edit.
- setupTests.js: Part of create-react-app, do not edit.
- tailwind.css: Generated using tailwind.css, ignored in this repo, is generated automatically upon start or build. Do not edit.

### Other files:
- package.json
- package-lock.json
- postcss.config.js - requires auto-prefixer, and tailwind.css
- tailwind.config.js - tailwind plugin configuration JS file. Insert custom tailwind settings in this JS file.