![wd-react-portfolio Logo Image](https://raw.githubusercontent.com/Wesley26/wd-react-portfolio/master/src/images/logoImage/WD_Logo.png)

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with TypeScript support.
Implements the following dependencies: [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://www.npmjs.com/package/postcss), [CRACO](https://github.com/gsoft-inc/craco), [react-spring](https://www.react-spring.io/), [react-spring/types](https://www.npmjs.com/package/@react-spring/types), [react-router-dom](https://www.npmjs.com/package/react-router-dom), [EmailJS](https://www.emailjs.com/docs/), [Google reCaptcha v2](https://www.npmjs.com/package/react-google-recaptcha), [Material-ui (core)](https://material-ui.com/), [Material-ui (icons)](https://www.npmjs.com/package/@material-ui/icons), and [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react).


# Information

- As of November 2nd, 2020, wd-react-portfolio reached Minimum Viable Product (MVP) stage and is deployed [here](https://wesleywebdev.com/).


## Important Instructions

- When installing for the first time, run `npm install`. 
- For Tailwind CSS dependency using CRACO runtime manager - `npm start` will run on start the `npm update` command. The Poststart following will run `craco start`.
- `npm update` runs automatically every time you use `npm start`.
- `npm run build` will write to the build folder. Both `npm update` and `craco build` Only use when deploying on server.
- On Windows, use an .env file at the root, then add `Browser="none"`. This is for allowing you, the developer, the choice of which web browser you wish to use.
- Check React documentation if needed for more information [Here](https://github.com/facebook/create-react-app).


## Purpose of Repo

This repo is my ReactJS build of my portfolio website. On my portfolio website, the end user is able to read about me, browse my portfolio, download my resume, and send an email to my business inbox through a contact form. This readme will be updated as I update this front-end ReactJS design. This website started as a vanilla JavaScript ReactJS web app and was translated to TypeScript January 3rd, 2022. This readme was last updated on January 10th, 2022.


## Content of repo


### node_modules folder:
- Contains all node package dependencies, is ignored in this repo.


### public folder:
1. index.html: Index page of the entire web app.
2. manifest.json: JSON that holds all basic website information.
3. robots.txt: Reference the sitemap, ask robots to not index src/clientSecrets.
4. sitemap.xml: Sitemap for robots to index important web pages.
5. WDfavicon.ico: Fav icon logo for wd-react-portfolio.


### src folder:

1. clientSecret folder:
- Contains a JSON with each API key required for all API's implemented on this portfolio website design. It is not tracked for security purposes and must be manually provided on deployment. See `PageContents.ts` under Universal API Imports for the list of string values required in the JSON file manually provided.

2. images folder:
- Contains all images implemented on this website design. The logoImage folder contains website logo design images. The portfolio_BG_Images folder contains a background photo for each portfolio item. The portfolio_Icon_Images folder contains images used for each animated icon on each portfolio item. The animated icons introduce the subject of the portfolio item. The resumeImage folder contains the .png version of my pdf downloadable resume. All other images used on this website design that do not belong in a specific category are stored in the root of the images folder.

3. components folder:

- **navMaster:**
- `NavContent.ts`: Contains all TypeScript functionality for the navigational web components. All navigational web components import their variables from this custom hook ts file.

- **components root:**
- `Footer.tsx`: The footer web component for wd-react-portfolio.
- `Header.tsx`: The header web component for wd-react-portfolio.
- `Navigation.tsx`: Base navigation web component.
- `NavigationMenu.tsx`: Web component that takes each individual link and displays to the main Navigation web component.
- `NavigationMenuD.tsx`: Desktop component version of NavigationMenu.

4. hooks folder:

- `PortfolioDisplayContext.ts`: Context hook to help control portfolio page navigation.
- `useCurrentTime.ts`:  Custom React Hook which displays the current time. Returns the date ticking every second.

5. webPages folder:
Note: each ts/tsx file is their own displayed web page within the app.

- **contentMaster:**
- `PageContent.ts`: Contains all TypeScript functionality for individual web page components. All individual page web components import their variables from this custom hook ts file.

- **portfolioComponents:**
Contains portfolio components
- `PortfolioCard.tsx`: Portfolio card page web component.
- `PortfolioNav.tsx`: Portfolio left caret and right caret arrow component.
- `PortfolioPageContents.ts`: Custom hook containing all content for each portfolio item listed below.

- **portfolioChildren:**
Contains every individual portfolio item listed on the portfolio web page. Each individual portfolio item is listed below.
- `RealWorldOne.tsx`: Sketch/Eastman Chemical Company portfolio web component.
- `MobileOne.tsx`: React Native iOS/Android Expo Framework Weather App portfolio web component.
- `MobileTwo.tsx`: CHOYCES Mobile App Internship React Native portfolio web component.
- `ProjectOne.tsx`: 'The Karters' discord community bot portfolio web component.
- `WebsiteOne.tsx`: Smile Design Office Website Overhaul portfolio web component.
- `WebsiteTwo.tsx`: BitBroker Website Coding challenge portfolio web component.
- `WebsiteThree.tsx`: Vize Feedback Page Coding challenge portfolio web component.

- **todoComponents:**
Contains components for the To-do application.
- `todoForm.tsx`: Component takes user input and saves to-do item.
- `todoListing.tsx`: Component displays user input options.

- **webPages root** 
- `About.tsx`: About me web page component. The about me page contains information about me, one photo of me, and two separate links. One link leads to my GitHub page, the other link leads to my LinkedIn page.
- `ContactMe.tsx`: Email form, which implements EmailJS, is where the end user may fill out an email to submit if they wish to contact me directly. The form is protected from bots via Google reCaptcha v2. The end user must follow all instructions displayed at the top of the page in order to send an email to me from this web page component.
- `Home.tsx`: Home web page component. The end user is introduced with my website logo, a city scene, and introduction text.
- `Portfolio.tsx`: This is the portfolio web page component. Each portfolio item is listed on this web page component.
- `Resume.tsx`: This is the web page component which contains the image version of my downloadable pdf resume. The download link for my resume is located at the bottom of this web page component.
- `TodoList.tsx`: This is a To-do list application component. The component requires the components located in the todoComponents folder.

6. Other files in src:
- `App.tsx`: The root JS file in entire app, all web components reference to this JS file; however, it is not the main JS file.
- `App.test.tsx`: Tests the App, JEST based test.
- `index.css`: Main CSS file, tailwind CSS is referenced here.
- `index.tsx`: Main tsx file.
- `react-app-env.d.ts`: Part of TypeScript support, do not edit.
- `reportWebVitals.tsx`: Part of create-react-app, do not edit.
- `setupTests.tsx`: Part of create-react-app, do not edit.


### Other files:
- `package.json`
- `package-lock.json`
- `craco.config.js` - CRACO config file, runs tailwind.css which is used to purge unused CSS classes, manage tailwindCSS runtime.
- `tailwind.config.js` - tailwind plugin configuration JS file. Insert custom tailwind CSS class settings and purge CSS configurations in this JS file.
- `tsconfig.json` - TypeScript config file