import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    assignee: String,
    dueDate: String,
    status: String,
})

const TaskModel = mongoose.model("TaskModel",taskSchema);

export default TaskModel;