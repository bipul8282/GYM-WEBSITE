import React, { useState } from "react";
import './Login.css'
import { NavLink } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getData = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));
    //console.log(userData)
    const user = userData.find((element) => element.email === email);
    console.log(user);
    if (user) {
      if (user.password === password) {
        window.location.assign("/")
        // window.location.href = "https://www.w3schools.com";
        alert("login successfull");
        
       
      } else {
        alert("invalid password");
      }
    } else {
      alert("User undefined");
    }


    setEmail("");
    setPassword("");
  };


  return (
    <div className="mainPart">
      <div className="loginclass">
      <form onSubmit={getData} className="form1">
        <div className="input1">
          <h1>Login🙃</h1>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="loginbtn">Login</button>
      </form>
      <p className="loginreg">Don't Have a Account? <NavLink exact to='/registration' className='reglink'>
          Register Here
        </NavLink></p>
      </div>
    </div>
  );
};
export default Login;