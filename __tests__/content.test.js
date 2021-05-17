const request = require('supertest');
const { readFileSync } = require('fs');

const app = require('../app');
const { recursiveRoutes } = require('../services/routegenerator');
const TurndownService = require('turndown');
const turndownService = new TurndownService();

describe('Page content', () => {
  it('should return html for routes', async (done) => {
    const routes = recursiveRoutes('./content');
    for (let route = 0; route < routes.length; route++) {
      const res = await request(app).get(routes[route]);
      expect(res.type).toEqual('text/html');
      const markdown = readFileSync(
        './content/' + routes[route] + '/index.md',
        'utf8'
      );
      expect(turndownService.turndown(res.text)).toContain(
        markdown.split('\n')[1]
      );
    }
    done();
  });
});
