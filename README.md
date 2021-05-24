# Static Content challenge: Acme Co CMS 💥

A simple Express App MVP for a folder-based CMS with markdown content

## To run locally

App will start on localhost:3000

`npm run start`

## Ideas for extension

- Deploy e.g. to Vercel/Heroku
- Refactor to use non-blocking methods
- Content pages for directories with links to pages
- Improved UI
- User input/edit functionality!

## Testing

The application should be shipped with three tests:

- one that verifies that requests to valid URLs return a 200 HTTP status code
- one that verifies that requests to valid URLs return a body that contains the HTML generated from the relevant `index.md` markdown file
- one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code
- NB: the tests should not depend on the existing sub-folders in the `content` folder, so the tests do not break as the content changes
