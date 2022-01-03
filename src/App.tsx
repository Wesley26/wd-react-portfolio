import { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';

import { About,
          ContactMe,
          Home,
          Portfolio,
          Resume,
          TodoList,
       } from './webPages/index';

const App:FC = () => {
  return (
    <div className="bg-body-gray absolute bottom-0 top-0 left-0 right-0">
      <Router>

      <main className="bg-body-gray html border-solid border-gray-300 border-t-4 border-l-4 border-r-4 pb-24">
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
            <Route exact path="/todoList">
              <TodoList />
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
