import { useRef, useState, useEffect } from "react";
import "./list.scss";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import axios from "../../axios";

import ListItem from "../listItem/ListItem";

const List = ({ title, fetchedUrl, isPoster }) => {
  const listRef = useRef();
  const [slideIndex, setSlideIndex] = useState(0);
  const [contentArray, setContentArray] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const req = await axios.get(fetchedUrl);
      setContentArray(req.data.results);
    };

    fetchContent();
  }, [fetchedUrl]);

  const listScroll = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 60;

    if (direction === "left" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
      listRef.current.style.transform = `translateX(${680 + distance}px)`;
    }

    if (direction === "right" && slideIndex < 5) {
      setSlideIndex(slideIndex + 1);

      listRef.current.style.transform = `translateX( ${-680 + distance}px)`;
    }
  };

  return (
    <div className="list" style={{ height: isPoster ? "600px" : "260px" }}>
      <h3>{title}</h3>
      <div className="list_container">
        {slideIndex > 0 && (
          <MdKeyboardArrowLeft
            className="list_icon_left"
            onClick={() => listScroll("left")}
          />
        )}

        <div className="list_items" ref={listRef}>
          {contentArray.slice(0, 16).map((content) => {
            return (
              <ListItem
                key={content.id}
                content={content}
                isPoster={isPoster}
              />
            );
          })}
        </div>

        {slideIndex < 5 && (
          <MdKeyboardArrowRight
            className="list_icon_right"
            onClick={() => listScroll("right")}
          />
        )}
      </div>
    </div>
  );
};

export default List;
