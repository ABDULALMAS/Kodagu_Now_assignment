import express from "express";


import { createTasks , deleteTask, getTasks, updateTask} from "../controllers/Task.js";
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTasks);
router.delete("/:id",deleteTask);
router.patch("/:id", updateTask);




export default router;