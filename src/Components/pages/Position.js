import { useState, useRef } from "react";
import classes from "../css/Position.module.css";
import { GoDiffAdded } from "react-icons/go";

const Position = () => {
  const [rowCount, setRowCount] = useState(1);

  const handleAddRow = () => {
    setRowCount(rowCount + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = [];
    for (let i = 0; i < rowCount; i++) {
      const position = formData.get(`position_${i}`);
      const numOfVote = formData.get(`numOfvote_${i}`);
      data.push({ position, numOfVote });
    }
    console.log(data);
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
                      onClick={handleAddRow}
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
