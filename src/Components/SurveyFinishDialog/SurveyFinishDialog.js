import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";

const Transition = props => {
  return <Slide direction="up" {...props} />;
};
const styles = theme => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 25,
    width: 330,
    height: 52
  },
  buttonLabel: {
    fontFamily: "GibsonSemiBold",
    fontSize: 13
  },
  dialogActionsRoot: {
    justifyContent: "center"
  },
  titleText: {
    fontFamily: "GibsonSemiBold",
    fontSize: 20,
    color: "#454f63"
  },
  bodyText: {
    fontFamily: "GibsonRegular",
    fontSize: 14,
    color: "#78849e"
  },
  dialogRoot: {
    width: 390,
    padding: 12,
    borderRadius: 20
  }
});

const SurveyFinishDialog = props => {
  const { classes } = props;
  return (
    <div>
      <Dialog
        classes={{ paper: classes.dialogRoot }}
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <span className={classes.titleText}>Way to go!</span>
        </DialogTitle>
        <DialogContent>
          <span className={classes.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et diam
            elementum, semper lectus ut, feugiat ante.
          </span>
        </DialogContent>
        <DialogActions className={classes.dialogActionsRoot}>
          <Button
            onClick={props.onClose}
            color="primary"
            variant="contained"
            className={classes.button}
            classes={{
              label: classes.buttonLabel
            }}
          >
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(SurveyFinishDialog);
