import { useState } from 'react'
import { Content, DropdownWrapper, Inner, Item } from './styled'
import '../../index.css'

const Dropdown = () => {
  const [DropdownState, setDropdownState] = useState(false)
  console.log(DropdownState)

  const data: number[] = [1, 2, 3];

  const DropDownHandler = () => {
    setDropdownState((prev) => {
      return !prev
    })
  }

  return (
    <DropdownWrapper>
    <Inner>
      <Content>
        <p onClick={() => DropDownHandler()}>드롭다운</p>
        <Item className={`${DropdownState === true ? 'slide-fade-in-dropdown': 'slide-fade-out-dropdown'}`}>
         {DropdownState === true ? (data.map((num) => {
            return(
              <li key={num}>{num}</li>
            )
          })): ""}
        </Item>
      </Content>
    </Inner>
    </DropdownWrapper>
  )
}

export default Dropdown