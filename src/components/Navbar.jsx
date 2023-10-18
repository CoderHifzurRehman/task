import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import avatar from '../data/avatar.jpg';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);


  return (
    <div className="flex justify-start items-center p-2   relative"  style={{ backgroundColor: "rgb(227 227 228)" }}>

      <NavButton title="Menu" customFunc={handleActiveMenu} color="rgb(4 4 64)" icon={<AiOutlineMenu />} />
      <div className="flex">
        <p>
              <span className="text-black-400 font-bold text-17">Hello </span>
              <span className="text-black-400 font-bold ml-1 text-17">
                Hifzur Rehman,
              </span>
            </p>
        

      </div>
    </div>
  );
};

export default Navbar;
