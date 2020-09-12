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
import About from './webPages/About.js';
import Home from './webPages/Home.js'

function App() {
  return (
    <div className="bg-body-gray absolute bottom-0 top-0">
      <Router>

      <main className="html">
        <div className="text-center">
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />   
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
