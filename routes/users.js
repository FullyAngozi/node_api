import express, { request, response } from "express";
import {
  createUsers,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserInfo,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

router.get("/", getUsers);

router.post("/", createUsers);

router.get("/:id", getUserById);

router.delete("/:id", deleteUserById);

router.patch("/:id", updateUserInfo);

export default router;
