const { Schema , model } = require("mongoose")

const TaskSchema = new Schema(
  {
  title: { type: String, required: true },
  description: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  owner: { type: Schema.Types.ObjectId, required: true, ref: "users" }
  }, 
  {
    timestamps: true
  }
);

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;