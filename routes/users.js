import express from "express";
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/users.js";
// import Users from "../models/users.js"


const router = express.Router();


// all routes in here starting with /users
router.get('/',getUsers);

router.post('/', createUser);

router.get('/:id',getUser)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)

export default router;