import { FC, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { ImportantNavContext } from './hooks/ImportantNavContext';
import usePathname from './hooks/usePathname';

import { About,
          ContactMe,
          Home,
          Portfolio,
          Resume,
          TodoList,
       } from './webPages/index';

const App:FC = () => {

  const [ importantNavStyle, setImportantNavStyle ] = useState<string>(`None`);
  const currentURL = usePathname();

  useEffect(() => {

    setImportantNavStyle(currentURL);

  }, [currentURL]);

  return (
    <div className="bg-body_gray absolute bottom-0 top-0 left-0 right-0">
      <BrowserRouter>

      <ImportantNavContext.Provider value={{ importantNavStyle, setImportantNavStyle }}>
        <main className="bg-body_gray html border-solid border-gray-300 border-t-4 border-l-4 border-r-4 pb-24">
          <div className="text-center">
            <Header />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contactMe" element={<ContactMe />} />
              <Route path="/todoList" element={<TodoList />} />
            </Routes>

          </div>

        </main>
      </ImportantNavContext.Provider>

      <Footer />
      </BrowserRouter>

    </div>
  );
};

export default App;
