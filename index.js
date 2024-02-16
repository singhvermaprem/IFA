import express from "express";
import http from "http";


const app = new express();


const server = http.createServer((req, res) =>
{
    res.render("index.ejs");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT , () => console.log("server is running on port 3000."))

app.use(express.static('public'));


app.get("/shop.ejs", (req, res) =>
{
    res.render("shop.ejs");
});

app.get("/productDetails.ejs", (req, res) =>
{
    res.render("productDetails.ejs");
});





