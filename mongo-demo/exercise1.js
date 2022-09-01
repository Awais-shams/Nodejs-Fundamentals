const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connection Successful"));

const courseExerciseSchema = new mongoose.Schema({
  tags: [String],
  date: { type: Date, default: Date.now },
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("courses", courseExerciseSchema);

// async function getData() {
//   const result = await Course.find({
//     isPublished: true,
//     price: { $gte: 15 },
//   })
//     .sort({ price: -1 })
//     .select({ name: 1, author: 1, price: 1 });
//   console.log(result);
// }

// getData();

// ! Updating the document

// ! Method - 1 First Validate and then Query it

async function updateData(id) {
  const result = await Course.findById(id);

  // There are two methods to update the document

  if (!result) {
    return;
  } else {
    // *pattern-1
    // result.isPublished = false;
    // result.name = "Awais Shams";
    // *pattern-2
    result.set({
      isPublished: false,
      name: "Maaz Ashraf",
    });
  }
  const res = await result.save();

  console.log(res);
}

// updateData("63107ec48a0f3064fefda0f6");

// ! Method-2

