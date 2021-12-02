const lib = require("./index");
const { getAlbums, printAllInfoByAlbum, BASE_URL } = lib;

async function main() {
  let albums = await getAlbums(BASE_URL);
  printAllInfoByAlbum(albums);
}

main();
