import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import Icon from '@material-ui/core/Icon';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: "0px 0px 0px 15px",
    width: 24,
    height: 24,
    padding: 0
  },
  input: {
    display: "none"
  }
});

function IconButtons(props) {
  const { classes } = props;
  return (
    <div>
      <IconButton
        className={classes.button}
        aria-label="Delete"
        component={Link}
        to="/"
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
}

export default withStyles(styles)(IconButtons);
