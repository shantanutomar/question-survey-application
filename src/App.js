import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Onboarding = React.lazy(() =>
  import("./Components/Onboarding/Onboarding")
);
const Login = React.lazy(() => import("./Containers/Login/Login"));
const SignUp = React.lazy(() => import("./Containers/SignUp/SignUp"));
const LegalInstructions = React.lazy(() =>
  import("./Components/LegalInstructions/LegalInstructions")
);
const WellbeingIntro = React.lazy(() =>
  import("./Components/WellbeingIntro/WellbeingIntro")
);
const Questions = React.lazy(() => import("./Containers/Questions/Questions"));

// const SliderTrackSummary = React.lazy(() =>
//   import("./Components/SliderTrackSummary/SliderTrackSummary")
// );

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Suspense fallback={<div>Page is loading...</div>}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Onboarding {...props} />}
              />
              <Route path="/login" render={props => <Login {...props} />} />
              <Route path="/sign-up" render={props => <SignUp {...props} />} />
              <Route
                path="/privacy-policy"
                render={props => <LegalInstructions title="Privacy policy" />}
              />
              <Route
                path="/terms-of-use"
                render={props => <LegalInstructions title="Terms of use" />}
              />
              <Route
                path="/intro"
                render={props => <WellbeingIntro {...props} />}
              />
              <Route
                path="/survey"
                render={props => <Questions {...props} />}
              />
              {/* {<Route component={SliderTrackSummary} />} */}
            </Switch>
          </Router>
        </React.Suspense>
      </div>
    );
  }
}
export default App;
