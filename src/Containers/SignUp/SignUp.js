import React from "react";
import CloseIcon from "../../Components/CloseIconButton/CloseIconButton";
import { withStyles } from "@material-ui/core/styles";
import SignupButtonImage from "../../Assets/Images/sign-up.svg";
import CustomTextField from "../../Components/CustomTextField/CustomTextField";
import SignupWithFacebook from "../../Assets/Images/sign-up-fb.svg";
import SignupWithGoogle from "../../Assets/Images/sign-up-google.svg";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import Disclaimer from "../Disclaimer/Disclaimer";

const styles = theme => ({
  loginBox: {
    width: 400,
    height: "inherit"
  },
  iconLoginBox: {
    display: "flex",
    alignItems: "center",
    margin: "25px 0px"
  },
  loginText: {
    marginLeft: 130,
    fontSize: 16,
    fontFamily: "GibsonSemiBold"
  },
  loginFormBox: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    marginBottom: 10
  },
  loginWithEmailText: {
    width: "inherit",
    height: 22,
    color: "#454f63",
    fontFamily: "GibsonSemiBold",
    fontSize: 20,
    textAlign: "left",
    marginBottom: 25,
    padding: 10
  },
  emailPassText: {
    width: "inherit",
    height: 15,
    color: "#454f63",
    fontFamily: "GibsonSemiBold",
    fontSize: 13,
    textAlign: "left",
    padding: 10
  },
  hrefBox: {
    marginTop: 12,
    "& img": {
      width: 365,
      marginBottom: 12
    }
  },
  alreadyHaveAccount: {
    fontSize: 14,
    display: "inherit",
    fontFamily: "GibsonRegular",
    margin: "10px 0px"
  },
  otherLoginBox: {
    marginTop: 25
  },
  hrefLink: {
    color: "#5773ff",
    fontSize: 14,
    textDecoration: "underline"
  },
  ORText: {
    fontSize: 13,
    color: "#a7afc0"
  },
  singUpButtonBox: {
    "& img": {
      margin: "50px 0 10px 0"
    }
  }
});

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    open: false,
    // May be via Redux or DB
    disclaimerAlreadyDone: false
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleDisclaimerOpen = event => {
    event.preventDefault();
    this.setState({ open: true });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loginBox}>
        <MetaTags>
          <title>SignUp</title>
          <meta name="Description" content="Praestan App Sign Up page" />
        </MetaTags>
        <section className={classes.iconLoginBox}>
          <CloseIcon />
          <span className={classes.loginText}>Sign Up</span>
        </section>
        <section className={classes.loginFormBox}>
          <span className={classes.loginWithEmailText}>Sign Up with Email</span>
          <span className={classes.emailPassText}>Name</span>
          <CustomTextField placeholder="Name" />
          <span className={classes.emailPassText}>Email</span>
          <CustomTextField placeholder="Email" />
          <span className={classes.emailPassText}>Password</span>
          <CustomTextField placeholder="Password" />
        </section>
        <span className={classes.ORText}>--OR--</span>
        <section className={classes.otherLoginBox}>
          <Link to="/signup-google" className={classes.hrefBox}>
            <img src={SignupWithGoogle} alt="signupGoogleButton" />
          </Link>
          <Link to="/signup-facebook" className={classes.hrefBox}>
            <img src={SignupWithFacebook} alt="signUpFacebookButton" />
          </Link>
          <span className={classes.alreadyHaveAccount}>
            By creating an account, you agree to Portage’s
            <br />
            <Link to="/privacy-policy" className={classes.hrefLink}>
              Privacy Policy
            </Link>
            {"  "}
            and
            <Link to="/terms-of-use" className={classes.hrefLink}>
              {" "}
              Terms of Use
            </Link>
          </span>
          <Link
            onClick={this.handleDisclaimerOpen}
            to=""
            className={classes.singUpButtonBox}
          >
            <img src={SignupButtonImage} alt="signUpButton" />
          </Link>
          <Disclaimer open={this.state.open} onClose={this.handleClose} />
          <span className={classes.alreadyHaveAccount}>
            Already have an account?
            <Link to="/login" className={classes.hrefLink}>
              {" "}
              Login
            </Link>
          </span>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
