import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(config.baseUrl);

class CommentsController {
  getComments() {
    return request.get('/comments');
  }
  getCommentById(id: number) {
    return request.get('/comments/'+id);
  }
}

export default new CommentsController();