import "./featured.scss";
import { GrPlayFill } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../ApiRequests";

import { truncate } from "../../utils/Truncate.";

const Featured = ({ genreList, type }) => {
  const [showGenre, setShowGenre] = useState(false);
  const [featuredContent, setFeaturedContent] = useState([]);

  const genreHandler = () => {
    setShowGenre(!showGenre);
  };

  useEffect(() => {
    let req;
    let path = window.location.href.split("app").pop();

    /// SET DIFFFERENT CONTENT FOR DIFFERENT PAGES
    const featuredContentHandler = async () => {
      switch (path) {
        case "/browse":
          req = await axios.get(requests.netflixOriginals);
          setFeaturedContent(
            req.data.results[
              Math.floor(Math.random() * req.data.results.length - 1)
            ]
          );

          break;

        case "/movies":
          req = await axios.get(requests.trendingMovies);
          setFeaturedContent(
            req.data.results[
              Math.floor(Math.random() * req.data.results.length - 1)
            ]
          );

          break;

        case "/series":
          req = await axios.get(requests.trendingSeries);
          setFeaturedContent(
            req.data.results[
              Math.floor(Math.random() * req.data.results.length - 1)
            ]
          );

          break;
        default:
          console.log("No path for that route");
      }
      return req;
    };

    featuredContentHandler();
  }, []);

  console.log(featuredContent);

  return (
    <div className="featured">
      {/*   CONTENT GENRE SELECTOR */}
      {type && (
        <div className="featured_genre" onClick={genreHandler}>
          <span>{type === "movie" ? "Movies" : "Tv Shows"}</span>
          <div className="genre">
            <span>Genres</span>
            <RiArrowDownSFill
              className="genre_icon"
              style={{ transform: showGenre ? "rotate(180deg)" : "" }}
            />
          </div>

          {/*   CONTENT LIST DISPLAY */}
          <div
            className="genre_items"
            style={{ display: showGenre ? "flex" : "none" }}
          >
            <ul>
              {genreList.slice(0, 9).map((genre, index) => {
                return (
                  <li key={genre.id}>
                    <Link
                      to={{
                        pathname: `/discover/${type}/${genre.id}`,
                        state: { genre },
                      }}
                    >
                      {genre.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {genreList.slice(9, genreList.length - 1).map((genre, index) => {
                return (
                  <li key={genre.id}>
                    <Link
                      to={{
                        pathname: `/discover/${type}/${genre.id}`,
                        state: { genre },
                      }}
                    >
                      {genre.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/*   FEATURED MOVIE BACKGROUND POSTER */}
      <div className="featured_bg_wrapper">
        <img
          className="herobg"
          src={
            process.env.REACT_APP_BACKDROP_IMAGE_URL +
            featuredContent.backdrop_path
          }
          alt="featured-movie"
        />
        <div className="herobg_vignette"></div>
      </div>

      {/* FEATURED MOVIE INFO SECTION */}
      <div className="featured_content">
        <h1>{featuredContent.name || featuredContent.title}</h1>
        <h3>{truncate(featuredContent.overview, 200)}</h3>
        <div className="featured_links_wrapper">
          <button className="btn_primary">
            <GrPlayFill className="featured_icon" />
            <span>Play</span>
          </button>
          <button className="btn_info">
            <AiOutlineInfoCircle className="featured_icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
