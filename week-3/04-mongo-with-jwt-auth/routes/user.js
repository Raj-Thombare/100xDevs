const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });

  res.json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({
    username,
    password,
  });

  if (user) {
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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const courses = await Course.find({ published: true });

  res.json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  const courseId = req.params.courseId;
  const username = req.username;
  console.log(courseId);
  console.log(username);
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    },
  );

  res.json({
    message: "purchased course successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });

  const courses = await Course.find({
    _id: user.purchasedCourses.map((s) => s.toString()),
  });

  res.json({
    courses: courses,
  });
});

module.exports = router