import { MenuItem } from "./styled";

const DropdownItem = ({ goToMenu, setActive, leftIcon, children }: any) => {
  return (
    <>
      <MenuItem onClick={() => goToMenu && setActive(goToMenu)}>
        <span className="icon-button">{leftIcon}</span>
        {children}
      </MenuItem>
    </>
  );
};

export default DropdownItem;
