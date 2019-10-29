export const fetchPopularMovies = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=5be60afe8a002cff163376db69b0add0&language=en-US&page=1'
  )
  
  if(!response.ok) {
    throw Error('Failed to get movies');
  } else {
    let popularMovies = await response.json();
    popularMovies.results.forEach(movie => {
    return (movie.isFavorite = false);
    });
    return popularMovies.results;
  }
};

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
  });
  if (!response.ok) {
    throw Error('Invalid username or password');
  }
  const data = await response.json();

  return data;
};

export const register = async (name, email, password) => {
  const response = await fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  });
  if (!response.ok) {
    throw Error('That email is already taken');
  }
  const data = await response.json();
  return data;
};

export const favorite = async (
  userId,
  movieId,
  title,
  posterPath,
  releaseDate,
  voteAverage,
  overview
) => {
  const resp = await fetch(
    `http://localhost:3001/api/v1/users/${userId}/moviefavorites`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        movie_id: movieId,
        title: title,
        poster_path: posterPath,
        release_date: releaseDate,
        vote_average: voteAverage,
        overview: overview
      })
    }
  );
  const fav = await resp.json();
  return fav;
};

export const getFavorites = async userId => {
  const response = await fetch(
    `http://localhost:3001/api/v1/users/${userId}/moviefavorites`
  );
  if(!response.ok) {
    throw Error('Failed to get favorites');
  }
  const favorites = await response.json();
  return favorites;
};

export const deleteFavorite = async (userId, favoriteId) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/users/${userId}/moviefavorites/${favoriteId}`,
    {
      method: 'DELETE'
    }
  );
  if(!response.ok) {
    console.log('hit block q24q2rwru89wur8w9');
    throw Error('Failed to delete favorite');
  }
  return response;
};
