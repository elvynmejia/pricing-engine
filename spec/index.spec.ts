import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../server';

const { expect } = chai;

chai.use(chaiHttp);

const request = chai.request(server);

describe('/api/v1/orders', () => {
  describe('get', () => {
    it('matches expected text', async () => {
      const response = await request.get('/api/v1/orders');
      expect(response.status).to.equal(200);
      expect(response.text).to.eq('Express + TypeScript Server')
    });
  });

  describe('/rate', () => {
    context('success', () => {
      it('finds coverage', async () => {
        const response = await request
          .post('/api/v1/orders/rate')
          .send({
            parcel: {
              weight: 10,
              height: 10,
              length: 10,
              width: 10,
              unit: 'oz',
              zip: 94107
            }
          });
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.eq({
          price: 10,
          zip: 94107,
          max_weight: 800,
          carrier: 'x',
          unit: 'oz',
          region: 'local'
        });
      });
    });

    context('error', () => {
      it.only('unable to find coverge', async () => {
        const response = await request
          .post('/api/v1/orders/rate')
          .send({
            parcel: {
              weight: 10,
              height: 10,
              length: 10,
              width: 10,
              unit: 'oz',
              zip: 11111
            }
          });
        expect(response.status).to.equal(422);
        console.log(response.body.errors);

        expect(response.body.errors).to.deep.eq([
          {
            message: 'Unable to find shipping coverage for given parcel. Make sure the weight and dimentional weight does not surpase agreed weight limit of 800 oz',
            field: 'Check fields: weight, height, length or width for possible errors'
          }
        ]);
      });
    });
  });
});
