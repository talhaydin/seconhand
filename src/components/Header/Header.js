import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';
import plussign from '../../assets/plussign.svg';
import profile from '../../assets/profile.svg';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn }) {
  return (
    <div className="header">
      <div className="headerContent">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <button className="headerBtns dabluebg">
            <img src={profile} alt="profile" className="profile" />
            <Link to="/addproduct">
              <span>Ürün Ekle</span>
            </Link>
          </button>
          <button className="headerBtns dabluebg">
            <img src={plussign} alt="plussign" className="plussign" />
            {isLoggedIn ? (
              <Link to="/account">
                <span>Hesabım</span>
              </Link>
            ) : (
              <Link to="/login">
                <span>Giriş Yap</span>
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
