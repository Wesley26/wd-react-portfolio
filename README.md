![wd-react-portfolio Logo Image](https://raw.githubusercontent.com/Wesley26/wd-react-portfolio/master/src/images/logoImage/WD_Logo.png)

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with TypeScript support.
Implements the following dependencies: [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://www.npmjs.com/package/postcss), [Framer Motion](https://www.framer.com/docs/), [react-router-dom](https://www.npmjs.com/package/react-router-dom), [EmailJS](https://www.emailjs.com/docs/), [Google reCaptcha v2](https://www.npmjs.com/package/react-google-recaptcha), [Material-ui (MUI)](https://mui.com/), [React Device Detect](https://www.npmjs.com/package/react-device-detect), and [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react).

Unit testing with [Jest (installed jest and @types/jest)](https://jestjs.io/docs/getting-started) [jest-transform-stub (required to include testing components with images)](https://www.npmjs.com/package/jest-transform-stub), and [ts-jest](https://github.com/kulshekhar/ts-jest).

No longer implemented, but kept for documentation archives: [CRACO](https://github.com/gsoft-inc/craco), and [react-spring](https://www.react-spring.io/).


# Information

- As of November 2nd, 2020, wd-react-portfolio reached Minimum Viable Product (MVP) stage and is deployed [here](https://wesleywebdev.com/).


## Important Instructions

- When installing for the first time, run `npm install`. 
- `npm start` will run on start the `npm update` command. The Poststart following will run `react-scripts start`.
- `npm update` runs automatically every time you use `npm start`.
- `npm run build` will write to the build folder. Both `npm update` and `react-scripts build` Only use when deploying on server. NOTE: If server does not have enough ram (more than 1 GB ram may be required to build), it is recommended to build locally and feed the server the build files from your local development machine.
- On Windows, use an .env file at the root, then add `Browser="none"`. This is for allowing you, the developer, the choice of which web browser you wish to use.
- Include a .env.production and add `GENERATE_SOURCEMAP=false`. There is no specific reason. The source code for this website is already viewable here from my portfolio page.
- Run Jest tests with `npm test`, which will run the command "jest --updateSnapshot" (update the snapshot each time a Jest test is run for now). Note: Inside "Jest" under package.json, ensure moduleNameMapper includes every image extension used in the app.
- See [this Stack Overflow article](https://stackoverflow.com/questions/20562543/zoom-to-fit-pdf-embedded-in-html) on handling PDF files in an iFrame tag
in ReactJS.
- Check React documentation if needed for more information [Here](https://github.com/facebook/create-react-app).


## Purpose of Repo

This repo is my ReactJS build of my portfolio website. On my portfolio website, the end user is able to read about me, browse my portfolio, download my resume, and send an email to my business inbox through a contact form. This readme will be updated as I update this front-end ReactJS design. This website started as a vanilla JavaScript ReactJS web app and was translated to TypeScript January 3rd, 2022. This readme was last updated on October 20th, 2022.


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
- Contains all images implemented on this website design. The logoImage folder contains website logo design images. The portfolio_BG_Images folder contains a background photo for each portfolio item. The portfolio_Icon_Images folder contains images used for each animated icon on each portfolio item. The animated icons introduce the subject of the portfolio item. The resumeImage folder contains the .png version of my pdf downloadable resume and supporting documents. All other images used on this website design that do not belong in a specific category are stored in the root of the images folder.

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

- `GetWindowDimensions.ts`: Custom hook for dynamic screen width and height measurements for components that require this info.
- `ImportantNavContext.ts`: Context hook for navigation important styles across the app with global scope.
- `PortfolioDisplayContext.ts`: Context hook to help control portfolio page navigation.
- `useCurrentTime.ts`:  Custom React Hook which displays the current time. Returns the date ticking every second.
- `usePathname.ts`: Custom React Hook sets the string name of important navigation pathname in App.tsx.

5. webPages folder:
Note: each ts/tsx file is their own displayed web page within the app.

- **calculatorComponents:**
Contains components for the calculator application.
- `CalculatorBase.tsx`: Component that can perform numerical calculations.

- **contentMaster:**
- `MainPageAnimations.ts`: MainPageAnimations component for Framer Motion custom hook.
- `PageContent.ts`: Contains all TypeScript functionality for individual web page components. All individual page web components import their variables from this custom hook ts file.

- **portfolioComponents:**
Contains portfolio components
- `PortfolioAnimations.ts`: Portfolio custom hook component for Framer Motion animation values.
- `PortfolioCard.tsx`: Portfolio card page web component.
- `PortfolioHeader.tsx`: Portfolio header component.
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

- **webPages root:** 
- `About.tsx`: About me web page component. The about me page contains information about me, one photo of me, and two separate links. One link leads to my GitHub page, the other link leads to my LinkedIn page.
- `Calculator.tsx`: This is a standard calculator application component. The component requires the components located in the calculatorComponents folder.
- `ContactMe.tsx`: Email form, which implements EmailJS, is where the end user may fill out an email to submit if they wish to contact me directly. The form is protected from bots via Google reCaptcha v2. The end user must follow all instructions displayed at the top of the page in order to send an email to me from this web page component.
- `Home.tsx`: Home web page component. The end user is introduced with my website logo, a city scene, and introduction text.
- `Portfolio.tsx`: This is the portfolio web page component. Each portfolio item is listed on this web page component.
- `Resume.tsx`: This is the web page component which contains the image version of my downloadable pdf resume. The download link for my resume is located at the bottom of this web page component.
- `TodoList.tsx`: This is a To-do list application component. The component requires the components located in the todoComponents folder.

6. Other files in src:
- `App.tsx`: The root JS file in entire app, all web components reference to this JS file; however, it is not the main JS file.
- `global.d.ts`: Declare any file extensions TypeScript complains about here.
- `index.css`: Main CSS file, tailwind CSS is referenced here.
- `index.tsx`: Main tsx file.
- `react-app-env.d.ts`: Part of TypeScript support, do not edit.
- `reportWebVitals.tsx`: Part of create-react-app, do not edit.
- `setupTests.tsx`: Part of create-react-app, do not edit.

- **tests/src:**
Contains a mirror test directory for specific components to test with Jest. Each test creates a snapshot test render for: `App.tsx`, `About.tsx`, `ContactMe.tsx`, `Home.tsx`, `Portfolio.tsx`, `TodoList.tsx`, and `Calculator.tsx`. For example, `App.test.tsx` renders a snapshot test for `App.tsx` and so on. This directory also contains the end result snap files for each test. 


### Other files:
- `.eslintignore` - help with `npm run build` command optimization, ignore node_modules folder.
- `package.json` - Jest test config is also located here along with dependencies for the entire project.
- `package-lock.json`
- `postcss.config.js` - postcss config file, runs tailwind.css which is used to purge unused CSS classes, manage tailwindCSS runtime using tailwind's JIT runtime.
- `tailwind.config.js` - tailwind plugin configuration JS file. Insert custom tailwind CSS class settings and purge CSS configurations in this JS file.
- `tsconfig.json` - TypeScript config file