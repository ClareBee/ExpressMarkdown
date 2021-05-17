const request = require('supertest');
const app = require('../app');
const { recursiveRoutes } = require('../services/routegenerator');

describe('Page content', () => {
  it('should return html for routes', async (done) => {
    const routes = recursiveRoutes('./content');
    for (const route of routes) {
      const res = await request(app).get(route);
      expect(res.type).toEqual('text/html');
    }
    done();
  });
});
