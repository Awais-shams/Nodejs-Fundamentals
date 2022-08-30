const Ajv = require("ajv");
const ajvInstance = new Ajv();

const schema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    designation: { type: "string" },
    department: { type: "string" },
  },
  required: ["id", "name", "designation", "department"],
  additionalProperties: false,
};

const validate = ajvInstance.compile(schema);

module.exports = validate;
