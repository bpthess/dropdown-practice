import { useState } from "react";
import { NavItemWrapper } from "./styled";

const NavItem = ({ icon, children }: any) => {
  const [navItemOpen, setNavItemOpen] = useState(false);

  return (
    <NavItemWrapper>
      <button
        className="icon-button"
        onClick={() => setNavItemOpen(!navItemOpen)}
      >
        {icon}
      </button>
      {navItemOpen && children}
    </NavItemWrapper>
  );
};

export default NavItem;
