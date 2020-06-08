const request = require('supertest');
const app = require('../lib/app');
const createResponse = require('../lib/utils/createResponse.js');

describe('createResponse', () => {
  it('get route', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
  it('get red route', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });
  it('get green route', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });
  it('get blue route', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });

  it('get echo route working', () => {
    const requestedResponse = createResponse({ body: 'Yolo', status: '200 OK', contentType: 'text/plain' });
    return request(app)
      .get('/echo')
      .send(requestedResponse.body)
      .then(res => {
        expect(res.text).toEqual(requestedResponse.body);
      });
  });

});
