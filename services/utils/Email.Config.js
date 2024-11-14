import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { HTML_TEMPLATE } from "./EmailHTMLTemplate.js";
const sheetLink = process.env.ATTENDANCE_SHEET_LINK;

export const sendEmail = async ({
  to,
  studentName,
  currentAttendance,
}) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_SENDER_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_SENDER_EMAIL,
    to,
    subject: "Your Weekly Attendance Update",
    html: HTML_TEMPLATE({ studentName, sheetLink, currentAttendance }),
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error Sending Mail", error.message);
  }
};
