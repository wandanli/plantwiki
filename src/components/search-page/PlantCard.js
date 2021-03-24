import React from "react";
import styled from "styled-components";
import { Wrapper, Paragraph, Image } from "../../theme/globalStyle";

const PlantCardWrapper = styled(Wrapper)`
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

const PlantCard = ({ name, image, family, genus, link }) => {
  const familyLastWordIndex = family.lastIndexOf(" ");
  family = family.substring(0, familyLastWordIndex);
  return (
    <PlantCardWrapper flexDirection="column">
      <Image width="300" height="300" alt={name} src={image}></Image>
      <Paragraph margin="20px 0 20px 0">Common Name: {name}</Paragraph>
      <Paragraph margin="20px 0 20px 0">Family: {family}</Paragraph>
      <Paragraph margin="20px 0 20px 0">Genus: {genus}</Paragraph>
      <a href={link}>Learn More</a>
    </PlantCardWrapper>
  );
};

export default PlantCard;
