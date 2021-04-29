import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeekDaysPicker from "./WeekDaysPicker";
import Button from "@material-ui/core/Button";

const WEEKDAYS = [
  { id: 1, day: "L", selected: false },
  { id: 2, day: "M", selected: false },
  { id: 3, day: "M", selected: false },
  { id: 4, day: "J", selected: false },
  { id: 5, day: "V", selected: false },
  { id: 6, day: "S", selected: false },
  { id: 7, day: "D", selected: false },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

export default function TimeContainer() {
  const classes = useStyles();

  const [hours, setHours] = useState([]);
  const [weekdays, setWeekDays] = useState(WEEKDAYS);

  const selectDays = (e) => {
    const dayId = e.currentTarget.dataset.id;
    console.log(dayId);
    const selectedDays = [...weekdays].map((day) =>
      day.id === +dayId ? { ...day, selected: true } : day
    );

    console.log(selectedDays);

    setWeekDays(selectedDays);
  };

  return (
    <div className={classes.container}>
      <WeekDaysPicker selectDays={selectDays} weekdays={weekdays} />
    </div>
  );
}
