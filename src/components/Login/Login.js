import React from 'react';
import './Login.scss';
import logo from '../../assets/logo.png';
import aside from '../../assets/aside.png';

function Login() {
  return (
    <>
      <div className="loginContainer">
        <div className="loginLeft">
          <img src={aside} alt="aside" className="leftImage" />
        </div>
        <div className="loginRight">
          <div className="rightContent">
            <div className="imgDiv">
              {' '}
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="rightBottom">
              <div className="banner">
                <h1>Giriş Yap</h1>
                <h4>Fırsatlardan yararlanmak için giriş yap</h4>
              </div>
              <div className="loginform">
                <form>
                  <label for="email" className="label">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email@example.com"
                  />
                  <label for="password">Şifre</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*****"
                  />

                  <button> Giriş Yap</button>
                  <div className="text-center">
                    <h4>
                      Hesabın yok mu?{' '}
                      <a href="google.com" className="dablue">
                        Üye ol
                      </a>{' '}
                    </h4>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
