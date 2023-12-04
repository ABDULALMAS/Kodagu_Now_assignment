import React, { Fragment, useState} from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import  IconButton  from "@material-ui/core/IconButton";
import useStyles from "./styles";
import { deleteTask} from "../../actions/Task";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";


const TaskRow = ({ task, currentId, setCurrentId }) => {
    const [open, setOpen] = React.useState(false);
    const [opens, setOpens] = React.useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();


    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
        
      };
    

      const onDelete = () => {
        setOpen(true);
        console.log(open);
      };

      const handleEdit = () => {
        setOpens(true);
      }

      const handleAlert = () => {
        alert("Sign In to edit task!")
      }

      const handleDelete = () => {
        alert("Sign In to delete a task")
      }
    
      return(
        <>
        <Dialog
             open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          Are you sure you want to delete? 
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} fullWidth color='secondary'>
            Cancel
          </Button>
          <Button  fullWidth color='primary' autoFocus onClick={() => dispatch(deleteTask(task._id))}>
          
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      
   

      
    
      <div className="shiftTableRow">
          <p className="shiftTableDate">{task.title}</p>
          <p className="shiftTableStartTime">{task.description}</p>
          <p className="shiftTableStartTime assignee">{task.assignee}</p>
          <p className="shiftTableStartTime dueDate">{task.dueDate}</p>
          <div className={task.status === "completed" ? "shiftTableEndTime": "shiftTableDiff"}>
           <p>{task.status}</p>
          </div>
         
          <IconButton
            aria-label='delete'
            className={classes.buttonCardDelete}
            
          >
            <DeleteForeverIcon onClick={ user ? (onDelete) : (handleDelete)} />
          </IconButton>

          <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(task._id);
                
               
              }}
              style={{ color: "black" }}
              size="small"
            >
              <MoreHorizIcon fontSize="default" onClick={user ? (handleEdit) : (handleAlert)} 
              
              className={classes.edit}
              
              />
            </Button>
            
         <Form opens={opens} setOpens={setOpens} currentId={currentId} setCurrentId={setCurrentId}/>
         </div> 
     </>
      );
    };

export default TaskRow