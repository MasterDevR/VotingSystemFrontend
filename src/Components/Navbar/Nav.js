import classes from "../css/nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import NavLink from "./NavLink";
const Nav = () => {
  const [isNav, setIsNav] = useState(false);

  const navHandler = () => {
    setIsNav(!isNav);
  };

  return (
    <div className={`${classes.navigation} ${isNav ? classes.active : ""}`}>
      {!isNav ? (
        <GiHamburgerMenu
          size="2rem"
          onClick={navHandler}
          cursor="pointer"
          id={classes.iconHidden}
        />
      ) : (
        <AiOutlineArrowLeft
          size="2rem"
          onClick={navHandler}
          cursor="pointer"
          id={classes.icon}
        />
      )}
      <NavLink isNav={isNav} />
    </div>
  );
};

export default Nav;
