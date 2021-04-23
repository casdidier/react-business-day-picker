import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 80
  }
}));

export default function TimePicker() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        label="à partir de"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 1200 // 5 min
        }}
      />
      <TextField
        id="time"
        label="jusqu'à"
        type="time"
        defaultValue="08:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 1200 // 5 min
        }}
      />
    </form>
  );
}
