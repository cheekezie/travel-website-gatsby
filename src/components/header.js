import { Link } from "gatsby"
import * as React from "react"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Colors } from './Variables'
import { menuData } from '../data/Menu'
import { Button } from './Button'

const Header = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLink to="/"> EXPLORIX</NavLink>
        <NavMenu>
          {menuData.map((item, index)=>(
            <NavLink to={item.link} key={index}>
              {item?.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn >
          <Button primary="true" round="true" to="/trips">Book a trip</Button>
        </NavBtn>
        <Hamburger />
      </NavContainer>
    </Nav>
  )
}
 
export default Header

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  padding: 0  calc((100vw - 1300px) / 2);
  position: relative;
  z-index: 100;
`
export const NavContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
     padding-top: 1.7rem;
   }
`
export const NavMenu = styled.ul`
   color: ${Colors.white};
   display: flex;
   align-items: center;
   @media screen and (max-width: 768px) {
     display: none;
   }
`

export const NavBtn = styled.ul`
   display: flex;
   align-items: center;
   margin-right: 24px;
   @media screen and (max-width: 768px) {
     display: none;
   }
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: ${Colors.white};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`