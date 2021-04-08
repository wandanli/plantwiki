import React, {
  useState,
  useEffect,
  Fragment,
  useContext,
  useRef,
} from "react";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import PlantCard from "./PlantCard";
import { Wrapper, SpinnerImage } from "../../theme/globalStyle";
import LoadingSpinner from "../../images/Spinner-2s-200px.svg";
import { SearchContext } from "./SearchPage";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const { promiseInProgress } = usePromiseTracker();
  const [search, setSearch] = useContext(SearchContext);
  const loader = useRef(null);
  // let lastPage, lastPageLink;

  const getPlants = async () => {
    try {
      const JWTResponse = await axios.get(
        "https://scandalous-classic-wolverine.glitch.me"
      );
      const JWT = JWTResponse.data.token;
      const baseUrl = `${
        search
          ? "https://trefle.io/api/v1/plants/search"
          : "https://trefle.io/api/v1/plants"
      }`;
      const plantsResponse = await axios.get(baseUrl, {
        params: {
          q: search,
          token: JWT,
          page: page,
        },
      });
      setPlants(...plants, plantsResponse.data.data);
      const lastPageLink = plantsResponse.data.links.last;
      setLastPage(
        parseInt(
          lastPageLink.slice(
            lastPageLink.indexOf("=") + 1,
            lastPageLink.indexOf("&")
          ),
          10
        )
      );
      console.log(
        lastPage,
        lastPageLink.indexOf("="),
        lastPageLink.indexOf("&")
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    trackPromise(getPlants());
  }, [search, page]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  return (
    <Fragment>
      <Wrapper>
        {promiseInProgress === true ? (
          <SpinnerImage
            width="100"
            height="100"
            src={LoadingSpinner}
          ></SpinnerImage>
        ) : null}
      </Wrapper>
      <Wrapper margin="40px 10px 20px 10px">
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

        <div ref={loader}>
          <h2>Load More</h2>
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Plants;
