export const HTML_TEMPLATE = ({
  studentName,
  sheetLink,
  currentAttendance,
}) => {
  return `
          <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Attendance Update</title>
                    <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        padding: 2px;
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        color: #555;
                        line-height: 1.6;
                    }
                    .button {
                        display: inline-block;
                        color: #ffffff; /* Text color */
                        background-color: #28a745; /* Lightened blue color */
                        padding: 10px 15px;
                        text-decoration: none;
                        border-radius: 5px;
                        margin-top: 20px;
                        font-weight: bold; /* Make the text bold for better readability */
                    }
                    .text{
                        color: #ffffff
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 12px;
                        color: #777;
                    }
                    </style>
                </head>
                <body>
                    <div class="container">
                    <h1>Attendance Update</h1>
                    <p>Dear <strong>${studentName}</strong>,</p>
                    <p>
                        We hope this message finds you well. We would like to inform you about
                        your current attendance status:
                    </p>
                    <p><strong>Current Attendance:</strong> ${currentAttendance}</p>
                    <p>
                        You can view your attendance details and history by clicking the link
                        below:
                    </p>
                    <a href="${sheetLink}" target="_blank" class="button"> <span class="text"> View Attendance Sheet </span> </a
                    >
                    <p>
                        If you have any questions or need further assistance, please do not
                        hesitate to reach out.
                    </p>
                    <p>Best regards,<br />Your Attendance Team</p>
                    <div class="footer">
                        <p>
                        This email was sent to you because you are a valued member of our
                        organization.
                        </p>
                        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
                    </div>
                    </div>
                </body>
            </html>
      `;
};
