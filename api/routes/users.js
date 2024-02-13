import express from "express";

import { test } from "../controllers/user.js";

const router = express.Router();

router.get("/test", test);

export default router;

/*
OAuth with Insomnia REST goes here

API/signup
{
	"name": "test",
	"email": "test@gmail.com",
	"password": "123456"
}

*/
