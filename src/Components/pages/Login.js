import classes from "../css/Login.module.css";
import { useState } from "react";
import { Form } from "react-router-dom";
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
  const email = formData.get("username");
  const password = formData.get("password");
  console.log(email);
  console.log(password);
  console.log(formData);
  return formData;
};
