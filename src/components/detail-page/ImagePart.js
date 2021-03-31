import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Heading,
  Image,
  Wrapper,
  Button,
  Emoji,
} from "../../theme/globalStyle";
import fallbackImg from "../../images/fallbackImg.png";

const StyledHeading = styled(Heading)`
  color: ${(props) => props.theme.color.secondary};
`;

const StyledImage = styled(Image)`
  margin: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledButton = styled(Button)`
  margin: 10px;
  padding: 10px;
  width: 100px;
  height: 40px;
  background-color: ${(props) => (props.selected ? "#FF9000" : "#06B49A")};
  border-radius: 30px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.large};
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.color.secondary};
  }
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
        <Wrapper>
          {value.map((el) => (
            <StyledImage
              key={el.id}
              src={el.image_url}
              width="300"
              height="300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImg;
              }}
            ></StyledImage>
          ))}
        </Wrapper>
      </Wrapper>
    );
  };

  const handleDisplayClick = (key) => {
    toggles.forEach((value, toggleKey) => {
      if (toggleKey === key) {
        toggles.set(toggleKey, !value);
      } else {
        toggles.set(toggleKey, false);
      }
    });
    const newToggles = new Map(toggles);
    setToggles(newToggles);
  };

  return (
    <Wrapper flexDirection="column">
      <StyledHeading h1 margin="40px">
        <Emoji aria-label="Sparkles"> ✨ </Emoji> Images{" "}
        <Emoji aria-label="Sparkles"> ✨ </Emoji>
      </StyledHeading>
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
              selected={toggles.get(key)}
            >
              {key}
            </StyledButton>
          )
        )}
      </Wrapper>
      <Wrapper>
        {Object.entries(images).map(([key, value]) =>
          toggles.get(key) === true ? <DisplayImages value={value} /> : null
        )}
      </Wrapper>
    </Wrapper>
  );
};

export default ImagePart;
