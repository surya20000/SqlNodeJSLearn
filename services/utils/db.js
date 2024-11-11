import mysql from "mysql2";

const poll = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "surya123",
    database: "notes_app",
  })
  .promise();

// const [resultRows] = await poll.query("SELECT * FROM notes");
// console.log(resultRows);

// const [noteWithID] = await poll.query(`SELECT * FROM notes where notes.id = ?`,[100])
// console.log(noteWithID);

const [addNote] = await poll.query(
    `INSERT INTO notes (title, contents)
    VALUES(?, ?)`,
    ["My third Note", "I Inserted This Note Using Sql Command in node js"]
)
console.log(addNote.insertId);

// 549284495243-aqh031pgde5i6ef9oa48lachhv2h71hl.apps.googleusercontent.com
