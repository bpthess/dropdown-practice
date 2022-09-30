import styled from "styled-components";

export const MenuItem = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background 200;
  padding: 0.5rem;

  & :hover {
    background-color: #525357;
  }
`;
