import { NavbarWrapper } from "./styled";

const Navbar = ({ children }: any) => {
  return (
    <NavbarWrapper>
      <ul className="navbar-nav">{children}</ul>
    </NavbarWrapper>
  );
};

export default Navbar;
