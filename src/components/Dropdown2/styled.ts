import styled from "styled-components";

export const Wrap = styled.div`
  width: 250px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* fade in */

  @keyframes slide-fade-in-dropdown-animation {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .slide-fade-in-dropdown {
    overflow: hidden;
    background-color: #222;
    border-radius: 12px;
    transition: 0.25s;
    margin-top: 5px;
  }

  .slide-fade-in-dropdown > ul {
    animation: slide-fade-in-dropdown-animation 0.4s ease;
    width: 250px;
    height: 200px;
    & li {
      padding: 10px 0;
      color: #fff;
    }
  }

  /* fade out */

  @keyframes slide-fade-out-dropdown-animation {
    0% {
      transform: translateY(0);
      opacity: 1;
    }

    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  .slide-fade-out-dropdown {
    overflow: hidden;
    border-radius: 12px;
    transition: 0.25s;
    margin-top: 5px;
  }

  .slide-fade-out-dropdown > ul {
    animation: slide-fade-out-dropdown-animation 0.4s ease;
    animation-fill-mode: forwards;
    width: 250px;
    height: 200px;
    & li {
      padding: 10px 0;
      color: #fff;
    }
  }
`;
