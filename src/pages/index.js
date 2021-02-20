import React from "react";
import HeroSection from "components/HeroSection";
import HeroSection2 from "components/HeroSection2";
import FeaturesSection from "components/FeaturesSection";
import CtaSection from "components/CtaSection";

function IndexPage(props) {
  return (
    <>
      <HeroSection
        bg="primary"
        textColor="light"
        size="lg"
        bgImage="/Assets/Photos/basement.jpg"
        bgImageOpacity={0.3}
        title="Altered Space"
        subtitle="Professional Contractors in Calgary since 1998"
        buttonText="Contact Us"
        buttonColor="light"
        buttonPath="/contact"
      />
      <HeroSection2
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Servicing Calgary for 20+ years"
        subtitle="We've been renovating custom homes in Calgary and surrounding area for a long time. You can trust us to execute your vision the right way."
      />
      <FeaturesSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="What do we do?"
        subtitle="Our owner-operator is a Journey-man, Plumber - Gas Fitter and has specialized in home renovations for more than 20 years. We can do just about any renovation job that's out there. We have experience building bars, bathrooms, bedrooms, basements, backyards and more. Let us know what you're planning and we'll give you actionable feedback on what we can do."
      />
      <CtaSection
        bg="primary"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle="Call for a free quote and advice"
        buttonText="Give us a Call"
        buttonColor="light"
        buttonPath="/contact"
      />
    </>
  );
}

export default IndexPage;
