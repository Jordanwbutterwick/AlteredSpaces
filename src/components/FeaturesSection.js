import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "components/FeaturesSection.scss";

function FeaturesSection(props) {
  const items = [
    {
      title: "Kitchens",
      description:
        "We've built and renovated dozens of kitchens over the years so you can trust we know how to do it right.",
      image: "/Assets/Photos/kitchen.jpg",
    },
    {
      title: "Bathrooms",
      description: "Plumbing is where we got started after all!",
      image: "/Assets/Photos/bathroom.jpg",
    },
    {
      title: "Backyards",
      description:
        "Fences, decks, patios, covered and uncovered, we've seen it all. Nothing is too big or too small.",
      image: "/Assets/Photos/backyard.webp",
    },
    {
      title: "Beyond",
      description:
        "We can handle just about anything you can throw at us. Give us a call and let's see what we can do for you.",
      image: "/Assets/Photos/PoolTable.jpg",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <div className="FeaturesSection__features">
          {items.map((item, index) => (
            <Row className="align-items-center" key={index}>
              <Col xs={12} lg={6}>
                <SectionHeader
                  title={item.title}
                  subtitle={item.description}
                  spaced={true}
                  size={3}
                  className="text-center text-lg-left"
                />
              </Col>
              <Col>
                <figure className="FeaturesSection__image-container">
                  <Image src={item.image} alt={item.title} fluid={true} />
                </figure>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
