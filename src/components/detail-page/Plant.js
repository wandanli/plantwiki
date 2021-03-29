import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import { Wrapper, Image } from "../../theme/globalStyle";
import LoadingSpinner from "../../images/Spinner-2s-200px.svg";

const Plant = () => {
  let images;
  const [imagesArray, setImagesArray] = useState([]);
  const [plant, setPlant] = useState({});
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
      images = plantResponse.data.data.main_species.images;
      getImages();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    trackPromise(getPlant());
  }, []);

  const getImages = () => {
    for (let key in images) {
      images[key].forEach((element) => {
        setImagesArray((imagesArray) => [...imagesArray, element.image_url]);
      });
    }
    // console.log(imagesArray);
  };

  return (
    <Fragment>
      <Wrapper>
        {promiseInProgress === true ? (
          <Image width="100" height="100" src={LoadingSpinner}></Image>
        ) : null}
      </Wrapper>
      <Wrapper>
        {imagesArray.map((value, index) => (
          <Image key={index} width="300" height="300" src={value}></Image>
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default Plant;
