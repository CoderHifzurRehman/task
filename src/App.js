import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar } from './components';
import { Ecommerce } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu} = useStateContext();
  return (
    <div>
      <BrowserRouter>
      
        <div className="flex relative dark:bg-main-dark-bg" >
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg  " style={{ backgroundColor: "rgb(4 4 64)" }}>
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>

              <Routes>
                {/* dashboard  */}
                
                <Route  path="/" element={(<Ecommerce />)} />
                <Route path="ecommerce" element={(<Ecommerce />)} />



              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      
      </BrowserRouter>
    </div>
  );
          };
// };

export default App;