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

describe('GET /health', () => {
  it('responds with I am healthy!', (done) => {
    request(app)
      .get('/health')
      .expect(200)
      .expect('I am healthy!', done);
  });
});
