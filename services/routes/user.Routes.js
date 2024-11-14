import express from "express";
import {
  loginUser,
  sendWeeklyAttendanceUpdate,
} from "../controllers/database/user.database.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/sendEmail", sendWeeklyAttendanceUpdate);

export default router;
