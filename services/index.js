import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import fs from "fs";

const responseSheetId = "1Bkjcqn5JRzXvPFawLickRe6_0EVR6qSLgnnwn6ACnOI";

const credentials = JSON.parse(
  fs.readFileSync("attendance-tracker-441406-f9043162c0cf.json")
);

const serviceAccountAuth = new JWT({
  email: credentials.client_email,
  key: credentials.private_key.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(responseSheetId, serviceAccountAuth);

const getRow = async () => {
  try {
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    await sheet.loadHeaderRow();
    const columnName = sheet.headerValues;
    console.log("column's ", columnName);

    rows.forEach((student) => {
      const StudentName = student._rawData[0];
      const StudentAttendancePercentage = Number(
        student._rawData[9].split(".")[0]
      );
      console.log(
        `Student: ${StudentName}, Percentage:- ${StudentAttendancePercentage}`
      );
    });
  } catch (error) {
    console.error("Error fetching row:", error);
  }
};

getRow();
