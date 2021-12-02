const axios = require("axios");

let BASE_URL = "https://jsonplaceholder.typicode.com/";

async function getAlbums(baseUrl) {
  let response = await axios.get(baseUrl + "albums");
  let albumArray = response.data.reduce((acc, item) => {
    if (!acc.includes(item.id)) acc.push(item.id);
    return acc;
  }, []);
  return albumArray;
}

async function main() {
  let albums = getAlbums(BASE_URL);
  console.log(albums);
}

main();

module.exports = {};