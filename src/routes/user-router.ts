import { Router } from "express";
import UserController from "../controllers/user-controller";
import authMiddleware from "../middlewares/auth";

export const userRouter = Router();

userRouter.post("/", authMiddleware, UserController.createUser);
userRouter.post("/login", UserController.login);
userRouter.post("/logout", authMiddleware, UserController.logout);

userRouter.get("/", UserController.getAll);

userRouter.patch("/:username", authMiddleware, UserController.update);

userRouter.delete("/:username", authMiddleware, UserController.delete);
