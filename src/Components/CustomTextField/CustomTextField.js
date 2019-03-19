import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textField: {
    margin: `0px ${theme.spacing.unit}px 6px ${theme.spacing.unit}px`,
    height: 50,
    "& fieldset": {
      borderRadius: 13
    },
    width: 370
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const CustomTextField = props => {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        className={classes.textField}
        value={props.value}
        onChange={props.handleTextChange}
        margin="normal"
        variant="outlined"
        placeholder={props.placeholder}
      />
    </form>
  );
};

export default withStyles(styles)(CustomTextField);
