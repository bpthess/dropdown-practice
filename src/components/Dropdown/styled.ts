import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
`

export const Inner = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`

export const Content = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;

  & p {
    cursor: pointer;
  }
`

export const Item = styled.ul`
  list-style: none;
  padding: 0;
  
  width: 200px;
  margin: 0 auto; 
  margin-top: 10px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
  
& li {
  background-color: #fff;
  
  padding: 10px 0;
  cursor: pointer;
}
`



