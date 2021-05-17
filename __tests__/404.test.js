const request = require('supertest');
const app = require('../app');

describe('404 route', () => {
  it('should return 404 if route does not exist', async (done) => {
    const res = await request(app).get('/missing-route');
    expect(res.statusCode).toEqual(404);
    done();
  });
});
