import React, {
  useState,
  useEffect,
  useRef,
  Fragment,
  useContext,
} from "react";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import PlantCard from "./PlantCard";
import { Wrapper, SpinnerImage } from "../../theme/globalStyle";
import PageButton from "./PageButton";
import LoadingSpinner from "../../images/Spinner-2s-200px.svg";
import { SearchContext } from "./SearchPage";
import InfiniteScroll from "react-infinite-scroll-component";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const { promiseInProgress } = usePromiseTracker();
  const [search, setSearch] = useContext(SearchContext);
  const [hasMore, setHasMore] = useState(true);
  const [prevY, setPrevY] = useState(0);
  // let lastPage, lastPageLink;

  const loadingRef = useRef();

  const handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;
    if (prevY > y) {
      getPlants(false);
    }
    setPrevY(y);
  };

  useEffect(() => {
    // Similar to componentDidMount()
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }
  });

  const getPlants = async (refresh) => {
    try {
      const pageToFetch = refresh === true ? 1 : page + 1;
      if (page != 0 && pageToFetch > lastPage) {
        setHasMore(false);
        return;
      }
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
          page: pageToFetch,
        },
      });
      if (refresh === true) {
        setPlants(plantsResponse.data.data);
      } else {
        setPlants([...plants, ...plantsResponse.data.data]);
      }

      setPage(pageToFetch);
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
    trackPromise(getPlants(true));
  }, [search]);

  const fetchMoreData = () => {
    if (page >= lastPage) {
      setHasMore({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    // setTimeout(() => {
    //   setPage(page + 1);
    //   getPlants();
    // }, 500);
  };

  return (
    <Fragment>
      {/* <InfiniteScroll
        dataLength={plants.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      > */}
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
      </Wrapper>
      <Wrapper ref={loadingRef}>
        {promiseInProgress === true ? (
          <SpinnerImage
            width="100"
            height="100"
            src={LoadingSpinner}
          ></SpinnerImage>
        ) : null}
      </Wrapper>
      {/* </InfiniteScroll> */}
    </Fragment>
  );
};

export default Plants;
