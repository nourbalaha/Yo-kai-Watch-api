const express = require("express");
const app = express();
const config = require("./knexfile");

const bodyParser = require("body-parser");
var path = require('path');

const knex = require('knex')(config);

app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/api/all/", (req, res) => {
  knex('yokai_watch').then((data) => {
    if (data.length < 1 || data == undefined) {
      res.send({ "error": "Bad request!", "error_id": 400 });
    } else {
      res.json(data);
    }
  });
});

app.get("/api/", (req, res) => {
  const query = req.query;
  knex('yokai_watch').where(query).then((data) => {
    if (data.length < 1 || data == undefined) {
      res.send({ "error": "Bad request!", "error_id": 400 });
    } else {
      res.json(data);
    }
  });
});

app.post("/api/", (req, res) => {
  const body = req.body;
  if(body.name && typeof body.name === "string" && body.name.trim()!== ""){
    knex("yokai_watch").insert(body,"*").then((data)=>{
      res.json(data);
    });
  }else{
    res.send({ "error": "Bad request!", "error_id": 400 , "details": "must provide a valid name"});
  }
});

app.put("/api/", (req, res) => {
  const body = req.body;
  const query = req.query;
  if(body.name && typeof body.name === "string" && body.name.trim()!== ""){
    knex("yokai_watch").where(query).update(req.body).then(()=>{
      res.json({ "message": "updated!"});
    });
  }else{
    res.send({ "error": "Bad request!", "error_id": 400 , "details": "must provide a valid name"});
  }
});

app.delete("/api/", (req, res) => {
  const query = req.query;
  if(query){
    knex("yokai_watch").where(query).del().then(()=>{
      res.json({ "message": "deleted!"});
    });
  }else{
    res.send({ "error": "Bad request!", "error_id": 400 , "details": "must provide a valid name"});
  }
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});