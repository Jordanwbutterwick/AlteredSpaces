import React from "react";
import HeroSection2 from "components/HeroSection2";
import CarouselSection from "components/CarouselSection";
import CtaSection from "components/CtaSection";

function GalleryPage(props) {
  return (
    <>
      <HeroSection2
        bg="white"
        textColor="dark"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="We can do it all"
        subtitle="Bathrooms, Kitchens, Basements, Bedrooms, Decks, Fences, Patios, we can do it all and are happy to work with you to get any room in your house "
      />
      <CarouselSection
        items={[
          {
            image: "/Assets/Photos/basement.jpg",
            caption: "Basements",
          },
          {
            image: "/Assets/Photos/bathroom.jpg",
            caption: "Bathrooms",
          },
          {
            image: "/Assets/Photos/bathroom2.jpg",
            caption: "Bathrooms",
          },
          {
            image: "/Assets/Photos/Bathroom3.jpg",
            caption: "Bathrooms",
          },
        ]}
      />
      <CtaSection
        bg="primary"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Contact us Today!"
        buttonColor="light"
        buttonPath="/contact"
      />
    </>
  );
}

export default GalleryPage;
