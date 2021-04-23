/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { v4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import ButtonDay from "./ButtonDay";
import Button from "@material-ui/core/Button";
import TimePicker from "./TimePicker";

const useStyles = makeStyles({
  container: {
    color: "white",
    padding: "0 0px",
    display: "flex",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "5px"
  },
  days: {
    color: "white",
    padding: "0 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "5px"
  },
  timerange: {
    color: "white",
    padding: "0 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "5px"
  },
  button: {
    marginTop: "auto"
  }
});

export default WeekDaysPicker = (props) => {
  const { selectDays, weekdays } = props;
  const [timeRangeList, setTimeRangeList] = useState([1]);

  const classes = useStyles();

  const addTimeRange = () => {
    setTimeRangeList([...timeRangeList, 1]);
  };

  return (
    <section className={classes.container}>
      <div className={classes.days}>
        {weekdays.map((day) => {
          return (
            <div className="day" key={v4()}>
              <ButtonDay
                text={day.day}
                dayNum={day.key}
                selectDays={selectDays}
              ></ButtonDay>
            </div>
          );
        })}
      </div>
      <div className={classes.timerange}>
        {/* <TimePicker />
        <TimePicker />
        <TimePicker />
        <TimePicker /> */}
        {timeRangeList.length > 0 &&
          timeRangeList.map((e) => {
            return <TimePicker />;
          })}
      </div>
      <Button className={classes.button} color="primary" onClick={addTimeRange}>
        Ajouter un horaire
      </Button>
    </section>
  );
};
