import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <div className="main-header">
        <NavLink to="/" className="logoLink">
          <i className="ts logo">Ts</i>
        </NavLink>
        <Navbar />
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  .main-header {
    width: 100vw;
    height: 6rem;
    background-color: ${({ theme }) => theme.colors.light};
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    opacity: .99;
    /* position: sticky; */
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    /* box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); */

    & .logoLink {
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    
      & .logo {
        width: auto;
        height: 4rem;
        border-radius: 3px;
      }
    }
  }

`;

export default Header;