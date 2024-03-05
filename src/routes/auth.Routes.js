import { Router } from "express";
import { login, register } from "../controllers/auth.Controller.js";

const authrouter = Router();

authrouter.post("/register", register);
authrouter.post("/login", login);

export default authrouter;
