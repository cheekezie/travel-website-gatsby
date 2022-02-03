import { Link } from "gatsby"
import * as React from "react"
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">
        EXPLORIX
      </NavLink>
    </Nav>
  )
}
 
export default Header

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem  calc((100vw -1300px) / 2);
  position: relative;
  z-index: 100;
`
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  align-items: center;
`