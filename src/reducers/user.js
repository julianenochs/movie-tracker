export const user = (state = '', action) => {
  switch(action.type) {
    case 'LOGIN':
      fetch('http://localhost:3001/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: action.email,
          password: action.password,
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch( error => console.log(error.error.detail))
      return action.email;
    default:
      return state;
  }
};