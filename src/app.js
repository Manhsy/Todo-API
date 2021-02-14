
//require = import package express 
//create, read, update, delete
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

//db
const db = [];

const randomId = () => Math.random().toString(16).substr(2);

app.post("/todos", (req, res) => {
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
  
  app.get("/todos", (req, res) => {
        res.json(db);
  });
  //overwrite
  app.put("/todos/:id", (req, res) => {
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
  
  app.delete("/todos/:id", (req, res) => {
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
  


  app.listen(port, () => {
    console.log(`To-do app listening at http://localhost:${port}`)
  })
