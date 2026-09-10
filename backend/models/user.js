import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
});

// to use our schema- userSchema, we need to convert into Model, and we work only created model
export const User = mongoose.model("User", userSchema);

// export const UseUserSchemaAsModelWithNameUser = mongoose.model(
//   "User",
//   userSchema,
// );
