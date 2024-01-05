import categoriesController from "../controller/categories.controller";
import userAuthController from "../controller/user-auth.controller";

export const getCategoryId = async (token: string) => {
  const body = { "name": "Test Category " + Math.floor(Math.random() * 10000) }
  const res = await categoriesController
    .postCategories(body)
    .set('Authorization', 'Bearer ' + token);
  return res.body._id;
}

export const login = async (username: string, psw: string) => {
  const res = await userAuthController.loginUser(username, psw);
  return res.body.access;
};