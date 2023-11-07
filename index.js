import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.get("/submit", (req, res) => {
    res.render("index.ejs");
  });
  
app.use(express.static("public"));

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});



