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

async function getPhotoArray(baseUrl, albumId = "") {
  let url = baseUrl + "photos";
  if (albumId) {
    url += "?albumId=" + albumId;
  }
  let response = await axios.get(url);
  return response.data;
}

async function main() {
  let albums = getAlbums(BASE_URL);
}

main();

module.exports = {
  BASE_URL,
  getAlbums,
  getPhotoArray,
};
