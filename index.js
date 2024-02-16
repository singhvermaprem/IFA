import express from "express";
import http from "http";


const server = http.createServer((req, res) =>
{
    res.render("index.ejs");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT , () => console.log("server is running on port 3000."))

server.use(express.static('public'));


server.get("/shop.ejs", (req, res) =>
{
    res.render("shop.ejs");
});

server.get("/productDetails.ejs", (req, res) =>
{
    res.render("productDetails.ejs");
});





