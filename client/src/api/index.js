import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000",
  });

export const fetchTasks = () => API.get("/task");
export const createTasks = (newTask) => API.post("/task", newTask);
export const updateTask = (id, updatedTask) =>
API.patch(`/task/${id}`, updatedTask);

export const deleteTask = (id) => API.delete(`/task/${id}`);


export const signIn = (FormData) => API.post("/users/signin", FormData);
export const signUp = (FormData) => API.post("/users/signup", FormData);