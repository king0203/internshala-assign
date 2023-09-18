import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    isDealer: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    coverImg: {
      type: String,
      required: false,
    },
    residence: {
      type: String,
      required: true,
    },
    native: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    services: {
      type: String,
      required: false,
    },
    areas: {
      type: [String],
      required: false,
    },
    totalStars: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    },
    followers: {
      type: Number,
      default: 0,
    },
    contacts: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
