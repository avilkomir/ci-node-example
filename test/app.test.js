const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello, CI/CD World!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, CI/CD World!', done);
  });
});
