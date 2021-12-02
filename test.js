const assert = require("assert");
const lib = require("./index");

const { BASE_URL, getAlbums } = lib;

describe("Albums", function () {
  it("should return an array of all album IDs", async function () {
    let albums = await getAlbums(BASE_URL);
    assert(typeof albums === "object");
  });
});
