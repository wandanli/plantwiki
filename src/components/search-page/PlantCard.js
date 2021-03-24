import React from "react";
import { Wrapper, Paragraph, Image } from "../../theme/globalStyle";

const PlantCard = ({ name, image, family, genus, link }) => {
  const familyLastWordIndex = family.lastIndexOf(" ");
  family = family.substring(0, familyLastWordIndex);
  return (
    <Wrapper flexDirection="column">
      <Image width="300" height="300" alt={name} src={image}></Image>
      <Paragraph margin="20px 0 20px 0">Common Name: {name}</Paragraph>
      <Paragraph margin="20px 0 20px 0">Family: {family}</Paragraph>
      <Paragraph margin="20px 0 20px 0">Genus: {genus}</Paragraph>
      <Paragraph margin="20px 0 20px 0">Learn More:{link}</Paragraph>
    </Wrapper>
  );
};

export default PlantCard;
