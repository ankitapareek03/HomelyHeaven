import React from "react";
import Sign_in from "./sign_in";
import "../component/SignupSignin/SignupSignin.css";

import user_icon from "../component/assets/User_icon.png";
import Email_icon from "../component/assets/Email_lcon.png";
import passward_icon from "../component/assets/Passward_icon.png";
function Sign_up() {
  return (
    <div className="parent_container">
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img
              src={user_icon}
              alt=""
              style={{ height: "24px", width: "24px" }}
            />
            <input
              type="text"
              placeholder="NAME"
              className="input-box"
              required
            ></input>
          </div>

          <div className="input">
            <img
              src={Email_icon}
              alt=""
              style={{ height: "24px", width: "24px" }}
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="input-box"
              required
            ></input>
          </div>

          <div className="input">
            <img
              src={passward_icon}
              alt=""
              style={{ height: "24px", width: "24px" }}
            />
            <input
              type="passward"
              placeholder="PASSWARD"
              className="input-box"
              required
            ></input>
          </div>
        </div>
        <div className="forgot_passward_span">
          <div className="forgot_passward">Forgot Passward?</div>
          <span className="clickhere">Click here</span>
        </div>

        <div className="submit_container">
          <div className="submit">Sign Up</div>
          <div className="submit">Sign In</div>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
