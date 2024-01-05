import crocodilesController from "../controller/crocodiles.controller";
import { matchers } from "jest-json-schema";
import { login } from '../utils/helper';
import creds from "../data/creds";
expect.extend(matchers);

describe("Private Crocodiles", () => {
  describe("GET crocodiles", () => {
    let token = "";

    beforeEach( async () => {
        token = await login(creds.username, creds.password);
    })

    it("GET crocodiles", async () => {
      const res = await crocodilesController.getCrocodiles(token);
      expect(res.statusCode).toEqual(200);
    });
  });
});
