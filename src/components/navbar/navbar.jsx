import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.toggle ? "5rem" : "6.25rem")};
  z-index: 200;
  padding: 0 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
  background-color: ${(props) => (props.toggle ? "#000" : "transparent")};

  .logo {
    position: relative;
    width: 150px;
    height: 5rem;
    display: flex;
    color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1 {
      text-align: center;
      width: 100%;
      font-size: ${(props) => (props.toggle ? "1.2rem" : "1.5rem")};
      font-weight: bold;
      font-family: var(--font-family);
      transition: all 0.3s ease-in;
    }

    p {
      display: ${(props) => (props.toggle ? "none" : "block")};
      width: 100%;
      text-align: center;
      font-size: 10px;
      font-family: var(--font-family);
    }
  }

  .Main-menu {
    position: relative;
    width: 40rem;
    height: 3.125rem;

    li {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: calc(40rem / 4);
      height: 100%;

      a {
        width: max-content;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
        font-family: var(--font-family-Lexend);
        cursor: pointer;
      }
    }
  }

  .Sub-menu {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .User-button {
      width: 50px;
      height: 100%;
      font-size: 1.2rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .Search-button {
      width: 50px;
      height: 100%;
      font-size: 1.2rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const [navbartoggle, setNavbartoggle] = useState(false);

  const scrollEvent = () => {
    let scroll = window.scrollY;

    if (scroll > 50) {
      setNavbartoggle(true);
    } else {
      setNavbartoggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <>
      <header>
        <NavbarContainer toggle={navbartoggle}>
          <div className='logo'>
            <h1>IYOU</h1>
            <p>IU PROFILE SITE</p>
          </div>

          <ul className='Main-menu'>
            <li>
              <Link to='/'>
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link to='/Gallary'>
                <span>Gallary</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span>Music</span>
              </Link>
            </li>
            <li>
              <a
                href='http://www.edam-ent.com/html/'
                target='_blank'
                rel='noreferrer'
              >
                <span>Edam</span>
              </a>
            </li>
          </ul>
          <div className='Sub-menu'>
            <div className='User-button'>
              <FaUser />
            </div>
            <div className='Search-button'>
              <FaSearch />
            </div>
          </div>
        </NavbarContainer>
      </header>
    </>
  );
};

export default Navbar;
