const http = require("http");
const fetch = require("node-fetch");
const express = require("express");
const app = express();

app.get("/", async (request, response) => {
  const originUrl = request.headers.origin;
  const params = {
    origin: originUrl,
    token: process.env.SECRET,
  };

  const tokenResponse = await fetch("https://trefle.io/api/auth/claim", {
    method: "POST",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
  });

  const json = await tokenResponse.json();
  console.log(json);
  response.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET, PATCH, POST, PUT, DELETE, OPTIONS",
  });
  response.end(JSON.stringify(json));
  console.log(Date.now() + " Ping Received");
});
app.listen(process.env.PORT);
