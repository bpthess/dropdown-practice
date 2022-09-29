// react-dropdown 라이브러리
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["one", "two", "three"];

const defaultOpation = options[0];

const Dropdown4 = () => {
  return (
    <Dropdown
      options={options}
      value={defaultOpation}
      placeholder="Select an option"
    />
  );
};

export default Dropdown4;
