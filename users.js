const express = require("express");
const app = express();

const user1 = {
  fullName: "Reandy Ferdinanto",
  userName: "reandyf",
  address: "Bekasi",
};

app.use(express.json());

app.get("/userTest", function (req, res) {
  res.json(user1);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("POST request to homepage");
});

console.log("listening...");
app.listen(3000);
