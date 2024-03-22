let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

// GET USERS

exports.getallUsers = (req, res) => {
  res.status(200).json({ users });
};


// CREATE USERS

exports.createUsers = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json({
    users
  });
};

// UPDATE USERS


exports.updateUsers = (req, res) => {
const userId = req.params.id
const{username,email}=req.body
users.filter((user)=> user.id === userId).map((selectedUser)=>{
    selectedUser.username=username
    selectedUser.email=email
})
   
    res.status(202).json(users);
  };


//   DELETE USERS

exports.deleteUser = (req, res) => {
        const userid = req.params.id

       users= users.filter((user)=>user.id!==userid)
       
        res.status(202).json(users);
      };