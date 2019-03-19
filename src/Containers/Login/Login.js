import React from "react";
import CloseIcon from "../../Components/CloseIconButton/CloseIconButton";
import { withStyles } from "@material-ui/core/styles";
import LoginButtonImage from "../../Assets/Images/onbaord_login_button.svg";
import CustomTextField from "../../Components/CustomTextField/CustomTextField";
import LoginWithFacebook from "../../Assets/Images/login-with-fb.svg";
import LoginWithGoogle from "../../Assets/Images/login-with-google.svg";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

const styles = theme => ({
  loginBox: {
    width: 400,
    height: "auto"
  },
  iconLoginBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: 25,
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
  dontHaveAccount: {
    fontSize: 14,
    display: "inline-flex",
    fontFamily: "GibsonRegular"
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
  }
});

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loginBox}>
        <MetaTags>
          <title>Login</title>
          <meta name="Description" content="Praestan app login page" />
        </MetaTags>
        <section className={classes.iconLoginBox}>
          <CloseIcon />
          <span className={classes.loginText}>Login</span>
        </section>
        <section className={classes.loginFormBox}>
          <span className={classes.loginWithEmailText}>Login with Email</span>
          <span className={classes.emailPassText}>Email</span>
          <CustomTextField placeholder="Email" />
          <span className={classes.emailPassText}>Password</span>
          <CustomTextField placeholder="Password" />
          <Link to="/" className={classes.hrefBox}>
            <img src={LoginButtonImage} alt="loginButton" />
          </Link>
          <Link to="/forgot-password" className={classes.hrefLink}>
            Forgot password
          </Link>
        </section>
        <span className={classes.ORText}>--OR--</span>
        <section className={classes.otherLoginBox}>
          <Link to="/login-google" className={classes.hrefBox}>
            <img src={LoginWithGoogle} alt="loginButton" />
          </Link>
          <Link to="/login-facebook" className={classes.hrefBox}>
            <img src={LoginWithFacebook} alt="loginButton" />
          </Link>
          <span className={classes.dontHaveAccount}>
            Don’t have an account?{" "}
            <Link to="/sign-up" className={classes.hrefLink}>
              {" "}
              Sign up
            </Link>
          </span>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
