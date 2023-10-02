import express, { json } from "express";
import { userRouter } from "./routes/user-router";

const PORT = 36000;
const app = express();
app.use(json());

// ------------------ ROUTING ------------------ //

// Es necesario que /api/user esté primero que /api, sino todas las solicitudes que se hagan a /api/users las maneja /api.
app.use("/api/users", userRouter);

// Siempre es una buena práctica el configurar un endpoint para obtener el estado e info general del servidor.
app.use("/api", (req, res) => {
  res.status(200).json({
    name: "RESTful API for user management",
    version: "1.0.0",
    running: true,
    paths: ["/api/users", "/api/users/login"],
  });
});

// ------------------ SERVER ------------------ //

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
