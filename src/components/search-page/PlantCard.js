import React from "react";
import { Wrapper, Paragraph, Image } from "../../theme/globalStyle";

const PlantCard = () => {
  return (
    <Wrapper flexDirection="column">
      <Image
        width="300"
        height="300"
        alt="leaves"
        src="https://cdn.pixabay.com/photo/2021/03/11/10/32/leaves-6086723_1280.jpg"
      ></Image>
      <Paragraph margin="20px 0 20px 0">Name</Paragraph>
    </Wrapper>
  );
};

export default PlantCard;
