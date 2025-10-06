import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";
import Task from "./Task";


function Grid({  onAddTask, onAdmitTasks, pendingTaskList, admittedTaskList = {}}) {
  return (
    <GridWrapper>
      
        <LeftPanel>
            <Card isHighPriority title={"High Priority Task"}
                  content = {admittedTaskList.highPriorityTasks.length === 0 ? (
                      <p>No high priority tasks yet!</p>
                    ) : (
                      admittedTaskList.highPriorityTasks.map((taskItem, index) => (
                        <Task
                          key={index}
                          loadAmount={taskItem.loadAmount}
                          isHighPriority={taskItem.isHighPriority}
                        />
                      ))
                    )} 
              />
            <Card isHighPriority={false} title={"Regular Queue 1"}
                  content = {admittedTaskList.regularTasks1.length === 0 ? (
                      <p>No regular tasks yet!</p>
                    ) : (
                      admittedTaskList.regularTasks1.map((taskItem, index) => (
                        <Task
                          key={index}
                          loadAmount={taskItem.loadAmount}
                          isHighPriority={taskItem.isHighPriority}
                        />
                      ))
                    )}
            />
            
            <Card title={"Regular Queue 2"} 
                  content = {admittedTaskList.regularTasks2.length === 0 ? ( 
                      <p>No regular tasks yet!</p>
                    ) : (
                      admittedTaskList.regularTasks2.map((taskItem, index) => (
                        <Task
                          key={index}
                          loadAmount={taskItem.loadAmount}
                          isHighPriority={taskItem.isHighPriority}
                        />
                      ))
                    )}
            />
            <Card title={"Regular Queue 3"} 
                  content = {admittedTaskList.regularTasks3.length === 0 ? (
                      <p>No regular tasks yet!</p>
                    ) : ( 
                      admittedTaskList.regularTasks3.map((taskItem, index) => (
                        <Task
                          key={index}
                          loadAmount={taskItem.loadAmount}
                          isHighPriority={taskItem.isHighPriority}
                        />
                      ))
                    )}
            />
        </LeftPanel>
        <RightPanel>
            <ButtonRow>
                <Button label={"Add Task"} onClick={onAddTask}/>
                <Button label={"Admit Tasks"} onClick = {onAdmitTasks} />
            </ButtonRow>
            <Card title={"Task List"} 
                  content = {pendingTaskList.length === 0 ? (
                      <p>No tasks yet!</p>
                    ) : (
                      pendingTaskList.map((taskItem, index) => (
                        <Task
                          key={index}
                          loadAmount={taskItem.loadAmount}
                          isHighPriority={taskItem.isHighPriority}
                        />
                      ))
                    )}>
              
            </Card>
            
        </RightPanel>
    </GridWrapper>
  );
}

export default Grid;



const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* split screen in half */
  width: 100vw;                   /* full screen width */
  height: 100vh;                  /* full screen height */
`;

const LeftPanel = styled.div`

  display: flex;
  flex-direction: column; 
  gap: 12px;
  padding: 20px;
  border-right: 1px solid #ccc;
  overflow-y: auto; 
`;

const RightPanel = styled.div`
  
  display: flex;
  flex-direction: column;  
  border-left: 1px solid #ccc; 
  gap: 12px;
  padding: 20px;
  overflow-y: auto;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;   /* buttons in a row */
  gap: 12px;
`;


