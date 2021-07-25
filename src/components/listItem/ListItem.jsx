import { useState } from "react";
import "./listItem.scss";
// import { IoMdAdd } from "react-icons/io";
// import { MdPlayArrow } from "react-icons/md";
// import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const ListItem = ({ content, isPoster }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  const mouseEnter = () => {
    setIsHovered(true);
  };

  const mouseExit = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="listItem"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseExit}
    >
      {content.backdrop_path && content.poster_path && (
        <img
          src={
            isPoster
              ? process.env.REACT_APP_BACKDROP_IMAGE_URL + content.poster_path
              : process.env.REACT_APP_BACKDROP_IMAGE_URL + content.backdrop_path
          }
          alt="movie"
        />
      )}
      {isHovered && (
        <div className="vignette">
          <div className="container">
            <h3 style={{ fontSize: isPoster ? "2.2rem" : "1.6rem" }}>
              {content.name || content.title}
            </h3>

            <h2>
              Rating: <span>{content.vote_average}</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
