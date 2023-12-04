import * as api from "../api";




export const getTask = () => async(dispatch) => {
    try {
        const { data }  = await api.fetchTasks();
        
    
        dispatch({ type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message);
    }
    }


export const createTask = (task) => async(dispatch) => {
    try {
        
        const  { data } = await api.createTasks(task);
        
        dispatch({ type: "CREATE", payload: data});
    } catch (error) {
    console.log(error);
        
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
      await api.deleteTask(id); 
      console.log(id);
     
  
      dispatch({ type: "DELETE", payload: id });
    } catch (error) {
      console.log(error);
    }
  };



  export const updateTask = (id, task) => async (dispatch) => {
    try {
      const { data } = await api.updateTask(id, task);
  
      dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
      console.log(error);
    }
  };