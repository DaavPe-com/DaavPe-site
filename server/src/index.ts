import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookiesParser from "cookie-parser";
import { app, server, io } from "./socket/index";

// Middlewares

app.use(express.json());
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
app.use(express.urlencoded());
app.use(cookiesParser());

// Routes
import routes from "./routes/routes";
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use("/api", routes);


server.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});
