import styled from "styled-components";

export const NavItemWrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all;

  /* Icon Button */
  & .icon-button {
    --button--size: calc(var(--nav-size) * 0.5);
    width: var(--button--size);
    height: var(--button--size);
    background-color: #484a4d;
    border-radius: 50%;
    padding: 5px;
    margin: 2px 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;

    :hover {
      filter: brightness(1.2);
    }

    & svg {
      fill: var(--text-color);
      width: 20px;
      height: 20px;
    }
  }
`;
