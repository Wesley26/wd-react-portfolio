import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './index.css';
import './tailwind.css';
import Footer from './components/Footer';
import Header from './components/Header';

import Portfolio from './webPages/Portfolio.js';
import About from './webPages/About.js';
import Home from './webPages/Home.js';
import Resume from './webPages/Resume.js';
import ContactMe from './webPages/ContactMe.js';

function App() {
  return (
    <div className="bg-body-gray absolute bottom-0 top-0 left-0 right-0">
      <Router>

      <main className="bg-body-gray html border-solid border-gray-400 border-t-4 border-l-4 border-r-4 pb-16">
        <div className="text-center">
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />   
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />   
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/contactMe">
              <ContactMe />
            </Route>
          </Switch>

        </div>

      </main>

      <Footer />
      </Router>

    </div>
  );
}

export default App;
