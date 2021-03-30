import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { Heading, Image, Wrapper, Button } from "../../theme/globalStyle";

const StyledImage = styled(Image)`
  margin: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledWrapper = styled(Wrapper)`
  /* display: ${(props) => (props.className === "" ? "block" : "none")}; */
`;

const StyledButton = styled(Button)`
  margin: 10px;
  padding: 10px;
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 30px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.large};
`;

const ImagePart = ({ images }) => {
  const [imagesKey, setImagesKey] = useState([]);
  const [toggles, setToggles] = useState({});

  const handleImagesKey = () => {
    let imagesKeyArray = [];
    let imagesKeyToggle = new Map();
    for (let key in images) {
      imagesKeyArray.push(key);
      imagesKeyToggle.set(key, false);
    }
    setImagesKey(imagesKeyArray);
    setToggles(imagesKeyToggle);
  };

  useEffect(() => {
    handleImagesKey();
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

  const handleDisplayClick = (key) => {
    toggles.forEach((value, toogleKey) => {
      if (toogleKey === key) {
        toggles.set(toogleKey, !value);
      } else {
        toggles.set(toogleKey, false);
      }
    });
    const newToggles = new Map(toggles);
    setToggles(newToggles);
  };

  return (
    <Wrapper>
      <Wrapper flexDirection="column">
        <Heading h2 margin="20px">
          Images
        </Heading>
        <Wrapper>
          {Object.entries(images).map(([key, value]) => {
            return key === "" ? <DisplayImages value={value} /> : null;
          })}
        </Wrapper>
        <Wrapper>
          {imagesKey.map((key, index) =>
            key === "" ? null : (
              <StyledButton
                onClick={(e) => handleDisplayClick(key)}
                key={index}
              >
                {key}
              </StyledButton>
            )
          )}
        </Wrapper>
        <Wrapper>
          {Object.entries(images).map(([key, value]) => {
            const ret =
              toggles.get(key) === true ? (
                <DisplayImages value={value} />
              ) : null;
            console.log(`=== ${key}: ${toggles.get(key)}, ret ${ret}`);
            return ret;
            // return <DisplayImages value={value} />;
          })}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ImagePart;
