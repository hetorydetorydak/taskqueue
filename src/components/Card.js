import styled from "styled-components"; 

export default function Card({title , isHighPriority, content}){ 
    return (
        <CardContainer isHighPriority={isHighPriority}>
          <CardTitle>{title}</CardTitle>
          <CardContents>{content}</CardContents>
        </CardContainer>
    );
}

const CardContainer = styled.div`
  min-width: 300px;     
  min-height: 140px;    
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: ${(props) => (props.isHighPriority ? "#ffdddd" : "#f9f9f9")};
  border: ${(props) => (props.isHighPriority ? "2px solid #ff5555" : "1px solid #ddd")};
  color: ${(props) => (props.isHighPriority ? "#ff0000" : "#333")};
  transition: all 0.3s ease;
  cursor: pointer;
  overflow-y: auto;
  padding-right: 22px;

   &::-webkit-scrollbar {
    width: 5px;
    height: 80%;
  }
  &::-webkit-scrollbar-track {
    background: transparent; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => (props.isHighPriority ? "#ff5555" : "#888")};
    border-radius: 5px;
  }

`;

const CardTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-family: Monospace, serif;
`;

const CardContents = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;