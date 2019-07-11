const BASE_URL = '/api/races/';

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

function create(score) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
     
    },
    body: JSON.stringify(score)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}
