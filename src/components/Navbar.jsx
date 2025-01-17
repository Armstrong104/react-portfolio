import Proptypes from 'prop-types';
import { navMenu } from '../data';
import { Social } from './Social';
export const Navbar = ({ navLinksRef, onToggleMenu, menuOpen }) => {
  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto">
      <div className="flex flex-col justify-evenly items-center gap-2">
        <h1 className="text-4xl font-bold">Ameer Talha</h1>
        <p>Software Engineer, Fullstack Developer</p>
        <div className="flex justify-between items-center gap-4">
          <Social />
        </div>
      </div>
      <div
        ref={navLinksRef}
        className={`bg-[#C58940] md:bg-none text-center duration-500 md:static text-lg absolute md:min-h-fit min-h-[30vh] left-0 ${
          menuOpen ? 'top-[20%]' : 'top-[-100%]'
        } md:w-auto w-full flex items-center px-5`}
      >
        <ul className="flex flex-col ps-4 md:flex-row md:items-center md:gap-[2vw] gap-6 text-center font-bold">
          {navMenu.map((navItem) => (
            <li key={navItem.name} className="group relative">
              <a
                className="text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out relative z-10 group-hover:text-[#FAEAB1]"
                href={navItem.url}
              >
                {navItem.name}
              </a>
              {/* Underline animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#FAEAB1] rounded-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
              {/* Glow effect */}
              <div className="absolute inset-0 group-hover:bg-gradient-to-r from-[#FAEAB1] to-[#C58940] blur-md opacity-25 transition-all duration-500 ease-in-out"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <ion-icon
          onClick={onToggleMenu}
          name={menuOpen ? 'close' : 'menu'}
          size="large"
        ></ion-icon>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navLinksRef: Proptypes.object.isRequired,
  onToggleMenu: Proptypes.func.isRequired,
  menuOpen: Proptypes.bool.isRequired,
};
