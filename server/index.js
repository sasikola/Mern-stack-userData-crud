const express = require("express");
const cors = require("cors");
const signUpModel = require("./models/signUpSchema");
const userModel = require("./models/userSchema");
require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// This is for authentication

app.post("/register", (req, res) => {
  signUpModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res)=>{
  const {email, password}= req.body;
  signUpModel.findOne({email: email})
  .then(user=>{
    if(user){
      if(user.password === password){
        res.json("Success")
      }else{
        res.json("Password incorrect")
      }
    }else{
      res.json('User not found')
    }
  })
})


// this is for user Data

// get all users
app.get("/getData", (req, res) => {
  userModel
    .find()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});
// get single user
app.get("/getUser/:id", (req, res) => {
  let id = req.params.id;
  userModel
    .findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ err: "Error retriving user" });
    });
});

// To create a user data
app.post("/create", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});


// To delete the single user data
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});


// To update the user data
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      }
    )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});




app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
