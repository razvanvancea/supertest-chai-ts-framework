import controller from "../controller/comments.controller";
import { matchers } from "jest-json-schema";
expect.extend(matchers);

const commentsSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      postId: {
        type: "number",
      },
      id: {
        type: "number",
      },
      name: {
        type: "string",
      },
      email: {
        type: "string",
      },
      body: {
        type: "string",
      },
    },
    required: ["postId", "id", "name", "email", "body"],
  },
};

describe("Comments", () => {
  describe("GET comments", () => {
    it("GET /comments", async () => {
      const res = await controller.getComments();
      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBeGreaterThan(1);
      expect(Object.keys(res.body[0])).toEqual([
        "postId",
        "id",
        "name",
        "email",
        "body",
      ]);
      console.log(res.body);
      expect(res.body).toMatchSchema(commentsSchema);
    });

    it("GET /comments/id", async () => {
      const res = await controller.getCommentById(2);
      expect(res.statusCode).toEqual(200);
      expect(JSON.stringify(res.body)).toContain('est natus enim nihil est dolore')
    });

    it("GET invalid /comments/id", async () => {
      const res = await controller.getCommentById(222222222222);
      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({})
    });
  });

  // describe('Update comments', () => {
  //   let postBrand;
  //   const data = {
  //     'name': 'Test Brand ' + Math.floor(Math.random() * 100000),
  //     'description': 'Test Brand Description'
  //   }
  //   beforeAll(async () => {
  //     postBrand = await controller.postBrands(data);
  //   })
  //   afterAll(async () => {
  //     await controller.deleteBrand(postBrand.body._id)
  //   })
  //   it('PUT /brands', async () => {
  //     const data = {
  //       'name': postBrand.body.name + ' updated'
  //     }
  //     const res = await controller.putBrands(postBrand.body._id, data);

  //     expect(res.statusCode).toEqual(200)
  //     expect(res.body.name).toEqual(data.name)
  //   });
  //   it('PUT /brands/invalid_id', async () => {
  //     const data = {
  //       'name': ' updated'
  //     }
  //     const res = await controller.putBrands('123', data);

  //     expect(res.statusCode).toEqual(422)
  //     expect(res.body.error).toContain('Unable to update brands')
  //   });
  // });
});
