const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

/* mongoose.connect('mongodb://myUserAdmin:abc123@localhost:27017/react?retryWrites=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); */

mongoose.connect('mongodb://react:react@localhost:27017/react', { useNewUrlParser: true,useUnifiedTopology: true, });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//post

// app.post("/users", (req,res) => {
// return res.json({"message":"hello world"});
// });

//get com req,query parameters
/* app.get("/users", (req, res) => {
    return res.json({ "idade": req.query.idade });
}); */

//put ou delete com paramentro de rota

/* app.put("/users/:id", (req, res) => {
    return res.json({ "id": req.params.id });
}); */

/* app.use(express.json());

app.post("/users", (req, res) => {
    return res.json(req.body);
}); */

app.use(express.json());
app.use(routes);

app.listen(3333);