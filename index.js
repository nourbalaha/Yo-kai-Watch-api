const express = require("express");
const app = express();
const config = require("./knexfile");

const bodyParser = require("body-parser");

const knex = require('knex')(config);

app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));


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

app.post("/api", (req, res) => {
  const body = req.body;
  if(body.name && typeof body.name === "string" && body.name.trim()!== ""){
    knex("yokai_watch").insert(body,"*").then((data)=>{
      res.json(data);
    });
  }else{
    res.send({ "error": "Bad request!", "error_id": 400 , "details": "must provide a valid name"});
  }
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});