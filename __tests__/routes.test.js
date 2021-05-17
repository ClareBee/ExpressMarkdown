const request = require('supertest');
const app = require('../app');
const { recursiveRoutes } = require('../services/routegenerator');

describe('App routes', () => {
  it('should return status code 200 if they exist', async () => {
    const routes = recursiveRoutes('./content');
    for (const route of routes) {
      const res = await request(app).get(route);
      expect(res.statusCode).toEqual(200);
    }
  });
});
