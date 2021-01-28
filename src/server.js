const express = require('express');

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    //do something
    console.log("Logging something");
    res.send("Hello World");
});

app.get("/data", (req, res) => {
    console.log(req.query);
    res.send({data: "Hello Mel"});
});

app.get("/name", (req, res) => {
    console.log(req.query);
    res.send({name: (req.query.name), age:(req.query.age)});
});

///this will get everything from dog
app.get("/dog", (req, res) => {
    console.log(req.params);
    res.send("woof");
});

///this will get id from dog
app.get("/dog/:id/:name", (req, res) => {
    console.log(req.params);
    res.send("success");
});

///this will get number of id from person
app.get("/person/:id/", (req, res) => {
    console.log(req.params.id);
    res.send("success");
});

//post request example
app.post("/", (req, res) =>{
    console.log(req.body);
    console.log(req.body.favColor[2]);
    res.send({data: req.body});
});

//post request example 2
app.post("/dog/details", (req, res) =>{
    console.log(req.body);
    console.log(req.body.favToy);
    res.send({data: req.body});
});





app.listen(5000, () => {
    console.log("Listening on port 5000...")
});