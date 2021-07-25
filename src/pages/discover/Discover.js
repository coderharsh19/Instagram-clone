import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";

import axios from "../../axios";
import "./discover.scss";

const Discover = () => {
  const { id, type } = useParams();
  const location = useLocation();
  const genre = location.state.genre;
  const random = Math.floor(Math.random() * 30);

  const [genreList, setGenreList] = useState([]);
  useEffect(() => {
    const genreHandler = async () => {
      const req = await axios.get(
        `/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&with_genre=${id}&page=${random}&language=en-US`
      );
      setGenreList(req.data.results);
      return req;
    };

    genreHandler();
  }, [id, type, random]);
  return (
    <>
      <Header />
      <div className="discover">
        <div className="container">
          <h3>{genre.name}</h3>
          {genreList.map((content) => {
            return (
              <>
                <div
                  className="imageDiv"
                  style={{
                    backgroundImage: `url(${
                      process.env.REACT_APP_BACKDROP_IMAGE_URL +
                      content.backdrop_path
                    }
                    )`,
                  }}
                >
                  <h1>{content.title}</h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Discover;
