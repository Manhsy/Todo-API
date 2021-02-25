//create, read, update, delete
//POST, GET, UPDATE (overwrites), DELETE

const randomId = require("../helpers/randomId.js");
const express = require('express');
//initialize new router
const router = express.Router();

//"database"
const Todo = require("../models/Todo");
//"/" because in app.js we're using a router that defines our path
//async because our db does not right instantly so where is a wait for the next post
router.post("/", async(req, res) => {
    // get text from request
    const text = req.body.text;

    // get current time (for timestamp)
    const created_at = Date.now();

    // also assign this a random ID to uniquely identify this todo item
    const id = randomId();

    //create new todo item
    const todo = new Todo({text, created_at, id});

    //save to mongoDB
    const result = await todo.save();

    // send back data to user
    res.json(result);
});

router.get("/", async(req, res) => {

    // get todos from mongodb
    const todos = await Todo.find();

    //return the result 
    res.json(todos);
});

//overwrite
router.put("/:id", async(req, res) => {
  //get id frorm :id
  const id = req.params.id;

  //gett he text we wanna change it to
  const text = req.body.text;

  // update
  await Todo.updateOne({ id }, { text });

  // send back json response
  res.json({ success: true });
});
router.delete("/:id", async(req, res) => {
  // get id from :id
  const id = req.params.id;
  
  //delete 
  await Todo.deleteOne({ id })

  // send back json response
  res.json({ success: true });

});


module.exports = router;