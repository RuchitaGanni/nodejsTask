const Express = require("express");
const BodyParser = require("body-parser");
var app = Express();
var mongoose = require('mongoose');
const mongoDBURL ="mongodb://localhost/test" ;
mongoose.connect(mongoDBURL, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('open',() => {
    console.log("working");
});
mongoose.set('useFindAndModify', false);
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(Express.json());
const userRoutes=require('./routes/userRoute');
app.use('/users',userRoutes);
app.listen(5000, () => {
    console.log("Server started on port 5000");
});