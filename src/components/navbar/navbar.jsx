import React, { useState } from "react";
import "../../assets/styles/navbar.css";
import { Link } from "react-router-dom";
import { FaUser, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [navbartoggle, setNavbartoggle] = useState(false);

  const scrollEvent = () => {
    window.addEventListener("scroll", function () {
      let scroll = window.scrollY;

      if (scroll > 50) {
        setNavbartoggle(true);
      } else {
        setNavbartoggle(false);
      }
    });
  };
  scrollEvent();

  const mainReplace = () => {
    window.location.replace("/");
  };
  return (
    <>
      <div className='navbar' id={navbartoggle === true ? "active" : ""}>
        <div className='logo'>
          <h1>IYOU</h1>
          <p>IU PROFILE SITE</p>
        </div>

        <ul className='Main-menu'>
          <li>
            <Link to='/' onClick={() => mainReplace()}>
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
          <Link to='/Join'>
            <div className='User-button'>
              <FaUser />
            </div>
          </Link>
          <div className='Search-button'>
            <FaSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
