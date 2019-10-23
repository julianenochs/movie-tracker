export const fetchPopularMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5be60afe8a002cff163376db69b0add0&language=en-US&page=1');
  const popularMovies = await response.json();
  return popularMovies.results;
}