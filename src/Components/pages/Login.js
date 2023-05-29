import axios from "axios";
import classes from "../css/Login.module.css";
import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { AiOutlineUser, AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
// image
import icon from "../image/UDMZ.png";
import logo from "../image/lion.png";
const Login = () => {
  const [isPassword, setIsPassword] = useState(false);

  const showPassword = () => {
    setIsPassword(!isPassword);
  };
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Container}>
        <img src={icon} alt="icon" />
        <Form method="post" action="/Login">
          <img src={logo} alt="icon" id={classes.lion_Logo} />
          <span id={classes.heading}>LOGIN</span>
          <div>
            <AiOutlineUser size="2rem" id={classes.LoginIcon} />
            <input type="text" placeholder="Username" name="username" />
          </div>

          <div>
            {!isPassword ? (
              <AiOutlineLock
                size="2rem"
                id={classes.LoginIcon}
                onClick={showPassword}
              />
            ) : (
              <AiOutlineUnlock
                size="2rem"
                id={classes.LoginIcon}
                onClick={showPassword}
              />
            )}
            <input
              type={isPassword ? "text" : "password"}
              placeholder="password"
              name="password"
            />
          </div>
          <span id={classes.forgot_Password}>Forgot Password?</span>
          <button id={classes.btn}>LOGIN</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

export const LoginAction = async ({ request }) => {
  let formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  const response = await axios.post("http://localhost:3001/Login", {
    username,
    password,
  });

  const userType = response.data.userType;

  if (userType !== "Not Found") {
    console.log(userType);
    localStorage.setItem("userType", userType);
    return redirect("/");
  }
  console.log(userType);
  return redirect("/login");
};
