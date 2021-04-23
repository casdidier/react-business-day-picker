import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimeContainer from "./TimeContainer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  button: {
    marginRight: "auto"
  }
}));

export default function SchedulerContainer() {
  const classes = useStyles();

  const [timeContainerList, setTimeContainerList] = useState([1]);

  const addTimeContainer = () => {
    setTimeContainerList([...timeContainerList, 1]);
  };

  return (
    <div className={classes.container}>
      {timeContainerList.length > 0 &&
        timeContainerList.map((e) => {
          return <TimeContainer />;
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
