import styled from "styled-components";

export const Wrap = styled.div`
  & .dropdown-wrapper {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    & .dropdown {
      position: absolute;
      top: 50px;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      & ul {
        background: #fff;
        color: #000000;
        list-style: none;
        margin: 0;
        font-size: 18px;
        overflow: hidden;
        height: 0px;
        transition: height 0.3s ease;
        padding: 0;
      }

      & ul.active {
        width: 200px;
        height: 100px;
        background-color: #ccc;
        overflow: auto;
      }
    }
  }
`;
