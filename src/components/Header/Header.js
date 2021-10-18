import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';
import plussign from '../../assets/plussign.svg';
import profile from '../../assets/profile.svg';

function Header() {
  return (
    <div className="header">
      <div className="headerContent">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <button className="headerBtns dabluebg">
            <img src={profile} alt="profile" className="profile" />
            <span>Ürün Ekle</span>
          </button>
          <button className="headerBtns dabluebg">
            <img src={plussign} alt="plussign" className="plussign" />
            <span>Giriş Yap</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
