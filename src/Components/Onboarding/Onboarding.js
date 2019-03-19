import React from "react";
import SwipableImageStepper from "../../Containers/SwipableImageStepper/SwipableImageStepper";
import OnboardingBottom from "../OnboardingBottom/OnboardingBottom";
import MetaTags from "react-meta-tags";

const Onboarding = () => {
  return (
    <section>
      <MetaTags>
        <title>Onboard</title>
        <meta name="Description" content="Praestan App Onboard page" />
      </MetaTags>
      <SwipableImageStepper />
      <OnboardingBottom />
    </section>
  );
};

export default Onboarding;
