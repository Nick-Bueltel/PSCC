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

function create(race) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body: JSON.stringify(race)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}
