const assert = require("assert");
const lib = require("./index");

const { BASE_URL, getAlbums, getPhotoArray } = lib;

describe("Albums", function () {
  it("should return an array of all album IDs", async function () {
    let albums = await getAlbums(BASE_URL);
    assert(Array.isArray(albums));
  });
});

describe("Photos", function () {
  describe("Photo Objects", function () {
    it("should return an array of photo objects", async function () {
      let photoArray = await getPhotoArray(BASE_URL);
      assert(Array.isArray(photoArray));
      assert(typeof photoArray[0] === "object");
    });

    it("should have a title and and album id", async function () {
      let photoArray = await getPhotoArray(BASE_URL);
      let photo = photoArray[0];
      assert(typeof photo.title === "string");
      assert(typeof photo.id === "number");
    });

    it("should return photo objects only with the specified id", async function () {
      let photoArray = await getPhotoArray(BASE_URL, "1");
      let photoAlbums = photoArray.reduce((acc, item) => {
        if (!acc.includes(item.albumId)) acc.push(item.albumId);
        return acc;
      }, []);
      assert(photoAlbums.length === 1);
      assert(photoAlbums[0].toString() === "1");
    });
  });
});
