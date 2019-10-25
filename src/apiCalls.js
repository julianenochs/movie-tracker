export const fetchPopularMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5be60afe8a002cff163376db69b0add0&language=en-US&page=1');
  const popularMovies = await response.json();
  return popularMovies.results;
}

export const login = async (email, password) => {
  const response = await fetch('http://localhost:3001/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
  if(!response.ok) {
    throw Error('Invalid username or password');
  }
  const data = await response.json();
  console.log(data);
  
  return data;
}