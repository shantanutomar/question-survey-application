import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import ContinueEnabled from "../../Assets/Images/disclaimer-button-enabled.svg";
import ContinueDisabled from "../../Assets/Images/disclaimer-button-disabled.svg";
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  dialogRoot: {
    fontFamily: "GibsonSemiBold",
    color: "#454f63",
    fontSize: 20,
    margin: "15px 0px 0px 0px"
  },
  dialogContentRoot: {
    fontFamily: "GibsonRegular",
    display: "flex",
    flexDirection: "column",
    color: "#78849e",
    fontSize: 14,
    lineHeight: 1.2
  },
  formControlLabel: {
    color: "#5773ff",
    fontFamily: "GibsonRegular"
  },

  formControlLabelRoot: {
    marginTop: 20
  },
  dialogActionsRoot: {
    justifyContent: "center",
    marginBottom: 20
  },
  paper: {
    height: 400,
    borderRadius: 20,
    width: 340
  }
});

class Disclaimer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isChecked: false
    };
  }

  onContinue = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ isChecked: event.target.checked });
  };

  render() {
    const { classes, value, ...other } = this.props;

    return (
      <Dialog
        aria-labelledby="confirmation-dialog-title"
        {...other}
        classes={{
          paper: classes.paper
        }}
        TransitionComponent={Transition}
      >
        <DialogTitle
          disableTypography
          id="confirmation-dialog-title"
          className={classes.dialogRoot}
        >
          Disclaimer
        </DialogTitle>
        <DialogContent className={classes.dialogContentRoot}>
          The results of this survey and any recommendations provided are not
          intended to substitute for consultation with a healthcare
          professional. If you feel you need treatment or care, you should
          consult with a healthcare professional. If you are in crisis, having
          suicidal thoughts and in need of immediate help or assistance, you
          should go to your nearest Emergency Department or call 911.
          <FormControlLabel
            classes={{
              label: classes.formControlLabel,
              root: classes.formControlLabelRoot
            }}
            control={
              <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
                checked={this.state.isChecked}
                onChange={this.handleChange}
                value="checkbox"
                color="primary"
              />
            }
            label="I have read the disclaimer"
          />{" "}
        </DialogContent>
        <DialogActions className={classes.dialogActionsRoot}>
          {this.state.isChecked ? (
            <Link to="/intro">
              <img src={ContinueEnabled} alt="ContinueEnabledButton" />
            </Link>
          ) : (
            <Link to="" onClick={this.onContinue}>
              <img src={ContinueDisabled} alt="ContinueDisabledButton" />
            </Link>
          )}
        </DialogActions>
      </Dialog>
    );
  }
}

Disclaimer.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string
};
export default withStyles(styles)(Disclaimer);
