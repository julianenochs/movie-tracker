import { fetchPopularMovies, login, register, favorite, getFavorites, deleteFavorite } from './apiCalls';

describe('fetchPopularMovies', () => {
  const mockMovies = [
    {
      overview: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      release_date: '2019/10-04',
      title: 'Joker',
      vote_count: 4211,
    },
    {
      overview: 'During the 1980s',
      poster_path: '/fjb8Ekgsd4FDteOkCU.jpg',
      release_date: '2019/10-04',
      title: 'Batman',
      vote_count: 4222,
    },
  ];

  let mockResponse = {
    results: mockMovies,
  }


  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should be called with the correct url', () => {
    fetchPopularMovies()
    .catch(error => console.log(error));
    expect(window.fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/popular?api_key=5be60afe8a002cff163376db69b0add0&language=en-US&page=1');
  });

  it('should return an array of movies', () => {
    fetchPopularMovies()
    .then(movies => expect(movies).toEqual(mockMovies));
  });

  it.skip('should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ok: false});
    });
    expect(fetchPopularMovies).rejects.toEqual(Error('Failed to get movies'));
  });
    
  
});

describe('login', () => {
  let expected;
  beforeEach(() => {
    expected = {name: 'Brady', id: 12, email: 'b@b.com'}
  });
  it('should be called with the correct url', () => {
    const url = 'http://localhost:3001/api/v1/login';
    const body = {"body": "{\"email\":\"brady\",\"password\":\"password\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"};
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected),
      });
    });
    login('brady', 'password');
    expect(window.fetch).toHaveBeenCalledWith(url, body);
  });

  it('should return the user that has been logged in successfully', () => {
    expect(login()).resolves.toEqual(expected);
  });
});

describe('register', () => {
  let expected;

  beforeEach(() => {
    expected = {id: 23, name: 'brady', email: 'b@b.com'};
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected),
      });
    });
  });
  it('should be called with the correct url', () => {
    const url = 'http://localhost:3001/api/v1/users';
    const body = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'brady',
        email: 'b@b.com',
        password: 'password'
      }),
    };
    register('brady', 'b@b.com', 'password');
    expect(window.fetch).toHaveBeenCalledWith(url, body);
  });

  it('should return the user that has been registered', () => {
    const response = register('brady', 'b@b.com', 'password');
    expect(response).resolves.toEqual(expected);
  });
});

describe('favorite', () => {
  const url = 'http://localhost:3001/api/v1/users/195/moviefavorites';
  const body = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      movie_id: 449924,
      title: 'Ip Man 4: The Finale',
      poster_path: 'mAWBfTDAmfpvQGMVFuzuVl49N1P.jpg',
      release_date: '2019-10-18',
      vote_average: 5.7,
      overview: 'overview'
    }),
  };

  let expected;
  beforeEach(() => {
    expected = {
      id: 195,
      movie_id: 449924,
      overview: 'overview',
      poster_path: 'mAWBfTDAmfpvQGMVFuzuVl49N1P.jpg',
      release_date: '2019-10-18',
      title: 'Ip Man 4: The Finale',
      user_id: 1,
      vote_average: 5.7,
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected),
      });
    });
  });

  it('should be called with the correct url', () => {
    favorite(195, 449924, 'Ip Man 4: The Finale', 'mAWBfTDAmfpvQGMVFuzuVl49N1P.jpg', '2019-10-18', 5.7, 'overview');
    expect(window.fetch).toHaveBeenCalledWith(url, body);
  });

  it('should return the user that was registered', () => {
    const result = favorite(195, 449924, 'Ip Man 4: The Finale', 'mAWBfTDAmfpvQGMVFuzuVl49N1P.jpg', '2019-10-18', 5.7, 'overview');
    expect(result).resolves.toEqual(expected);
  });
});

describe('getFavorites', () => { 
  const mockMovies = [
    {
      id: 184,
      movie_id: 417384,
      overview: "overview",
      poster_path: "/d0FWbzrmm99BTfUqf1Lbjl2zu3S.jpg",
      release_date: "2019-08-09",
      title: "Scary Stories to Tell in the Dark",
      user_id: 1,
      vote_average: "6.3",
    },
    {
      id: 100,
      movie_id: 111111,
      overview: "overview",
      poster_path: "/99BTfUqf1Lbjl2zu3S.jpg",
      release_date: "2019-08-20",
      title: "Scary Stories",
      user_id: 1,
      vote_average: "10",
    }
  ];
  const expected = { favorites: mockMovies }
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected),
      })
    })
  });
  it('should be called with the correct url', () => {
    getFavorites(1);
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users/1/moviefavorites');
  });

  it('should return users favorite movies', () => {
    const result = getFavorites(1);
    expect(result).resolves.toEqual(expected);
  });
});

describe('deleteFavorite', () => {
  beforeEach(() => {
    window.fetch = jest.fn();
  });
  it('should be called with the correct url', () => {
    deleteFavorite(1, 100);
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users/1/moviefavorites/100', {"method": "DELETE"});
  });
});
