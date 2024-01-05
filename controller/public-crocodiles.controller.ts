import * as supertest from 'supertest';
const request = supertest(`${process.env.ENV}`);

class PublicCrocodilesController {
  getCrocodiles() {
    return request.get('/public/crocodiles/');
  }

  getCrocodileById(id: number) {
    return request.get(`/public/crocodiles/${id}/`);
  }
}

export default new PublicCrocodilesController();