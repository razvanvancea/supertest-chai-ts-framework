import * as supertest from 'supertest';
let request = supertest(`${process.env.ENV}`);

class AdminController {
  postAdminLogin(data: { [key: string]: string }) {
    return request
      .post('/admin/login')
      .send(data)
  }

  k6LoginAs(un:string, pw:string){
    return request.post('/auth/token/login/')
    .set('Content-Type', 'application/json')
    .send({
      
        "username": un,
        "password": pw
    }
    )
  }
}

export default new AdminController();