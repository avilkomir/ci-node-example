const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello, CI/CD World from CSCI 3030!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, CI/CD World from CSCI 3030!', done);
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

describe('GET /3030', () => {
  it('responds with Hello, CSCI 3030!', (done) => {
    request(app)
      .get('/3030')
      .expect(200)
      .expect('Hello, CSCI 3030!', done);
  }); 
}
);
