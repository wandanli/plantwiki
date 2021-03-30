import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import {
  Heading,
  Image,
  Paragraph,
  Wrapper,
  Button,
} from "../../theme/globalStyle";

const StyledImage = styled(Image)`
  margin: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledWrapper = styled(Wrapper)`
  /* display: ${(props) => (props.className === "" ? "block" : "none")}; */
`;

const ImagePart = ({ images }) => {
  const [imagesKey, setImagesKey] = useState([]);

  const getImagesKey = () => {
    const imagesKeyArray = [];
    for (let key in images) {
      imagesKeyArray.push(key);
    }
    setImagesKey(imagesKeyArray);
  };

  useEffect(() => {
    getImagesKey();
  }, [images]);

  const DisplayImages = ({ value }) => {
    return (
      <Wrapper flexDirection="column">
        <StyledWrapper>
          {value.map((el) => (
            <StyledImage
              key={el.id}
              src={el.image_url}
              width="300"
              height="300"
            ></StyledImage>
          ))}
        </StyledWrapper>
      </Wrapper>
    );
  };

  return (
    <Wrapper>
      <Wrapper flexDirection="column">
        <Heading h2 margin="20px">
          Images
        </Heading>
        <Wrapper>
          {/* {Object.entries(images).map(([key, value]) => {
            if (key === "") {
              return <DisplayImages value={value} />;
            }
            return null;
          })} */}
          {Object.entries(images).map(([key, value]) => {
            return key === "" ? <DisplayImages value={value} /> : null;
          })}
        </Wrapper>
        <Wrapper>
          {imagesKey.map((key, index) => (
            <Button key={index}>{key}</Button>
          ))}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ImagePart;
