import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(config.baseUrl);

class CommentsController {
  getComments() {
    return request.get('/comments');
  }
}

export default new CommentsController();