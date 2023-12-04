import React, { useState} from 'react'
import ShiftHeader from '../TaskHeader/TaskHeader'
import "./styles.css"

import TaskRow from '../TaskRow/TaskRow'
import Form from "../Form/Form";
import { useSelector } from 'react-redux';
import Chart from '../Chart/Chart';
import Navbar from '../Navbar/Navbar';









const ShiftTable = () => {
  const tasks = useSelector((state) => state.tasks)
  const [currentId, setCurrentId] = useState(null);

  const [open, setOpen] = useState(false);

  
  const handleClick = () => {
    setOpen(true);
  }






return(
    <>
    <div className="shiftTableMain">
     <div className="shiftTableHead">
      <h3>Title</h3>
      <h3 className='shiftTableDesc'>Description</h3>
      <h3>Assignee</h3>
      <h3>Due Date</h3>
      <h3 className="shiftTableHead4">Status</h3>
     </div>
     </div>


{ tasks.map((task) => (
   <TaskRow task={task} currentId={currentId} setCurrentId={setCurrentId}/>
))

  }


<Form  open={open} setOpen={setOpen} currentId={currentId} setCurrentId={setCurrentId}/>

<div className="shiftTableFooter">
    <button onClick={handleClick}><span>+ </span>Task</button>
     </div>
    
    
</>
)


}














const TaskMain = () => {
  return (
    <>
      <Navbar />
    <div className="shiftMain">
    <div>
      <ShiftHeader />
      <ShiftTable />
     
    </div>
   <Chart />
   
   
    
  </div>
  </>
)
  
}

export default TaskMain