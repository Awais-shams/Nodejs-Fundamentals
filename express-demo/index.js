const express = require("express");
const app = express();

const valid = require("./schemaValidater");

// console.log("awaiss", valid);

app.use(express.json());
// console.log(app)

const position = [
  {
    id: 0,
    name: "Awais Shams-1",
    designation: "Trainee SE-1",
    department: "Mern Stack-1",
  },
  {
    id: 1,
    name: "Awais Shams-2",
    designation: "Trainee SE-2",
    department: "Mern Stack-2",
  },
  {
    id: 2,
    name: "Awais Shams-3",
    designation: "Trainee SE-3",
    department: "Mern Stack-3",
  },
  {
    id: 3,
    name: "Awais Shams-4",
    designation: "Trainee SE-4",
    department: "Mern Stack-4",
  },
  {
    id: 4,
    name: "Awais Shams-5",
    designation: "Trainee SE-5",
    department: "Mern Stack-5",
  },
];

const port = process.env.PORT || 3000;

// ! Http Get Method

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send("Courses Api Endpoint");
});

// ! Route Parameters

app.get("/api/courses/:id", (req, res) => {
  const exist = position.find((pos) => {
    console.log(pos);
    return pos.id === parseInt(req.params.id);
  });
  if (!exist) {
    res.status(404).send("Not Exist");
  } else {
    res.send(position);
  }
});

// ! Http Post Method

app.post("/api/courses", (req, res) => {
  const exist = valid(req.body);
  console.log(exist);
  if (!exist) {
    return res.status(404).send({exist});
  } else {
    position.push({
      id: req.body.id,
      name: req.body.name,
      designation: req.body.designation,
      department: req.body.department,
    });
    return res.send(position);
  }
});

// ! Http Put Method
app.put("/api/courses/:id", (req, res) => {
  const exist = position.find((pos) => {
    return pos.id === parseInt(req.params.id);
  });
  if (!exist) {
    return res.status(404).send("Not Exist");
  } else {
    position[req.params.id].name = req.body.name;
    return res.send(position);
  }
});

// ! Http Delete Method

app.delete("/api/courses/:id", (req, res) => {
  const exist = position.find((pos) => {
    return pos.id === parseInt(req.params.id);
  });
  if (!exist) {
    return res.status(404).send("Not Exist");
  } else {
    position.splice(req.params.id, 1);
    return res.send(position);
  }
});
