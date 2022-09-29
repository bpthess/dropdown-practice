import styled from "styled-components";

export const NavbarWrapper = styled.div`
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-radius: var(--border);

  & .navbar-nav {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
