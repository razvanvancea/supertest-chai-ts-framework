import * as supertest from 'supertest';
const request = supertest(`${process.env.ENV}`);

class CommentsController {
  getComments() {
    return request.get('/comments');
  }
  getCommentById(id: number) {
    return request.get('/comments/'+id);
  }
}

export default new CommentsController();