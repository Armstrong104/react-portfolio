import { Navbar } from './Navbar';
import Proptypes from 'prop-types';
export const Header = ({navLinksRef,onToggleMenu,menuOpen}) => {
  return (
    <header className="bg-[#C58940] text-white py-6">
      <Navbar navLinksRef={navLinksRef} onToggleMenu={onToggleMenu} menuOpen={menuOpen} />
    </header>
  );
};

Header.propTypes = {
  navLinksRef: Proptypes.object.isRequired,
  onToggleMenu: Proptypes.func.isRequired,
  menuOpen: Proptypes.bool.isRequired,
};
