import React from "react";
import Slider from "@material-ui/lab/Slider";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import questionLogo from "../../Assets/Images/question-logo.svg";
import "./Question.css";

const styles = theme => ({
  card: {
    width: "95%",
    marginTop: 20,
    minHeight: 430,
    maxWidth: 500,
    borderRadius: 15
  },
  questionText: {
    fontFamily: "GibsonSemiBold",
    fontSize: 28,
    color: "#454f63",
    margin: "15px 0px 85px 0px",
    textAlign: "left"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    margin: 10
  },
  imageStyle: {
    alignSelf: "flex-start",
    margin: "15px 0px"
  },
  sliderText: {
    fontFamily: "GibsonRegular",
    color: "#78849e",
    fontSize: 12
  },
  sliderTextBox: {
    display: "flex",
    justifyContent: "space-between",
    margin: "25px 0px"
  },
  divider: {
    width: "100%",
    color: "#d4d8e0"
  },
  "@media only screen and (min-device-width : 768px) and (max-device-width : 1024px)": {
    card: {
      minHeight: 600,
      maxWidth: 700
    },
    divider: {
      marginTop: 140
    }
  }
});
const Question = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <img
          src={questionLogo}
          alt="questionLogo"
          className={classes.imageStyle}
        />
        <span className={classes.questionText}>{props.questionText}</span>
        <hr className={classes.divider} />
        <section className={classes.sliderTextBox}>
          <span className={classes.sliderText}>STRUGGLING</span>
          <span className={classes.sliderText}>{props.value.toFixed(1)}</span>
          <span className={classes.sliderText}>THRIVING</span>
        </section>
        <Slider
          classes={
            props.value > 0
              ? {
                  container: classes.slider,
                  track: "slider-active",
                  thumb: "thumbStyle"
                }
              : {
                  container: classes.slider,
                  track: "slider-not-active",
                  thumb: "thumbStyle"
                }
          }
          value={props.value}
          aria-labelledby="label"
          onChange={props.handleSliderChange}
          min={0}
          max={10}
        />
      </CardContent>
    </Card>
  );
};
export default withStyles(styles)(Question);
