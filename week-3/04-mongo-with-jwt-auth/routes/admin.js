const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    msg: "Admin created successfully!",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.findOne({
    username,
    password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET,
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "Wrong username or password!",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  const published = req.body.published;

  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
    published,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});

  res.json({
    courses: courses,
  });
});

module.exports = router;