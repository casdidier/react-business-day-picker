import React, { useState, useContext, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { nanoid } from "nanoid";
import ButtonDay from "./ButtonDay";
import Button from "@material-ui/core/Button";
import TimePicker from "./TimePicker";

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
  section: {
    color: "white",
    padding: "0 0px",
    display: "flex",
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    padding: "5px",
  },
  days: {
    color: "white",
    padding: "0 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "5px",
  },
  timerange: {
    color: "white",
    padding: "0 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "5px",
  },
  button: {
    marginTop: "auto",
  },
}));

export default function TimeContainer(props) {
  const classes = useStyles();

  const {
    updateWeekDays,
    updateTimeFrames,
    availableDays,
    indexTimeContainer,
  } = props;

  const [hours, setHours] = useState([]);
  const [weekdays, setWeekDays] = useState(availableDays);
  const [timeRangeList, setTimeRangeList] = useState([1]);

  const addTimeRange = () => {
    setTimeRangeList([...timeRangeList, 1]);
  };

  const selectDays = (e) => {
    const dayId = e.currentTarget.dataset.id;
    const selectedDays = [...weekdays].map((day) =>
      day.id === +dayId ? { ...day, selected: !day.selected } : day
    );

    // console.log(selectedDays);

    setWeekDays(selectedDays);
  };

  const selectHours = (startTime, endTime, indexTimer) => {
    const newHours = [startTime, endTime];

    // update this a new timerange
    if (indexTimer + 1 > hours.length) {
      setHours([...hours, newHours]);
    } else {
      // update existing timerange
      const selectedTimes = [...hours].map((timeRange, ind) => {
        return indexTimer == ind ? newHours : timeRange;
      });

      setHours(selectedTimes);
    }
  };

  useEffect(() => {
    // console.log("🚀 ~ file: TimeContainer.js ~ hours", hours);
    console.log("hours", hours);
    const newTimeFrame = [weekdays, hours];
    console.log(
      "🚀 ~ file: TimeContainer.js ~ line 100 ~ useEffect ~ newTimeFrame",
      newTimeFrame
    );

    if (hours.length > 0) {
      updateTimeFrames(newTimeFrame, indexTimeContainer);
    }
  }, [weekdays, hours]);

  return (
    <div className={classes.section}>
      {weekdays && (
        <section className={classes.container}>
          <div className={classes.days}>
            {weekdays.map((day) => {
              return (
                <div className="day">
                  <ButtonDay
                    dayId={day.id}
                    text={day.day}
                    selectDays={selectDays}
                    selected={day.selected}
                  ></ButtonDay>
                </div>
              );
            })}
          </div>
          <div className={classes.timerange}>
            {timeRangeList.length > 0 &&
              timeRangeList.map((e, index) => {
                return (
                  <TimePicker selectHours={selectHours} indexTimer={index} />
                );
              })}
          </div>
          <Button
            className={classes.button}
            color="primary"
            onClick={addTimeRange}
          >
            Ajouter un horaire
          </Button>
        </section>
      )}
    </div>
  );
}
