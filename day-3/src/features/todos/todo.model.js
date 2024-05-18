import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorId: { type: String, required: true },
    isCompleted: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: true,
  }
);

const TodoModel = model("mera-todos", todoSchema);

export default TodoModel;
