import React from 'react';
import './SignUp.scss';
import logo from '../../assets/logo.png';
import aside from '../../assets/aside.png';

function Signup() {
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
                <h1>Üye ol</h1>
                <h4>Fırsatlardan yararlanmak için üye ol</h4>
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

                  <button> Üye ol</button>
                  <div className="text-center">
                    <h4>
                      Hesabın var mı?{' '}
                      <a href="google.com" className="dablue">
                        Giriş yap
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

export default Signup;
