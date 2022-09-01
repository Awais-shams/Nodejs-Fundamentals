const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/demo")
  .then(() => console.log("connecting to mongooo.."));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Awais Shams",
    author: "Mosh Hamdani",
    tags: ["begineer", "expert"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const result = await Course.find({ author: "Mosh Hamdani" }).limit(10).sort({name:1});
  console.log(result);
}
getCourses();
// createCourse();


