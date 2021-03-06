import React from 'react';
import './SignUp.scss';
import logo from '../../assets/logo.svg';
import aside from '../../assets/aside.png';
import toastalert from '../../assets/toastalert.png';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Signup({ isLoggedIn, setIsLoggedIn }) {
  let history = useHistory();
  const [signUpMail, setSignUpMail] = useState('');
  const [signUpPw, setSignUpPw] = useState('');
  const [alert, setAlert] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/products');
    }
  }, [isLoggedIn]);

  const handleSignup = (e) => {
    e.preventDefault();
    fetch('https://bootcampapi.techcs.io/api/fe/v1/authorization/signup', {
      method: 'POST',
      headers: { accept: '*/*', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signUpMail,
        password: signUpPw,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          history.push('/products');
          setIsLoggedIn(true);
          document.cookie = 'auth_token=' + data.access_token;
          localStorage.setItem('loginmail', signUpMail);
        } else if (data.statusCode === 409) {
          setErr(data.message);
          setTimeout(() => {
            setAlert(true);
          }, 100);
          setTimeout(() => {
            setAlert(false);
          }, 1500);
          setTimeout(() => {
            history.push('/login');
          }, 1500);
        } else {
          setErr(data.message);
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
                <h1>??ye ol</h1>
                <h4>F??rsatlardan yararlanmak i??in ??ye ol</h4>
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
                    value={signUpMail}
                    onChange={(e) => setSignUpMail(e.target.value)}
                  />
                  <label htmlFor="password">??ifre</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*****"
                    value={signUpPw}
                    onChange={(e) => setSignUpPw(e.target.value)}
                  />
                  {alert ? (
                    <div className="toast">
                      <span>
                        <img src={toastalert} alt="toastalert"></img>
                      </span>
                      <p> {err} </p>
                    </div>
                  ) : null}
                  <button onClick={handleSignup}> ??ye ol</button>

                  <div className="text-center">
                    <h4>
                      Hesab??n var m???{' '}
                      <Link to="/login" className="dablue">
                        Giri?? yap
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

export default Signup;
