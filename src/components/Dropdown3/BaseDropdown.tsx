import { useState } from "react";

const BaseDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const items = ["banana", "apple", "orange", "pear", "grape", "berry"];

  return (
    <div className="dropdown-wrapper">
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
        className="trigger-button"
      >
        버튼
      </button>
      {showDropdown && (
        <div className="dropdown">
          <ul className={showDropdown ? "active" : ""}>
            {items.map((item: any) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BaseDropdown;
