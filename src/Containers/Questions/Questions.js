import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import questionsData from "../../StaticData/QuestionsData";
import { Link } from "react-router-dom";
import BackButtonIcon from "../../Assets/Images/questions-back-icon.svg";
import InfoButtonIcon from "../../Assets/Images/questions-info-icon.svg";
import RightArrowGreyIcon from "../../Assets/Images/icons_gray_arrow_forward.svg";
import SurveyFinishDialog from "../../Components/SurveyFinishDialog/SurveyFinishDialog";
import Question from "../../Components/Question/Question";
import MetaTags from "react-meta-tags";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f2f5f7",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 65,
    backgroundColor: "white",
    width: "100%"
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  button: {
    margin: theme.spacing.unit,
    borderRadius: 26,
    height: 52,
    width: 343
  },
  buttonDisabled: {
    border: "1px solid #78849e"
  },
  input: {
    display: "none"
  },
  buttonLabelEnabled: {
    color: "white",
    fontFamily: "GibsonRegular",
    fontSize: 13
  },
  buttonLabelDisabled: {
    color: "#78849e",
    fontFamily: "GibsonRegular",
    fontSize: 13
  },
  slider: {
    padding: "22px 0px"
  },
  mobileStepper: {
    position: "static"
  },
  wellbeingText: {
    fontFamily: "GibsonSemiBold",
    fontSize: 16,
    color: "#454f63"
  },
  backButton: {
    marginLeft: 15
  },
  infoButton: {
    marginRight: 15
  },
  stepperButtonBox: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    height: 150
  },
  questionStepperButtonBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "inherit"
  }
});

class Questions extends React.Component {
  state = {
    activeStep: 0,
    sliderValue: 0,
    openDialog: false
  };
  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = event => {
    if (this.state.activeStep !== 0) {
      event.preventDefault();
      this.setState(prevState => ({
        activeStep: prevState.activeStep - 1
      }));
    }
  };

  handleSliderChange = (event, value) => {
    this.setState({ sliderValue: value });
  };
  handleDialogClose = () => {
    this.setState({ openDialog: false });
  };
  handleDialogOpen = () => {
    this.setState({ openDialog: true });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const maxSteps = questionsData.length;

    return (
      <div className={classes.root}>
        <MetaTags>
          <title>Survey</title>
          <meta name="Description" content="Praestan App Survey page" />
        </MetaTags>
        <section className={classes.header}>
          <Link
            to="/intro"
            onClick={this.handleBack}
            className={classes.backButton}
          >
            <img src={BackButtonIcon} alt="StartButton" />
          </Link>
          <span className={classes.wellbeingText}>Wellbeing</span>
          <Link to="/some-info" className={classes.infoButton}>
            <img src={InfoButtonIcon} alt="StartButton" />
          </Link>
        </section>
        <section className={classes.questionStepperButtonBox}>
          <Question
            questionText={questionsData[activeStep].questionText}
            value={this.state.sliderValue}
            handleSliderChange={this.handleSliderChange}
          />
          <section className={classes.stepperButtonBox}>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              classes={
                this.state.sliderValue === 0
                  ? {
                      label: classes.buttonLabelDisabled,
                      disabled: classes.buttonDisabled
                    }
                  : { label: classes.buttonLabelEnabled }
              }
              onClick={
                activeStep === maxSteps - 1
                  ? this.handleDialogOpen
                  : this.handleNext
              }
              disabled={this.state.sliderValue === 0}
            >
              {activeStep === maxSteps - 1 ? (
                <span>FINISH</span>
              ) : (
                <span>NEXT QUESTION</span>
              )}{" "}
              <img src={RightArrowGreyIcon} alt="RightArrow" />
            </Button>
          </section>
        </section>
        <SurveyFinishDialog
          onClose={this.handleDialogClose}
          open={this.state.openDialog}
        />
      </div>
    );
  }
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Questions);
