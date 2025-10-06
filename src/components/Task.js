import styled from "styled-components";

export default function Task({loadAmount, isHighPriority}) {
    return(
        <TaskContainer isHighPriority={isHighPriority}>
            {loadAmount}
        </TaskContainer>
    );
}

const TaskContainer = styled.div`
  width: 50px;
  height: 30px;
  padding: 4px;
  border-radius: 4px;
  background-color: ${(props) => (props.isHighPriority ? "#ff5555" : "#4c8eafff")};
  border: ${(props) => (props.isHighPriority ? "2px solid #ff0000" : "2px solid #005f99")};
  font-size: 14px;
  font-family: Monospace, serif;
  color: white;
  margin-bottom: 4px;
`;
