const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();
const public_directory = path.join(__dirname, "../public");
console.log(public_directory);

app.use(express.json());
app.use(express.static(public_directory));


//middleware functions
// const myFunction = ( req, res, next) => {
//     console.log("this happens first");
//     res.query.random= "something random";
//     next()
// };

// const myOtherFunction = (req, res, next) => {
//     console.log("this happens second");
//     res.query.morestuff = "something else";
//     next();
// };

// app.get("/", myFunction, myOtherFunction, (req, res) => {
//     //do something
//     console.log("...then running controller");
//     console.log(req.query);
//     res.send("Hello World");
// });

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

//Challenge: save JSON data to tasks.txt file and send back a 'success' message
app.post("/task", (req, res) =>{
    console.log(req.body);
    fs.writeFileSync("src/tasks.txt", req.body.task);
    res.send("Success");
});



app.listen(5000, () => {
    console.log("Listening on port 5000...")
});