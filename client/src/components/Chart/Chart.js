import React from 'react'
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);

const Chart = () => {
  const tasks = useSelector((state) => state.tasks)

  const totalTasks = tasks.length
 


  let arrLen = []
  arrLen = tasks.filter((task) =>(
  task.status === "pending"
 ));
 const pendingTasks = arrLen.length;

    const data = {
        labels: [
          'Total Tasks',
          'Pending Tasks',
          'Completed Tasks'
        ],
        datasets: [{
          label: 'Task Analytics',
          data: [totalTasks, pendingTasks,totalTasks-pendingTasks],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  return (
    <div className='chart' style={{width: "60%", height: "60%" , marginLeft: "40px" , marginTop: "60px"}}>

        <Doughnut data={data}/>
    </div>
  )
}

export default Chart