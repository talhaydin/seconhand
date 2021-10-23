import React, { useEffect, useState } from 'react';
import './Login.scss';
import logo from '../../assets/logo.svg';
import aside from '../../assets/aside.png';
import toastalert from '../../assets/toastalert.png';
import { Link, useHistory } from 'react-router-dom';

function Login({ isLoggedIn, setIsLoggedIn }) {
  let history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/products');
    }
  }, [isLoggedIn]);

  const [loginMail, setLoginMail] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [alert, setAlert] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('https://bootcampapi.techcs.io/api/fe/v1/authorization/signin', {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginMail,
        password: loginPw,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          history.push('/products');
          setIsLoggedIn(true);
          document.cookie = 'auth_token=' + data.access_token;
        } else if (data.statusCode === 401) {
          setTimeout(() => {
            setAlert(true);
          }, 100);
          setTimeout(() => {
            setAlert(false);
          }, 1500);
        }
      });
  };

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
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email@example.com"
                    value={loginMail}
                    onChange={(e) => setLoginMail(e.target.value)}
                  />
                  <label htmlFor="password">Şifre</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*****"
                    value={loginPw}
                    onChange={(e) => setLoginPw(e.target.value)}
                  />

                  {alert ? (
                    <div className="toast">
                      <span>
                        <img src={toastalert} alt="toastalert"></img>
                      </span>
                      <p>Kullanıcı adı ya da şifreniz yanlış !</p>
                    </div>
                  ) : null}

                  <button type="submit" onClick={handleLogin}>
                    {' '}
                    Giriş Yap
                  </button>
                  <div className="text-center">
                    <h4>
                      Hesabın yok mu?{' '}
                      <Link to="/" className="dablue">
                        Üye ol
                      </Link>
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
