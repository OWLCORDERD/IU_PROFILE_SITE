import React from "react";
import styled from "styled-components";

const Footer = () => {
  const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    height: 40vh;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.125rem 6.25rem;
    z-index: 1;

    .footer-Preview {
      position: relative;
      width: 20rem;
      height: 15rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .footer-logo {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 8rem;
        color: #fff;

        h1 {
          font-size: 2rem;
          font-family: var(--font-family-Lexend);
        }

        p {
          font-size: 12px;
          font-family: var(--font-family);
        }
      }

      .footer-copyright {
        width: 100%;
        height: 5rem;
        text-align: center;
        padding-top: 10px;

        p {
          font-size: 12px;
          color: #fff;
          text-transform: uppercase;
        }
      }
    }

    .footer-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      width: 50rem;
      height: 15rem;

      .menu-list {
        width: 50rem;
        height: 2rem;

        li {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: calc(50rem / 4);
          height: 100%;

          a {
            padding: 10px;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            font-family: var(--font-family-Noto);
          }
        }
      }

      .Family-site {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 20rem;
        height: 5rem;

        select {
          position: relative;
          width: 15rem;
          height: 3.5rem;
          font-size: 12px;
          background-color: transparent;
          border: 2px solid #fff;
          color: #fff;
          padding: 0 1rem;

          option {
            display: block;
            color: #000;
            font-size: 12px;
          }
        }
      }
    }
  `;
  return (
    <FooterContainer>
      <div className='footer-Preview'>
        <div className='footer-logo'>
          <h1>IYOU</h1>
          <p>IU PROFILE SITE</p>
        </div>

        <div className='footer-copyright'>
          <p>@ 2024, IYOU All rights reserved.</p>
        </div>
      </div>
      <div className='footer-menu'>
        <ul className='menu-list'>
          <li>
            <a
              href='https://www.youtube.com/@dlwlrma'
              target='_blank'
              rel='noreferrer'
            >
              YOUTUBE
            </a>
          </li>
          <li>
            <a
              href='https://m.cafe.daum.net/IU/_rec'
              target='_blank'
              rel='noreferrer'
            >
              IU FAN CAFE
            </a>
          </li>
          <li>
            <a
              href='https://owlcoderd.notion.site/eec4489447c4429ab6fa963e5fc7b344'
              target='_blank'
              rel='noreferrer'
            >
              개발자
            </a>
          </li>
          <li>
            <a href='#'>문의하기</a>
          </li>
        </ul>

        <div className='Family-site'>
          <select>
            <option>FAMILY SITE</option>
            <option>EDAM ENTERTAINMENT</option>
            <option>MADE EDAM</option>
            <option>IU FAN CAFE</option>
          </select>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
