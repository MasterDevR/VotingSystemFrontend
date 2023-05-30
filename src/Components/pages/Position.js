import { useEffect, useState } from "react";
import classes from "../css/Position.module.css";
import { GoDiffAdded } from "react-icons/go";
import { HiOutlineXMark } from "react-icons/hi2";
import axios from "axios";

const Position = () => {
  const [rowCount, setRowCount] = useState(1);
  const [Data, setData] = useState([]);

  const handleAddRow = async (e) => {
    setRowCount(rowCount + 1);
    const form = e.target.closest("form");
    const formData = new FormData(form);
    const newData = [];
    for (let i = 0; i < rowCount; i++) {
      const position = formData.get(`position_${i}`);
      const numOfVote = formData.get(`numOfvote_${i}`);

      newData.push({ position, numOfVote });
    }
    setData(newData);
    console.log(Data);
  };
  const handleDeleteRow = async (e, delIndex) => {
    console.log("remove " + delIndex);
    if (rowCount === 1) {
      return;
    }
    setRowCount((prevData) => prevData - 1);
    setData((prevData) =>
      prevData.filter((filterIndex) => {
        return filterIndex !== delIndex;
      })
    );

    console.log(Data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/position", {
        Data,
      })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((err) => {
        console.log("position:", err);
      });
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <table className={classes.formTable}>
          <thead>
            <tr>
              <th></th>
              <th>Description</th>
              <th>Maximum Vote</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(rowCount).keys()).map((index) => (
              <tr key={index}>
                <td id={classes.btnTr}>
                  {index === rowCount - 1 && (
                    <GoDiffAdded
                      size={"1.5rem"}
                      id={classes.AddPositionBtn}
                      onClick={(e) => handleAddRow(e)}
                    />
                  )}
                </td>
                <td>
                  <input
                    type="text"
                    id={classes.inputForm}
                    name={`position_${index}`}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id={classes.inputForm}
                    name={`numOfvote_${index}`}
                  />
                </td>
                <td id={classes.btnTr}>
                  <HiOutlineXMark
                    size={"1.5rem"}
                    id={classes.AddPositionBtn}
                    onClick={(e) => handleDeleteRow(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" id="button">
          Submit
        </button>
      </form>
    </center>
  );
};

export default Position;
