import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import {
  Wrapper,
  Image,
  Container,
  FullScreenWrapper,
} from "../../theme/globalStyle";
import LoadingSpinner from "../../images/Spinner-2s-200px.svg";
import TextCard from "./TextCard";
import ImagePart from "./ImagePart";
import Specifications from "./Specifications";

const StyledWrapper = styled(Wrapper)`
  max-width: 880px;
`;

const Plant = () => {
  const [plant, setPlant] = useState({});
  const [images, setImages] = useState({});
  const [specs, setSpecs] = useState({});
  const { name } = useParams();
  const { promiseInProgress } = usePromiseTracker();
  const getPlant = async () => {
    try {
      const JWTResponse = await axios.get(
        "https://scandalous-classic-wolverine.glitch.me"
      );
      const JWT = JWTResponse.data.token;
      const baseUrl = `https://trefle.io/api/v1/plants/${name}`;
      const plantResponse = await axios.get(baseUrl, {
        params: {
          token: JWT,
        },
      });
      setPlant(plantResponse.data.data.main_species);
      setImages(plantResponse.data.data.main_species.images);
      setSpecs(plantResponse.data.data.main_species.specifications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    trackPromise(getPlant());
  }, []);

  return (
    <Container>
      <Wrapper>
        {promiseInProgress === true ? (
          <FullScreenWrapper>
            <Image width="100" height="100" src={LoadingSpinner}></Image>
          </FullScreenWrapper>
        ) : null}
      </Wrapper>
      <StyledWrapper margin="20px auto">
        <TextCard plantField={plant.common_name} title="Common Name"></TextCard>
        <TextCard plantField={plant.slug} title="Slug"></TextCard>
        <TextCard
          plantField={plant.scientific_name}
          title="Scientific Name"
        ></TextCard>
        <TextCard plantField={plant.genus} title="Genus"></TextCard>
        <TextCard plantField={plant.family} title="Family"></TextCard>
        <TextCard
          plantField={plant.observations}
          title="Observations"
        ></TextCard>
        <TextCard
          plantField={plant.vegetable ? "true" : "false"}
          title="Vegetable"
        ></TextCard>
        <TextCard
          plantField={
            plant.edible
              ? plant.edible_part === null
                ? "true"
                : plant.edible_part.join(", ")
              : "false"
          }
          title="Edible"
        ></TextCard>
      </StyledWrapper>
      <ImagePart images={images} />
      <Specifications specs={specs} />
    </Container>
  );
};

export default Plant;
