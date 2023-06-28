import React, { useState } from "react";
import "../../assets/styles/navbar.css";
import { Link } from "react-router-dom";
import { FaUser, FaSearch } from "react-icons/fa";
import { useEffect } from "react";

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
        <div className='navbar' id={navbartoggle === true ? "active" : ""}>
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
      </header>
    </>
  );
};

export default Navbar;
