import express from "express";

const app = new express();
const port = 3000;



app.listen(port, ()=>{
    console.log(`server prem has been started on port ${port}`)
});

app.use(express.static('public'));

app.get("/", (req, res) =>
{
    res.render("index.ejs");
});

app.get("/shop.ejs", (req, res) =>
{
    res.render("shop.ejs");
});

app.get("/productDetails.ejs", (req, res) =>
{
    res.render("productDetails.ejs");
});





