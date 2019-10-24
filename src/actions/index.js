const addUser = ({ email, password }) => ({
    type: 'ADD_USER',
    email,
    password
});

export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies,
});

export const login = (email, password) => ({
  type: 'LOGIN',
  email,
  password,
});

export const register = (name, email, password) => ({
  type: 'REGISTER',
  name,
  email,
  password
});