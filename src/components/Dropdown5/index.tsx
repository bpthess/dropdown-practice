import Navbar from "./Navbar";
import NavItem from "./NavItem";
import { BiBellMinus } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineCaretDown } from "react-icons/ai";
import { TbBrandMessenger } from "react-icons/tb";
import DropdownMenu from "./Dropdown/DropdownMenu";

const Dropdown5 = () => {
  return (
    <Navbar>
      <NavItem icon={<AiOutlinePlusCircle />} />
      <NavItem icon={<BiBellMinus />} />
      <NavItem icon={<TbBrandMessenger />} />
      <NavItem icon={<AiOutlineCaretDown />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
};

export default Dropdown5;
