import * as supertest from 'supertest';
const request = supertest(`${process.env.ENV}`);

class UserAuthController {
  registerUser(un: string, fn: string, ln: string, em: string, pw: string) {
    return request.post('/user/register/').set('Content-Type', `application/json`).send({
        "username": un,
        "first_name": fn,
        "last_name": ln,
        "email": em,
        "password": pw
    })
  }
  loginUser(un:string, pw:string){
    return request.post('/auth/token/login/')
    .set('Content-Type', 'application/json')
    .send({
      
        "username": un,
        "password": pw
    }
    )
  }
}

export default new UserAuthController();