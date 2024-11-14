import User from "../../models/users.Schema.js";
import { addRow } from "../googleSheetControllers/GetUsersAttendance.js";
import { sendEmail } from "../../utils/Email.Config.js";

export const loginUser = async (req, res) => {
  try {
    const { userName, userEmail, password } = req.body;
    if ((userName, userEmail, password)) {
      const createdUser = await User.create({ userName, userEmail, password });
      await addRow(userName);
      return res.status(201).json({ createdUser });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const sendDailyAttendanceUpdate = async (req, res) => {
  try {
    await sendEmail({
      currentAttendance: "100%",
      studentName: "Surya Pratap Singh",
      to: "thesuryasingh2003@gmail.com",
    });
    res.status(200).send("Email Sent Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
