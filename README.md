![wd-react-portfolio Logo Image](https://raw.githubusercontent.com/Wesley26/wd-react-portfolio/master/src/images/logoImage/WD_Logo.png)

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Implements the following dependencies: [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://www.npmjs.com/package/postcss), [CRACO](https://github.com/gsoft-inc/craco), [react-spring](https://www.react-spring.io/), [react-router-dom](https://www.npmjs.com/package/react-router-dom), [EmailJS](https://www.emailjs.com/docs/), [Google reCaptcha v2](https://www.npmjs.com/package/react-google-recaptcha), [Material-ui (core)](https://material-ui.com/), [Material-ui (icons)](https://www.npmjs.com/package/@material-ui/icons), and [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react).


# Information

- As of November 2nd, 2020, wd-react-portfolio reached Minimum Viable Product (MVP) stage and is deployed [here](https://wesleywebdev.com/).


## Important Instructions

- When installing for the first time, run `npm install`. 
- For Tailwind CSS dependency using CRACO runtime manager - `npm start` will run on start the `npm update` command. The Poststart following will run `craco start`.
- `npm update` runs automatically every time you use `npm start`.
- `npm run build` will write to the build folder. Both `npm update` and `craco build` Only use when deploying on server.
- Check React documentation if needed for more information [Here](https://github.com/facebook/create-react-app).


## Purpose of Repo

This repo is my ReactJS build of my portfolio website. On my portfolio website, the end user is able to read about me, browse my portfolio, download my resume, and send an email to my business inbox through a contact form. This readme will be updated as I update this front-end ReactJS design. This readme was last updated on November 2nd, 2020.


## Content of repo


# NOTE: Content of repo section will be updated on a future Portfolio update.

### node_modules folder:
- Contains all node package dependencies, is ignored in this repo.


### public folder:
1. index.html: Index page of the entire web app.
2. manifest.json: JSON that holds all basic website information.
3. robots.txt: Do not edit on this repo.
4. WDfavicon.ico: Fav icon logo for wd-react-portfolio.


### src folder:

1. clientSecret folder:
- Contains a JSON with each API key required for all API's implemented on this portfolio website design. It is not tracked for security purposes and must be manually provided on deployment.

2. images folder:
- Contains all images implemented on this website design. The logoImage folder contains website logo design images. The portfolio_BG_Images folder contains a background photo for each portfolio item. The portfolio_Icon_Images folder contains images used for each animated icon on each portfolio item. The animated icons introduce the subject of the portfolio item. The resumeImage folder contains the .png version of my pdf downloadable resume. All other images used on this website design that do not belong in a specific category are stored in the root of the images folder.

3. components folder:

- **navMaster:**
- NavContent.js: Contains all JavaScript functionality for the navigational web components. All navigational web components import their variables from this js file.

- **components root:**
- Footer.js: The footer web component for wd-react-portfolio.
- Header.js: The header web component for wd-react-portfolio.
- Navigation.js: Base navigation web component.
- NavigationMenu.js: Web component that takes each individual link and displays to the main Navigation web component.

4. webPages folder:
Note: each js file is their own displayed web page within the app.

- **contentMaster:**
- PageContent.js: Contains all JavaScript functionality for individual web page components. All individual page web components import their variables from this js file.

- **portfolioComponents:**
Contains every individual portfolio item listed on the portfolio web page. Each individual portfolio item is listed below.
- projectOne.js: C++ Shopping Cart Application portfolio web component.
- projectThree.js: i01 halo fan game discord bot portfolio web component.
- projectTwo.js: JavaScript miscellaneous portfolio web component.
- websiteOne.js: Smile Design Office Website Overhaul portfolio web component.

- **todoComponents:**
Contains components for the To-do application.
- todoForm.js: Component takes user input and saves to-do item.
- todoListing.js: Component displays user input options.

- **webPages root** 
- About.js: About me web page component. The about me page contains information about me, one photo of me, and two separate links. One link leads to my GitHub page, the other link leads to my LinkedIn page.
- ContactMe.js: Email form, which implements EmailJS, is where the end user may fill out an email to submit if they wish to contact me directly. The form is protected from bots via Google reCaptcha v2. The end user must follow all instructions displayed at the top of the page in order to send an email to me from this web page component.
- Home.js: Home web page component. The end user is introduced with my website logo, a city scene, and introduction text.
- Portfolio.js: This is the portfolio web page component. Each portfolio item is listed on this web page component.
- Resume.js: This is the web page component which contains the image version of my downloadable pdf resume. The download link for my resume is located at the bottom of this web page component.
- TodoList.js: This is a To-do list application component. The component requires the components located in the todoComponents folder.

5. Other files in src:
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
- postcss.config.js - Requires auto-prefixer, and tailwind.css which is used to purge unused CSS classes.
- tailwind.config.js - tailwind plugin configuration JS file. Insert custom tailwind CSS class settings and purge CSS configurations in this JS file.