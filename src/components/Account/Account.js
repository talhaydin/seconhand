import React from 'react';
import './Account.scss';
import pfp from '../../assets/pfp.svg';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Account() {
  let history = useHistory();

  useEffect(() => {
    if (!document.cookie.includes('auth_token')) {
      history.push('/login');
    }
  }, [document.cookie]);

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
