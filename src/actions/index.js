const addUser = ({ email, password }) => ({
    type: 'ADD_USER',
    email,
    password
});

export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies,
});