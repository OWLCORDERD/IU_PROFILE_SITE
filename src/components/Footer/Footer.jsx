import React from "react";
import "../../assets/styles/footer.css";

const Footer = ({ loading }) => {
  return (
    <footer className='footer-container' id={loading ? "" : "active"}>
      <div className='footer-Preview'>
        <div className='footer-logo'>
          <h1>IYOU</h1>
          <p>IU PROFILE SITE</p>
        </div>

        <div className='footer-title'>
          <p>
            FAN MADE PROFILE SITE <br></br>
            ABOUT INTRODUCE IU
          </p>
        </div>
      </div>
      <div className='footer-menus'>
        <ul className='footer-Menu'>
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
    </footer>
  );
};

export default Footer;
