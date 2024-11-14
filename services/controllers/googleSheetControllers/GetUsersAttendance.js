import dotenv from "dotenv";
dotenv.config();
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const responseSheetId = `${process.env.RESPONSE_SHEET_ID}`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(
  __dirname,
  "attendance-tracker-441406-f9043162c0cf.json"
);

const credentials = JSON.parse(fs.readFileSync(filePath));

const serviceAccountAuth = new JWT({
  email: credentials.client_email,
  key: credentials.private_key.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(responseSheetId, serviceAccountAuth);

export const getRow = async () => {
  try {
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    rows.forEach((student) => {
      const StudentName = student._rawData[0];
      const StudentAttendancePercentage = Number(
        student._rawData[0].split(".")[0]
      );
      console.log(
        `Student: ${StudentName}, Attendance Status:- ${
          (StudentAttendancePercentage > 33) &
          (StudentAttendancePercentage < 60)
            ? "Fair"
            : (StudentAttendancePercentage >= 60) &
              (StudentAttendancePercentage < 85)
            ? "Good"
            : (StudentAttendancePercentage >= 85) &
              (StudentAttendancePercentage < 95)
            ? "Amazing"
            : StudentAttendancePercentage >= 95
            ? "Excellent"
            : "Poor"
        }`
      );
    });
  } catch (error) {
    console.error("Error fetching row:", error);
  }
};

export const addRow = async ({ userName, userEmail }) => {
  try {
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      StudentName: userName,
      StudentEmail: userEmail,
      Percentage: "0.00%",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllStudentsAttendanceDetail = async () => {
  try {
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    const allStudentsData = [];

    rows.forEach((student) => {
      const studentName = student._rawData[0];
      const studentEmail = student._rawData[1];
      const currentAttendance = student._rawData[2];

      allStudentsData.push({ studentName, studentEmail, currentAttendance });
    });

    return allStudentsData;
  } catch (error) {
    console.log("Error fetching all students attendance info", error.message);
  }
};