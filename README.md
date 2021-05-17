# Static Content challenge: Acme Co CMS 💥

A simple Express App MVP for a folder-based CMS

## Testing

The application should be shipped with three tests:

- one that verifies that requests to valid URLs return a 200 HTTP status code
- one that verifies that requests to valid URLs return a body that contains the HTML generated from the relevant `index.md` markdown file
- one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code
- NB: the tests should not depend on the existing sub-folders in the `content` folder, so the tests do not break as the content changes

## Bonus credit

In this MVP sprint, there are two nice-to-have tickets:

- The generated HTML page should be styled in a pleasing way
- The MVP's GitHub repository should be configured for hosting on a cloud hosting service, and include a link to a live deployment
