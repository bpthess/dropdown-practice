import { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";
import { Wrap } from "./styled";

const DropdownView = (visibility: any) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);

  useEffect(() => {
    if (visibility) {
      setVisibilityAnimation(true);
    }
    setTimeout(() => {
      setVisibilityAnimation(false);
    }, 400);
  }, [visibility]);

  return (
    <>
      <Wrap>
        <button onClick={() => setDropdownVisibility(!dropdownVisibility)}>
          {dropdownVisibility ? "close" : "open"}
        </button>
        {/* TODO: 코드 리팩토링 필요해보임 */}
        {dropdownVisibility === true ? (
          <div className={`${visibility && "slide-fade-in-dropdown"}`}>
            <DropdownItem />
          </div>
        ) : (
          <div className={`${visibility && "slide-fade-out-dropdown"}`}>
            <DropdownItem />
          </div>
        )}
      </Wrap>
    </>
  );
};

export default DropdownView;
