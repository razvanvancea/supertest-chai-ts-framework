import { matchers } from "jest-json-schema";
import creds from "../data/creds";
import userAuthController from "../controller/user-auth.controller";
expect.extend(matchers);

import * as Chance from "chance";
const chance = new Chance();

describe("User Auth", () => {
  describe("Register", () => {
    it("the user can successfully register", async () => {
      const res = await userAuthController.registerUser(
        chance.word({ length: 5 }),
        "John",
        "Doe",
        chance.email(),
        "123123123"
      );

      expect(res.statusCode).toEqual(201);
    });

    it("try to register using used email", async () => {
      const res = await userAuthController.registerUser(
        chance.word({ length: 5 }),
        "John",
        "Doe",
        "iamqarv@gmail.com",
        "123123123"
      );
      // console.log(res.text);
      expect(res.statusCode).toEqual(400);
      expect(res.text).toContain("User with this email already exists!");
    });
  });

  describe("Login", () => {
    it("the user can successfully login", async () => {
      const res = await userAuthController.loginUser(
        creds.username,
        creds.password
      );
      expect(res.statusCode).toEqual(200);
    });

    it("try to login with invalid creds", async () => {
      const res = await userAuthController.loginUser("invalid", "invalid123");
      expect(res.statusCode).toEqual(401);
    });
  });
});
