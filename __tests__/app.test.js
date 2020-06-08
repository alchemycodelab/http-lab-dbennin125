const request = require('supertest');
const app = require('../lib/app');



describe('createResponse', () => {
  
  it('get home route', () => {
    
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('get bad route', () => {

    return request(app)
      .get('/wrong')
      .then(res => {
        expect(res.text).toEqual('Not Found');
        expect(res.status).toEqual(404);
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
  it('get echo route', () => {
    const requestedResponse = 
    {        
      body: 'Yolo',
      status: '200 OK',
      contentType: 'text/plain'
    };
    
    return request(app)
      .post('/echo')
      .send(requestedResponse.body)
      .then(res => {
        expect(res.text).toEqual(requestedResponse.body);
      });
  });
});
