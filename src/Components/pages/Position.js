import React from "react";
import { Form } from "react-router-dom";
import classes from "../css/Position.module.css";
import { IoAdd } from "react-icons/io5";

const Position = () => {
  return (
    <div className={classes.Position_Wrapper}>
      <h1>ELECTION POSITION</h1>

      <div className={classes.Form_Wrapper}>
        <div className={classes.btn_Wrapper}>
          <button id="button">
            <IoAdd />
            <span>New</span>
          </button>
        </div>
        <Form>
          <div className={classes.Form_Heading}>
            <h2>Description</h2>
            <h2>Maximum Vote</h2>
            <h2>Edit</h2>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Position;
