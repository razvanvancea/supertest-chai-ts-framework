import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(`${process.env.ENV}`);

class CrocodilesController {
  getCrocodiles(token) {
    return request.get('/my/crocodiles/').set('Authorization', `Bearer ${token}`);
  }
}

export default new CrocodilesController();