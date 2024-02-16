import express from "express";
import http from "http";


const app = new express();


const server = http.createServer((req, res) =>
{
    res.render("index.ejs");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT , () => console.log("server is running on port 3000."))




