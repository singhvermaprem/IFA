import express from "express";
import http from "http";


const app = new express();


const server = http.createServer((req, res) =>
{
    res.render("C:\Web Development Project\IFA Ecommerce\views\index.ejs");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT , () => console.log("prem server is running on port 3000."))




