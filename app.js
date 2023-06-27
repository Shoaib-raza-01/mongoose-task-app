require("./mongoose-connect")
const User = require("./models/Users")
const express = require("express");

const app = express();

app.use(express.json());

const PORT = 8080;

app.post("/add-user", async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    const user = new User({ name, email, age, password });
    await user.save()
    console.log("user was added successfully....");
    return res.status(201).send(user);
  } catch (err) {
    res.status(404).send({ message: err })
  }
});

app.get("/get-user", async (req, res) => {

  //directly use sql operations

  // const user = await User.findOne(
  //   { age: 24 }
  // );
  // if (!user) {
  //   return res.status(404).send({ message: "user was not found " });
  // } else {
  //   return res.status(200).send(user)
  // }

  try {
    const user = await User.findOne({ age: 24 });
    console.log("user with age 24 was found");
    return res.status(201).send(user);
  } catch (err) {
    return res.status(404).send({ message: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})