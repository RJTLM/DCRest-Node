var express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let students = [];
let student = {"id":123, "name": "Sajib Mistry", "Address": "Perth"};
students.push(student);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/students", (req, res)=> {
    res.json(students);
});

app.post("/student", (req, res)=> {
    const newstudent = req.body;
    console.log(newstudent);
    students.push(newstudent);
    res.send('Student is added to the list');
});

