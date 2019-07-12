const BASE_URL = '/api/classes/';

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

function create(Class) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body: JSON.stringify(Class)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}
