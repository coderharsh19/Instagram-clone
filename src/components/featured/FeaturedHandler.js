import axios from "../../axios";
import requests from "../../ApiRequests";

let req;
let path = window.location.href.split("3000").pop();

/// SET DIFFFERENT CONTENT FOR DIFFERENT PAGES
export const featuredContentHandler = async (stateSetter) => {
  switch (path) {
    case "/":
      req = await axios.get(requests.netflixOriginals);
      stateSetter(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );

      break;

    case "/movies":
      req = await axios.get(requests.trendingMovies);
      stateSetter(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );

      break;

    case "/series":
      req = await axios.get(requests.trendingSeries);
      stateSetter(
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
