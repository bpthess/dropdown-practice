import { useState } from "react";

const DropdownView = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  return (
    <>
      <button onClick={() => setDropdownVisibility(!dropdownVisibility)}>
        {dropdownVisibility ? "close" : "open"}
      </button>
      {dropdownVisibility === true ? (
        <div>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DropdownView;
