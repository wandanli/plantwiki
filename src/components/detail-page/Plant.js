import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import {
  Wrapper,
  SpinnerImage,
  Container,
  FullScreenWrapper,
  MaxWidthBreakpoints,
} from "../../theme/globalStyle";
import LoadingSpinner from "../../images/Spinner-2s-200px.svg";
import TextCard from "./TextCard";
import ImagePart from "./ImagePart";
import Specifications from "./Specifications";
import Growth from "./Growth";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

const StyledWrapper = styled(Wrapper)`
  max-width: 880px;
`;

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 10px;
  right: 40px;
  width: 60px;
  height: 60px;
  padding-top: 8px;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 30px;
  text-align: center;
  font-size: 4rem;
  color: ${(props) => props.theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  @media ${MaxWidthBreakpoints.small} {
    right: 20px;
    width: 40px;
    height: 40px;
    padding-top: 4px;
    font-size: 3rem;
  } ;
`;

const Plant = () => {
  const [plant, setPlant] = useState({});
  const [images, setImages] = useState({});
  const [specs, setSpecs] = useState({});
  const [growth, setGrowth] = useState({});
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
      setGrowth(plantResponse.data.data.main_species.growth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    trackPromise(getPlant());
  }, []);

  return (
    <Fragment>
      <Wrapper>
        {promiseInProgress === true ? (
          <FullScreenWrapper>
            <SpinnerImage
              width="100"
              height="100"
              src={LoadingSpinner}
            ></SpinnerImage>
          </FullScreenWrapper>
        ) : null}
      </Wrapper>
      <Container hide={promiseInProgress}>
        <StyledWrapper margin="20px auto">
          <TextCard
            plantField={plant.common_name}
            title="Common Name"
          ></TextCard>
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
        <Growth growth={growth} />
      </Container>

      <StyledLink to={`/`}>
        <TiArrowBack />
      </StyledLink>
    </Fragment>
  );
};

export default Plant;
