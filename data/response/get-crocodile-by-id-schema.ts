export const getCrocodileByIdSchema = {
    "type": "object",
    "properties": {
      "id": {
        "type": "number"
      },
      "name": {
        "type": "string"
      },
      "sex": {
        "type": "string"
      },
      "date_of_birth": {
        "type": "string"
      },
      "age": {
        "type": "number"
      }
    },
    "required": [
      "id",
      "name",
      "sex",
      "date_of_birth",
      "age"
    ]
  }