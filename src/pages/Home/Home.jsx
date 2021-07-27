import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import List from "../../components/lists/List";

import "./home.scss";
import requests from "../../ApiRequests";

const Home = () => {
  return (
    <>
      <div className="home">
        <Featured type="" />
        <List
          title="Top-rated Movies"
          fetchedUrl={requests.netflixOriginals}
          isPoster
        />
        <List title="Action Movies" fetchedUrl={requests.actionMovies} />
        <List title="Comedy Tv" fetchedUrl={requests.comedyTv} />
        <List title="Top-rated Tv" fetchedUrl={requests.topRatedTv} isPoster />

        <List title="Animation Movies" fetchedUrl={requests.animationMovies} />
        <List title="Documentary Tv" fetchedUrl={requests.trendingSeries} />
      </div>
    </>
  );
};

export default Home;
