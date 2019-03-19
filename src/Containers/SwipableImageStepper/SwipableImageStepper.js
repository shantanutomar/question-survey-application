import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import SwipableImageStepperData from "../../StaticData/SwipableImageStepperData";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
    marginBottom: "50px"
  },
  mobileStepperRoot: {
    justifyContent: "center",
    backgroundColor: "white"
  },
  AutoPlaySwipeableViewsStyle: {
    height: "460px"
  },
  titleStyle: {
    fontFamily: "GibsonSemiBold",
    color: "#454f63",
    fontSize: "40px"
  },
  descriptionStyle: {
    fontFamily: "GibsonRegular",
    color: "grey",
    fontSize: "16px"
  },
  dot: {
    margin: "4px"
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = SwipableImageStepperData.length;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          className={classes.AutoPlaySwipeableViewsStyle}
        >
          {SwipableImageStepperData.map((step, index) => (
            <div key={step.title}>
              <section>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.image}
                    alt={step.title}
                  />
                ) : null}
              </section>
              <span className={classes.titleStyle}>{step.title}</span>
              <p className={classes.descriptionStyle}>{step.description}</p>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          variant="dots"
          position="static"
          activeStep={activeStep}
          classes={{ root: classes.mobileStepperRoot, dot: classes.dot }}
        />
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
