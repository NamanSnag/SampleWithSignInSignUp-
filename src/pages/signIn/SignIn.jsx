import React, {useState} from "react";
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

import "./style.scss";

const SignIn = () => {
  const [authData, setAuthData] = useState({
    email : '',
    password : '',
    confirmPassword : '',
  })

  const navigate = useNavigate();

  const handleAuthChange = ({currentTarget : input}) => {
    setAuthData({
      ...authData,
      [input.name] : input.value
    })
    console.log(input.value)
  }

  // hitting register api
  const handleSignIn = (e) => {
    e.preventDefault();
    const URL = 'http://localhost:8000/login'
    axios.post(URL, authData)
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div className="auth">
      <div className="container">
        <div className="drop">
          <div className="content">
            <h2 className="animate__heartBeat">Log In</h2>
            <form onSubmit={handleSignIn}>
              <div className="input-box">
                <input type="text" name="email" placeholder="Email" onChange={handleAuthChange} />
              </div>
              <div className="input-box">
                <input type="password" name="password" placeholder="Password" onChange={handleAuthChange}/>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleAuthChange}
                />
              </div>
              <div className="input-box">
                <input type="submit" value="Log In" />
              </div>
            </form>
          </div>
        </div>
        <a href="/register" className="btn">
          Sign Up
        </a>
        {/* <a href="#" class='btn signup'>Signup</a> */}
      </div>
    </div>
  );
};

export default SignIn;
