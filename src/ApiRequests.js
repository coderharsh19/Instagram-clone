const random = Math.floor(Math.random() * 30);

const requests = {
  //GENRE
  movieGenreList: `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  tvGenreList: `/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,

  //// MOVIES
  trendingMovies: `/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  topRatedMovie: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&include_video=false&page=${random}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&include_video=false&page=${random}&with_genre=28&language=en-US`,
  comedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genre=35&page=${random}&language=en-US`,
  horrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genre=27&language=en-US`,
  romanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genre=10749&language=en-US`,
  documentaryMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genre=99&language=en-US`,
  animationMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genre=12&page=${random}&language=en-US`,
  crimeMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genre=80&language=en-US`,
  dramaMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=34&with_genre=18&language=en-US`,
  mysteryMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genre=9648&language=en-US`,

  //List Movie

  nowPlaying: `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,

  upComingMovies: `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,

  //// TV SERIES
  trendingSeries: `/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${random}&with_networks=213`,
  latestTv: `/tv/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  topRatedTv: `/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${random}&language=en-US`,
  actionTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genre=10759&language=en-US`,
  animationTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genre=16&language=en-US`,
  comedyTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_video=false&page=${random}&with_genre=35&language=en-US`,
  crimeTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genre=80&language=en-US`,
  documentaryTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_video=false&page=${random}&with_genre=99&language=en-US`,
  dramaTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genre=18&language=en-US`,
  mysteryTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genre=9648&language=en-US`,
  realityTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genre=10764&language=en-US`,
  fantasyTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genre=10765&language=en-US`,

  ///List Tv

  popularTv: `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  onAir: `/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${random}`,
};

export default requests;
