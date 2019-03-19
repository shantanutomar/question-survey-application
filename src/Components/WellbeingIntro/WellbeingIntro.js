import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import StartButton from "../../Assets/Images/start-button.svg";
import RingImage from "../../Assets/Images/intro-page-rings.svg";
import RingImageCenter from "../../Assets/Images/ring-image-center.svg";
import MetaTags from "react-meta-tags";

const styles = theme => ({
  rootBox: {
    backgroundColor: "#5773ff",
    width: "inherit",
    height: "inherit"
  },
  wellbeingText: {
    color: "#ffffff",
    fontFamily: "GibsonSemiBold",
    fontSize: 40
  },
  contentText: {
    color: "#ffffff",
    fontFamily: "GibsonRegular",
    fontSize: 16,
    textAlign: "center"
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: 300,
    height: 150,
    justifyContent: "space-around",
    lineHeight: 1.3,
    marginBottom: 90,
    marginTop: 25
  },
  imageBox: {
    display: "flex",
    flexDirection: "column"
  },
  centerImage: {
    position: "absolute",
    marginTop: 118,
    marginLeft: -23
  },
  skipText: {
    color: "#ffffff",
    fontFamily: "GibsonSemiBold",
    marginRight: 25,
    textDecoration: "none"
  },
  skipBox: {
    textAlign: "right",
    padding: "20px 0px"
  }
});

const WellbeingIntro = props => {
  const { classes } = props;
  return (
    <div className={classes.rootBox}>
      <MetaTags>
        <title>Intro</title>
        <meta name="Description" content="Praestan App intro page" />
      </MetaTags>
      <section className={classes.skipBox}>
        <Link className={classes.skipText} to="/skip">
          SKIP
        </Link>
      </section>
      <img
        src={RingImageCenter}
        alt="RingImageCenter"
        className={classes.centerImage}
      />
      <section className={classes.imageBox}>
        <img src={RingImage} alt="RingImage" />
      </section>

      <section className={classes.textBox}>
        <span className={classes.wellbeingText}>Wellbeing</span>
        <span className={classes.contentText}>
          This section assesses your wellbeing. Wellbeing is how well you are
          thriving in each of the 4 Worlds of your life: Internal, Physical,
          External and Spiritual.
        </span>
      </section>
      <Link to="/survey">
        <img src={StartButton} alt="StartButton" />
      </Link>
    </div>
  );
};

export default withStyles(styles)(WellbeingIntro);
