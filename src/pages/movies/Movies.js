import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
// import List from "../../components/lists/List";
import Featured from "../../components/featured/Featured";
import List from "../../components/lists/List";

import axios from "../../axios";
import requests from "../../ApiRequests";
import "./movies.scss";

const Movies = () => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const getGenre = async () => {
      const req = await axios.get(requests.movieGenreList);
      setGenreList(req.data.genres);
      return req;
    };

    getGenre();
  }, []);

  return (
    <>
      <div className="movies">
        <Featured genreList={genreList} type="movie" />
        <List
          title="Upcoming Movies"
          fetchedUrl={requests.upComingMovies}
          isPoster
        />
        <List title="Trending now" fetchedUrl={requests.trendingMovies} />
        <List
          title="Top-rated Movie"
          fetchedUrl={requests.topRatedMovie}
          isPoster
        />
        <List title="Drama" fetchedUrl={requests.dramaMovies} />
      </div>
    </>
  );
};

export default Movies;
