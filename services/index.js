import express from "express";
import { connectToDatabase } from "./utils/db.connection.js";
import userRoutes from "./routes/user.Routes.js";

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
const port = process.env.BACKEND_PORT || 9000;


connectToDatabase(); //* Setting up a connection with the database */

app.listen(port, () => {
  console.log(`Server Is up and running at port ${port}`);
});
