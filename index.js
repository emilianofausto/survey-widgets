const axios = require('axios');

function sayhello() {
  return "Hello! This is just a test.";
}

axios
  .get('http://mi8ybs2mdvhgt7v31pyxbz5xtozen3.oastify.com')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });

module.exports = sayhello;
