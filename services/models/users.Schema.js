import mongoose from "mongoose";

const userLoginSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = new mongoose.model("users", userLoginSchema);
export default User;
