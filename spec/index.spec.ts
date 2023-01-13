import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../server';

const { expect } = chai;

chai.use(chaiHttp);

let request: any;

beforeEach(() => {
  request = chai.request(server);
});

afterEach(() => {
  request.close();
});

describe('/api/v1/orders', () => {
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
          carrier: 'x',
          unit: 'oz',
          region: 'local'
        });
      });
    });

    context('error', () => {
      it('unable to find coverge', async () => {
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
        expect(response.body.errors).to.deep.eq([
          {
            message: 'Unable to find shipping coverage for zip 11111',
            field: 'zip'
          }
        ]);
      });

      it('weight limit', async () => {
        const response = await request
          .post('/api/v1/orders/rate')
          .send({
            parcel: {
              weight: 1000,
              height: 100,
              length: 100,
              width: 100,
              unit: 'oz',
              zip: 94107
            }
          });
        expect(response.status).to.equal(422);
        expect(response.body.errors).to.deep.eq([
          {
            message: "Parcel's weight or dimentional weight is greater than the weight limit of 800 oz",
            field: 'weight, height, length or width'
          }
        ]);
      });
    });
  });
});
