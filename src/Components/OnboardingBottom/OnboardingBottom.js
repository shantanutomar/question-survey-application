import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LoginButtonImage from "../../Assets/Images/onbaord_login_button.svg";
import { Link } from "react-router-dom";

const styles = theme => ({
  footerStyle: {
    fontFamily: "GibsonRegular",
    color: "#454f63",
    fontSize: "14px",
    marginTop: 10
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 50
  },
  dontHaveAccount: {
    fontSize: 14,
    fontFamily: "GibsonRegular",
    marginTop: 10
  },
  hrefLink: {
    color: "#5773ff",
    fontSize: 14,
    textDecoration: "underline"
  }
});

const OnboardingBottom = props => {
  const { classes } = props;
  return (
    <div className={classes.buttonContainer}>
      <Link to="/login">
        <img src={LoginButtonImage} alt="loginButton" />
      </Link>
      <span className={classes.dontHaveAccount}>
        Don’t have an account?{" "}
        <Link to="/sign-up" className={classes.hrefLink}>
          {" "}
          Sign up
        </Link>
      </span>
    </div>
  );
};

export default withStyles(styles)(OnboardingBottom);
