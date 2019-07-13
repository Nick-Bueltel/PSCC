const BASE_URL = '/api/characters/';

export default {
  index,
  create
};

function index() {
  const options = {
    method: 'GET',
    headers: {
      
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function create(Character) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body: JSON.stringify(Character)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}
