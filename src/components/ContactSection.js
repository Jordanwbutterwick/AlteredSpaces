import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";

function ContactSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container
        style={{
          maxWidth: "850px",
        }}
      >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <p>Call us anytime for a free quote. We can help with planning</p>
        <ul>
          <li>
            <p>403-510-4854</p>
          </li>
          <li>
            <p>403-988-6524</p>
          </li>
        </ul>
      </Container>
    </Section>
  );
}

export default ContactSection;
