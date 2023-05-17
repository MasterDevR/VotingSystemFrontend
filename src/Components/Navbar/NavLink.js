import { NavLink } from "react-router-dom";
import classes from "../css/nav.module.css";

import {
  MdDashboardCustomize,
  MdHowToVote,
  MdPersonPinCircle,
  MdOutlineBallot,
  MdSubtitles,
  MdLogout,
} from "react-icons/md";

import { GiPositionMarker } from "react-icons/gi";

const Navlink = ({ isNav }) => {
  return (
    <div className={classes.container}>
      <span>{isNav && "REPORT"}</span>
      <NavLink to="/Dashboard" title="Dashboard">
        <MdDashboardCustomize className={isNav ? "" : classes.centerIcon} />
        {isNav && <span>Dashboard</span>}
      </NavLink>

      <NavLink to="" title="Votes">
        {" "}
        <MdHowToVote className={isNav ? "" : classes.centerIcon} />
        {isNav && <span>Votes</span>}
      </NavLink>

      <span>{isNav && "MANAGE"}</span>

      <NavLink to="/Postion" title="Position">
        {" "}
        <GiPositionMarker className={isNav ? "" : classes.centerIcon} />
        {isNav && <span>Position</span>}
      </NavLink>

      <NavLink to="">
        {" "}
        <MdPersonPinCircle
          className={isNav ? "" : classes.centerIcon}
          title="Candidate"
        />
        {isNav && <span>Candidate</span>}
      </NavLink>
      <span>{isNav && "SETTING"}</span>
      <NavLink to="">
        {" "}
        <MdOutlineBallot
          className={isNav ? "" : classes.centerIcon}
          title="Ballot"
        />{" "}
        {isNav && <span>Ballot</span>}
      </NavLink>

      <span></span>

      <NavLink
        to=""
        style={{ justifyContent: "center", color: "white" }}
        title="Logout"
      >
        <MdLogout className={isNav ? "" : classes.centerIcon} />{" "}
        {isNav && <span>LOGOUT</span>}
      </NavLink>
    </div>
  );
};

export default Navlink;
