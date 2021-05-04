import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimeContainer from "./TimeContainer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    marginRight: "auto",
  },
  buttonDelete: {
    // marginRight: "auto",
  },
}));

const WEEKDAYS = [
  { id: 1, day: "L", selected: false },
  { id: 2, day: "M", selected: false },
  { id: 3, day: "M", selected: false },
  { id: 4, day: "J", selected: true },
  { id: 5, day: "V", selected: false },
  { id: 6, day: "S", selected: false },
  { id: 7, day: "D", selected: false },
];

export default function SchedulerContainer() {
  const classes = useStyles();

  const [timeContainerList, setTimeContainerList] = useState([WEEKDAYS]);
  const [availableDays, setAvailableDays] = useState(WEEKDAYS);
  const [timeFrames, setTimesFrames] = useState([]);

  const addTimeContainer = () => {
    const newTimeContainerList = [...timeContainerList, availableDays];
    setTimeContainerList(newTimeContainerList);
  };

  const updateWeekDays = (daysList) => {
    // console.log("updated weekdays", daysSelected);
    setAvailableDays(daysList);
  };

  const updateTimeFrames = (timeFrame, index) => {
    // console.log("timeframes", timeFrames);

    console.log("follow up timeFrames", index, timeFrames.length);

    if (index + 1 > timeFrames.length) {
      setTimesFrames([...timeFrames, timeFrame]);
      console.log("new timeframe added");
    } else {
      const newTimeFramesList = [...timeFrames].map((currentTimeFrame, ind) => {
        return index == ind ? timeFrame : currentTimeFrame;
      });

      setTimesFrames(newTimeFramesList);
      console.log("old timeframe updated");
    }

    console.log("list of timeFrames", timeFrames);
  };

  const deleteTimeContainer = (e, index) => {
    const newTimeFramesList = [...timeFrames].filter(
      (currentTimeFrame, ind) => {
        return index !== ind;
      }
    );

    const newTimeContainerList = [...timeContainerList].filter(
      (currentTimeFrame, ind) => {
        return index !== ind;
      }
    );

    console.log("newTimeFramesList", newTimeFramesList);

    setTimesFrames(newTimeFramesList);
    setTimeContainerList(newTimeContainerList);
  };

  useEffect(() => {
    console.log("freshed", timeFrames);
    // call to API
  }, [timeFrames]);

  return (
    <div className={classes.container}>
      {timeContainerList.length > 0 &&
        timeContainerList.map((days, index) => {
          return (
            <div className={classes.timeContainer}>
              <TimeContainer
                updateWeekDays={updateWeekDays}
                updateTimeFrames={updateTimeFrames}
                availableDays={days}
                indexTimeContainer={index}
                deleteTimeContainer={deleteTimeContainer}
              />
            </div>
          );
        })}
      <Button
        className={classes.button}
        color="primary"
        onClick={addTimeContainer}
      >
        Ajouter une nouvelle ligne
      </Button>
    </div>
  );
}
