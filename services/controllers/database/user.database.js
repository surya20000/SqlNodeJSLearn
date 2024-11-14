import User from "../../models/users.Schema.js";
import { addRow } from "../googleSheetControllers/GetUsersAttendance.js";
import { sendEmail } from "../../utils/Email.Config.js";
import { getAllStudentsAttendanceDetail } from "../googleSheetControllers/GetUsersAttendance.js";

export const loginUser = async (req, res) => {
  try {
    const { userName, userEmail, password } = req.body;
    if ((userName, userEmail, password)) {
      const createdUser = await User.create({ userName, userEmail, password });
      await addRow({ userName, userEmail });
      return res.status(201).json({ createdUser });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const sendWeeklyAttendanceUpdate = async (req, res) => {
  try {
    const allStudentsData = await getAllStudentsAttendanceDetail()
    
    for (let i = 0; i < allStudentsData.length; i++) {
      await sendEmail({
        currentAttendance: allStudentsData[i].currentAttendance,
        studentName: allStudentsData[i].studentName,
        to: allStudentsData[i].studentEmail,
      });
    }
    res.status(200).send("Email Sent Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
