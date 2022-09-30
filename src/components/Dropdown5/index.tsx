import Navbar from "./Navbar";
import NavItem from "./NavItem";
import { AiOutlineCaretDown } from "react-icons/ai";
import DropdownMenu from "./Dropdown/DropdownMenu";

const Dropdown5 = () => {
  return (
    <Navbar>
      <NavItem icon={<AiOutlineCaretDown />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
};

export default Dropdown5;
