import React from "react";
import styled from "styled-components";
import { Wrapper, Paragraph, Image, Heading } from "../../theme/globalStyle";
import backgroundImg from "../../images/card-background.svg";
import fallbackImg from "../../images/fallbackImg.png";
import { Link } from "react-router-dom";

const StyledWrapper = styled(Wrapper)`
  position: relative;
  height: 480px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  background-image: url("${backgroundImg}");
  background-position: bottom;
  background-repeat: no-repeat;
`;

const StyledLink = styled(Link)`
  color: white;
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: bolder;
  text-decoration: none;
`;

const StyledImage = styled(Image)`
  border-radius: 10px 10px 0 0;
  box-shadow: rgba(6, 180, 154, 0.4) 0px 5px, rgba(6, 180, 154, 0.3) 0px 10px,
    rgba(6, 180, 154, 0.2) 0px 15px, rgba(6, 180, 154, 0.1) 0px 20px,
    rgba(6, 180, 154, 0.05) 0px 25px;
`;

const PlantCard = ({ name, image, family, genus, link }) => {
  link = link.split("/")[4];
  return (
    <StyledWrapper
      margin="40px 20px"
      flexDirection="column"
      flexAI="flex-start"
      flexJC="flex-start"
    >
      <StyledImage
        width="300"
        height="300"
        alt={name}
        src={image}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImg;
        }}
      ></StyledImage>
      <Wrapper margin="20px 20px" flexDirection="column" flexAI="flex-start">
        <Heading h4 margin="0 0 16px 0">
          {name}
        </Heading>
        <Paragraph margin="0 0 8px 0">Family: {family}</Paragraph>
        <Paragraph margin="0 0 8px 0">Genus: {genus}</Paragraph>
        <StyledLink to={`/plant/${link}`}>Learn More</StyledLink>
      </Wrapper>
    </StyledWrapper>
  );
};

export default PlantCard;
