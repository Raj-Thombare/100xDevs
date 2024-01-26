const express = require("express");

const app = express();

// app.use(() => {
//   console.log("app.use called");
// });

const userMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "rakaa" && password != "pass") {
    res.status(403).json({
      msg: "User Doesn't exist!",
    });
  } else {
    next();
  }
};

const kidneyMiddleware = (req, res, next) => {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Something up with your inputs.",
    });
  } else {
    next();
  }
};

let requestCount = 0;
const requestCounter = (req, res, next) => {
  requestCount++;
  console.log("req count: " + requestCount);
  next();
};

//middleware app.use() - runs on every route request
// app.use(requestCounter);

app.use(express.json()); //used to parse req body

app.get("/", requestCounter, (req, res) => {
  res.json({
    msg: "Hello World!",
  });
});

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "Your heart is healthy.",
  });
});

app.listen(3000);
