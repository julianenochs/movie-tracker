export const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      fetch('http://localhost:3001/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: action.email,
          password: action.password
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            console.log(data.error);
          }
          console.log(data);
        });

      return { email: action.email, loggedIn: true };

    case 'REGISTER':
      fetch('http://localhost:3001/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: action.name,
          email: action.email,
          password: action.password
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error.error.detail));

      return { email: action.email, loggedIn: true };

    default:
      return state;
  }
};
