import { useEffect, useRef, useState } from "react";
import { Dropdown } from "./styled";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "../DropdownItem";
import { AiFillCaretLeft, AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineCog } from "react-icons/hi";

const DropdownMenu = () => {
  const [active, setActive] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  /**
   * TODO: 드롭다운 영역 밖 클릭 시 닫기 기능 구현 실패
   * active값을 여러 곳에서 쓰기 때문에 불린이 아닌 문자열로 사용하였기 때문에 윈도우 클릭 시 리턴하는 값이 active가 사라지는 값이 되어야 하는데 어떤 방식으로 바꿔야 할지 모르겠음
   * string to boolean으로 시도 해봤으나 실패, 다른 간단한 방식이 있는 것 같은데
   */
  let isBoolean = "true";
  let isFalseBoolean = isBoolean === "false";
  const sidebarRef = useRef<HTMLElement>(null);
  const onClickOutside = (event: Event) => {
    if (!sidebarRef.current?.contains(event.target as Node)) {
      return (active: any) => {
        active(isFalseBoolean);
      };
    }
  };
  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => {
      window.removeEventListener("click", onClickOutside);
    };
  }, []);

  // const calcHeight = (el: { offsetHeight: any }) => {
  //   const height = el.offsetHeight;
  //   console.log(height);
  //   setMenuHeight(height);
  // };

  // const el = useRef<HTMLElement>();
  // const closeDropdownHandler = (e: any) => {
  //   if (active && (!el.current || !el.current.contains(e.target)))
  //     return active;
  // };

  // const side = useRef<HTMLElement>();
  // const [isOpen, setOpen] = useState(false);
  // // 사이드바 외부 클릭시 닫히는 함수
  // const handleClose = async (e: any) => {
  //   let sideArea = side.current;
  //   let sideCildren = side.current?.contains(e.target);
  //   if (isOpen && (!sideArea || !sideCildren)) {
  //     setOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleClose);
  //   return () => {
  //     window.removeEventListener("click", handleClose);
  //   };
  // });

  return (
    <Dropdown
      style={{ height: `${menuHeight}` }}
      ref={sidebarRef as React.RefObject<HTMLDivElement>}
    >
      <CSSTransition
        in={active === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={""}
            setActive={setActive}
          >
            내 프로필
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"tech"}
            setActive={setActive}
          >
            TECH
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "tech"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"main"}
            setActive={setActive}
          />
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            스타일드 컴포넌트
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            타입스크립트
          </DropdownItem>
        </div>
      </CSSTransition>
    </Dropdown>
  );
};

export default DropdownMenu;
