const express = require("express");

const app = express();

let users = [
  {
    name: "Rakaa",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const rakaaKidneys = users[0].kidneys;
  const numberOfKidneys = rakaaKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < rakaaKidneys.length; i++) {
    if (rakaaKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    rakaaKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

//make every unhealthy kidney healthy
app.put("/", (req, res) => {
  const rakaaKidneys = users[0].kidneys;
  for (let i = 0; i < rakaaKidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.send({});
});

//delete unhealthy kidneys
app.delete("/", (req, res) => {
  const rakaaKidneys = users[0].kidneys;

  const newKidneys = [];
  for (let i = 0; i < rakaaKidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;

  res.json({
    msg: "done",
  });
});

app.listen(3000);
