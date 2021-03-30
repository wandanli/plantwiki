import React from "react";
import styled from "styled-components";
import { Heading, Image, Paragraph, Wrapper } from "../../theme/globalStyle";

const StyledImage = styled(Image)`
  margin: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const ImagePart = ({ images }) => {
  return (
    <Paragraph>
      {Object.entries(images).map(([key, value]) => (
        <Wrapper id={key} flexDirection="column">
          <Heading h2 margin="20px">
            Images {key === "" ? "" : `: ${key}`}
          </Heading>
          <Wrapper>
            {value.map((el) => (
              <StyledImage
                key={el.id}
                src={el.image_url}
                width="300"
                height="300"
              ></StyledImage>
            ))}
          </Wrapper>
        </Wrapper>
      ))}
    </Paragraph>
  );
};

export default ImagePart;
