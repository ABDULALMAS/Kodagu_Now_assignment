import TaskModel from "../models/Task.js";
import mongoose from "mongoose";



export const getTasks = async(req,res) => {
    try {
      const postTasks = await TaskModel.find();
  
      res.status(200).json(postTasks);
    } catch (error) {
      res.status(404).json({message: error.message});
    }
  }




export const createTasks = async(req, res) => {
    const task = req.body;
    
    const newTask = new TaskModel({
      ...task,
    })
    try {
      await newTask.save();
    
      res.status(201).json(newTask);
    } catch (error) {
      res.status(409).json(error);
      
    }
    }


    export const deleteTask = async (req, res) => {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No shift with that id");
    
      await TaskModel.findByIdAndDelete(id);
    
      res.json({ message: "Shift deleted successfully" });
    };
    

    export const updateTask = async (req, res) => {
      const { id: _id } = req.params;
      const task = req.body;
    
      if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No task with that id");
    
      const updatedTask = await TaskModel.findByIdAndUpdate(_id, task, {
        new: true,
      });
      res.json(updatedTask);
    };