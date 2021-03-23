import React, { useEffect } from "react";
import axios from "axios";

const Plants = () => {
  const fetchData = async () => {
    try {
      const tokenResponse = await axios.get(
        "https://scandalous-classic-wolverine.glitch.me"
      );
      const token = tokenResponse.data.token;
      const url = `https://trefle.io/api/v1/species?token=${token}`;
      const speciesResponse = await axios.get(url);
      console.log(speciesResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default Plants;
