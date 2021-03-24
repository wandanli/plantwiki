import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import PlantCard from "./PlantCard";
import { Wrapper } from "../../theme/globalStyle";
import PageButton from "./PageButton";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  //   const [specie, setSpecie] = useState({});
  const getPlants = async () => {
    try {
      const JWTResponse = await axios.get(
        "https://scandalous-classic-wolverine.glitch.me"
      );
      const JWT = JWTResponse.data.token;
      const baseUrl = "https://trefle.io/api/v1/plants";
      const plantsResponse = await axios.get(baseUrl, {
        params: {
          token: JWT,
          page: 3,
        },
      });
      setPlants(plantsResponse.data.data);
      console.log(plants);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <Fragment>
      <Wrapper>
        {plants.map((plant, index) => (
          <PlantCard
            key={index}
            name={plant.common_name}
            image={plant.image_url}
            family={plant.family}
            genus={plant.genus}
            link={plant.links.plant}
          />
        ))}
      </Wrapper>
      <PageButton />
    </Fragment>
  );
};

export default Plants;
