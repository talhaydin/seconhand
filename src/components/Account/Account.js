import React from 'react';
import './Account.scss';
import pfp from '../../assets/pfp.svg';
function Account() {
  return (
    <div className="account-layout">
      <div className="account-content">
        <div className="account-header">
          <img src={pfp} alt="" />
          <h4>{localStorage.getItem('loginmail')}</h4>
        </div>
      </div>
    </div>
  );
}

export default Account;
