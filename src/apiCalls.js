export const fetchPopularMovies = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=5be60afe8a002cff163376db69b0add0&language=en-US&page=1'
  );
  const popularMovies = await response.json();
  return popularMovies.results;
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
  const response = await fetch(
    `http://localhost:3001/api/v1/users/${userId}/moviefavorites`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        movie_id: movieId,
        title: 'test title',
        poster_path: 'test poster',
        release_date: 'test date',
        vote_average: 'test average',
        overview: 'test overview'
      })
    }
  );

  const favoriteResponse = await response.json();

  console.log(favoriteResponse);
};

export const getFavorites = async userId => {
  const response = await fetch(
    `http://localhost:3001/api/v1/users/${userId}/moviefavorites`
  );
  const favorites = await response.json();

  console.log(favorites);
};

export const deleteFavorite = async (userId, favoriteId) => {
  await fetch(
    `http://localhost:3001/api/v1/users/${userId}/moviefavorites/${favoriteId}`,
    {
      method: 'DELETE'
    }
  );
};
