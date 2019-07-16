const BASE_URL = '/api/characters/';


function index() {
  const options = {
    method: 'GET',
    headers: {
      
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}
 async function searchChar (user){
  const options = {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json', 
    },
    body : JSON.stringify({email : user})
  }
  try {
    const fetchChar = await fetch(`${BASE_URL}show`, options)
    const char = await fetchChar.json()
    return await char
  } catch (error) {
    console.error(error)
  }
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

export default {
  index,
  create,
  searchChar
};