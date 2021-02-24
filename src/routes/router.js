//create, read, update, delete
//POST, GET, UPDATE (overwrites), DELETE

const randomId = require("../helpers/randomId.js");
const express = require('express');
//initialize new router
const router = express.Router();

//"database"
const db = [];
//"/" because in app.js we're using a router that defines our path
router.post("/", (req, res) => {
    // get text from request
    const text = req.body.x;

    // get current time (for timestamp)
    const created_at = Date.now();

    // also assign this a random ID to uniquely identify this todo item
    const id = randomId();

    // create data (for this todo)
    const data = { id, text, created_at };

    // put data in database
    db.push(data);

    // send back data to user
    res.json(data);
});

router.get("/", (req, res) => {
    res.json(db);
});

//overwrite
router.put("/:id", (req, res) => {
// get id from :id
const id = req.params.id;

// get text we wanna change it to
const text = req.body.text;

// loop through our database
for (let i = 0; i < db.length; i++) {
  // check if this ID matches
  if (db[i].id === id) {
    // get this todo item
    const todo = db[i];

    // change text
    todo.text = text;

    // send back modified todo
    res.json(todo);
  }
}
});

router.delete("/:id", (req, res) => {
// get id from :id
const id = req.params.id;
for (let i = 0; i < db.length; i++) {
    if(db[i].id === id){
        db.splice(i, 1);
        // send back modified todo
        res.json(db);
    }
}
});


module.exports = router