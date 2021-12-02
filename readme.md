# Technical Showcase - Photo Album

A command line program that displays photo ids and titles by the album that they are a part of.

Unit tests can be run by using the `yarn test` command. The test script uses `nodemon` so that tests can be updated and re-run without having to manually re run the script. In order to exit please use CTRL + C.

The program can be executed by using the `yarn start` command. Keep in mind that depending on how many items are in the API, this program can take up to a minute to complete. Pagination can be added to mitigate any issues that this may create. 