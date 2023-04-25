const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const categories = require('./category.json')

app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello Worldghghgh!");
});
app.get("/category",(req,res)=>{
    res.send(categories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});