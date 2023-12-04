import React, { useState, useEffect} from 'react';
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    TextField,
    Dialog,
    MenuItem
  } from "@material-ui/core";
  import { useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useSelector } from 'react-redux';
  
 
  
  
  
  import useStyles from "./styles";
import { createTask, updateTask } from '../../actions/Task';
  

const Form = ({open, setOpen, currentId , setCurrentId, opens , setOpens}) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [postData, setPostData] = useState({title:'', description:'', assignee:'', dueDate:'', status: ''})
    
  
    const task = useSelector((state) =>
    currentId
      ? state.tasks.find((message) => message._id === currentId)
      : null
  );


  const clear = () => {
    setCurrentId(0);
    setPostData({title:'', description:'', assignee:'', dueDate:'', status: ''});
  };
  

  useEffect(() => {
    if (task) setPostData(task);
  }, [task]);
  

  useEffect(() => {
    if (!task?.title) clear();
    if (task) setPostData(task);
  }, [task]);
  
  const handleSubmit = (e) => {
   e.preventDefault();

   if(currentId === 0){

     dispatch(createTask(postData));
     setOpen(false);
     clear();
   }
   else{
    dispatch(updateTask(currentId,{...postData}))
    setOpens(false);
   clear();
   }
  }  

  const handleCloses =() => {
   setCurrentId(0)
   
    setOpens(false);
  }
  const handleClose =() => {
    setOpen(false);
   
  }

 

  return (
    <div>
    { open && (
        <Dialog open={open} >
    <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
     <AddTaskIcon />
      </Avatar>
      <CancelIcon className={classes.cancel} onClick={handleClose}/>
       <Typography variant="h5"> Add Task</Typography> 

      
      <form className={classes.form} >
        <Grid container spacing={2}>
          <>
            <Grid item xs={12} sm={12}>
              <TextField
              name="Title"
                label="Title"
                value={postData.title}
                margin="normal"
                variant="outlined"
                autoFocus
                onChange={(e) => setPostData({...postData, title: e.target.value})}
                fullWidth
                required
                type="text"
              
                />
              
              <TextField
              name="description"
                label="Description"
                value={postData.description}
                margin="normal"
                variant="outlined"
                onChange={(e) => setPostData({...postData, description: e.target.value})}
 
                fullWidth
             
                required
                type="text"
            />
              
            <TextField
              name="assignee"
              label="Assignee"
              value={postData.assignee}
              variant="outlined"
              onChange={(e) => setPostData({...postData, assignee: e.target.value})}
 
              fullWidth
              margin="normal"
              required
              type="text"
            />
            <TextField
            name="date"
              label="Enter Date  (Due Date)" 
              value={postData.dueDate}
              variant="outlined"
              onChange={(e) => setPostData({...postData, dueDate: e.target.value})}
 
              fullWidth
              margin="normal"
              required
              type="date"
              InputLabelProps={{ shrink: true }} />

<TextField 
       
          select
         name='status'
         variant="outlined"
         label="Status"
         fullWidth
         value={postData.status}
         onChange={(e) => setPostData({ ...postData, status: e.target.value})}
         >
          <MenuItem value="completed">Completed </MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          </TextField>
          </Grid>
         </>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          ADD Task
        </Button>
        <Button
    variant="contained"
    color="secondary"
    size="small"
    onClick={clear}
    fullWidth
  >
    Clear
  </Button>
        
      </Grid>
      </form>
    </Paper>

  </Dialog>
    )}
    { opens && (
        <Dialog open={opens} >
    <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
     <AddTaskIcon />
      </Avatar>
      <CancelIcon className={classes.cancel} onClick={handleCloses}/>
      <Typography variant="h5"> Edit Task</Typography>
      <form className={classes.form} >
        <Grid container spacing={2}>
          <>
            <Grid item xs={12} sm={12}>
              <TextField
              name="Title"
                label="Title"
                value={postData.title}
                margin="normal"
                variant="outlined"
                autoFocus
                onChange={(e) => setPostData({...postData, title: e.target.value})}
                fullWidth
               
                required
                type="text"
              
                />
              
              <TextField
              name="description"
                label="Description"
                value={postData.description}
                margin="normal"
                variant="outlined"
                onChange={(e) => setPostData({...postData, description: e.target.value})}
 
                fullWidth
             
                required
                type="text"
            />
              
            <TextField
              name="assignee"
              label="Assignee"
              value={postData.assignee}
              variant="outlined"
              onChange={(e) => setPostData({...postData, assignee: e.target.value})}
 
              fullWidth
              margin="normal"
              required
              type="text"
            />
            <TextField
            name="date"
              label="Enter Date  (Due Date)" 
              value={postData.dueDate}
              variant="outlined"
              onChange={(e) => setPostData({...postData, dueDate: e.target.value})}
 
              fullWidth
              margin="normal"
              required
              type="date"
              InputLabelProps={{ shrink: true }} />

<TextField 
       
          select
         name='status'
         variant="outlined"
         label="Status"
         fullWidth
         value={postData.status}
         onChange={(e) => setPostData({ ...postData, status: e.target.value})}
         >
          <MenuItem value="completed">Completed </MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          </TextField>
          </Grid>
         </>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          ADD Task
        </Button>
        <Button
    variant="contained"
    color="secondary"
    size="small"
    onClick={clear}
    fullWidth
  >
    Clear
  </Button>
        
      </Grid>
      </form>
    </Paper>
  </Dialog>
    )}



    </div>
  )
}

export default Form;