import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
// import List from "../../components/lists/List";
import Featured from "../../components/featured/Featured";
import List from "../../components/lists/List";

import axios from "../../axios";
import requests from "../../ApiRequests";

import "./series.scss";

const Series = () => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const getGenre = async () => {
      const req = await axios.get(requests.tvGenreList);
      setGenreList(req.data.genres);
    };

    getGenre();
  }, []);

  return (
    <>
      <Header />

      <div className="series">
        <Featured genreList={genreList} type="tv" />
        <List title="On Air Now" fetchedUrl={requests.onAir} />
        <List title="Popular Tv" fetchedUrl={requests.popularTv} isPoster />
        <List
          title="Netflix Originals"
          fetchedUrl={requests.netflixOriginals}
        />
        <List title="Top Rated Tv" fetchedUrl={requests.topRatedTv} isPoster />
      </div>
    </>
  );
};

export default Series;
