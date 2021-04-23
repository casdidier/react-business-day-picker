import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeekDaysPicker from "./WeekDaysPicker";
import Button from "@material-ui/core/Button";

const WEEKDAYS = [
  { key: 1, day: "L", selected: true },
  { key: 2, day: "M", selected: true },
  { key: 3, day: "M", selected: true },
  { key: 4, day: "J", selected: true },
  { key: 5, day: "V", selected: true },
  { key: 6, day: "S", selected: true },
  { key: 7, day: "D", selected: true }
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
}));

export default function TimeContainer() {
  const classes = useStyles();

  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const [weekdays, setWeekDays] = useState(WEEKDAYS);

  const selectDays = (e) => {
    // console.log(days);
    console.log(e.target.innerHTML);
    const newDays = [...days];
    newDays.push(e.target.innerHTML);
    console.log(newDays);
    console.log(days);

    // setDays(newDays);
  };

  return (
    <div className={classes.container}>
      <WeekDaysPicker selectDays={selectDays} weekdays={weekdays} />
    </div>
  );
}
