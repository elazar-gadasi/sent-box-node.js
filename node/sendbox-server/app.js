const chalk = require("chalk");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8181;

// משימה 1
app.get("/user", (req, res, next) => {
  req.user = { name: "user", age: 55 };
  console.log("in user");
  res.send(req.user);
});
app.post("/", (req, res, next) => {
  const arry = [
    { name: "user", age: 88 },
    { name: "ela", age: 44 },
  ];
  console.log(chalk.green(arry[0].name + " " + arry[1].name));
  res.send(arry);
});

app.delete("/1", (req, res) => {
  console.log(chalk.yellow("user delete"));
  res.send("user delete");
});

app.put("/2", (req, res) => {
  console.log(chalk.yellow("user waz update"));

  res.send("user waz update");
});

app.patch("/3", (req, res) => {
  console.log(chalk.yellow("user like patch"));
  res.send("user like patch");
});
// משימה 2

app.get("/headers", (req, res) => {
  const haders = req.headers;
  console.log(chalk.blue(haders));
  res.send(haders);
});
// app.get("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(chalk.yellow(id));
//   res.send(id);
// });
// app.get("/query", (req, res) => {
//   console.log(chalk.yellow(req.query));
//   res.send(req.query);
// });
//
// app.use(express.json());
// app.use("/", (req, res) => {
//   console.log(chalk.yellow(req.body));
//   res.send(req.body);
// });
app.get("/userCustom", (req, res, next) => {
  req.userCustom = { name: "user", age: 55 };
  console.log("in userCustom");
  res.send(req.userCustom);
});

app.listen(PORT, () =>
  console.log(
    chalk.yellow(`you access to conentet to : http://localhost/${PORT}`)
  )
);
