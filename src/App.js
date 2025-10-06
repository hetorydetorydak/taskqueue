import styled from "styled-components";
import Grid from "./components/Grid";
import { useState } from "react";


function App() {

  const [taskList, setTaskList] = useState([])
  const [admittedTasks, setAdmittedTasks] = useState({
    highPriorityTasks: [], 
    regularTasks1: [],
    regularTasks2: [],
    regularTasks3: []
  })
  
  const randomizeLoadAmount = () => {
    return Math.ceil(Math.random() * 100) + 100;
  }
  
  const randomizePriority = () => {
    return Math.random() < 0.2; 
  }

  const addTask = () => {
    const newTask = {
      loadAmount: randomizeLoadAmount(),
      isHighPriority: randomizePriority()
    };

    setTaskList([...taskList, newTask]);

  }

  const admitTasks = () => {
  if (taskList.length === 0) return;

  const highPriorityTaskList = taskList.filter(task => task.isHighPriority);
  const regularTaskList = taskList.filter(task => !task.isHighPriority);

  // Copy current queues
  const queues = [
    [...admittedTasks.regularTasks1],
    [...admittedTasks.regularTasks2],
    [...admittedTasks.regularTasks3],
  ];

  // Distribute tasks to the queue with the least tasks (load balancing)
  regularTaskList.forEach((task) => {
    // Find the queue with the minimum length
    let minQueueIndex = 0;
    let minLength = queues[0].length;

    queues.forEach((queue, index) => {
      if (queue.length < minLength) {
        minLength = queue.length;
        minQueueIndex = index;
      }
    });

    queues[minQueueIndex].push(task);
  });

  setAdmittedTasks({
    highPriorityTasks: [...admittedTasks.highPriorityTasks, ...highPriorityTaskList],
    regularTasks1: queues[0],
    regularTasks2: queues[1],
    regularTasks3: queues[2],
  });

  setTaskList([]);
};



  return (
    <AppContainer>
      <Grid 
        onAddTask={addTask}
        onAdmitTasks={admitTasks}
        pendingTaskList = {taskList}
        admittedTaskList={admittedTasks}/>
    </AppContainer>
  );
}




export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #fffff0;
`;  