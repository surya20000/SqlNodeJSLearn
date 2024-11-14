import express from "express";
import { loginUser, sendDailyAttendanceUpdate } from "../controllers/database/user.database.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/sendEmail", sendDailyAttendanceUpdate)

export default router;
