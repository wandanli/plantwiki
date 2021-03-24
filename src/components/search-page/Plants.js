import React, { useState, useEffect } from "react";
import axios from "axios";
import PlantCard from "./PlantCard";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  //   const [specie, setSpecie] = useState({});
  const getPlants = async () => {
    try {
      const JWTResponse = await axios.get(
        "https://scandalous-classic-wolverine.glitch.me"
      );
      const JWT = JWTResponse.data.token;
      const baseUrl = `https://trefle.io/api/v1/plants?token=${JWT}`;
      const plantsResponse = await axios.get(baseUrl);
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
    <div>
      {plants.map((plant, index) => (
        <PlantCard
          key={index}
          name={plant.common_name}
          image={plant.image_url}
          family={plant.family_common_name}
          genus={plant.genus}
          link={plant.links.plant}
        />
      ))}
    </div>
  );
};

export default Plants;
