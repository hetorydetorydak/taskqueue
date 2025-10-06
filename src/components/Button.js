import styled from "styled-components";

export default function Button({label, onClick}) {
    return(
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

const ButtonContainer = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #4c8eafff;
  color: white;

  &:hover {
    transform: scale(1.05);
    background-color: #357ab8ff;
  }
    
  &:active {
    transform: scale(0.95);
    background-color: #2a5d7fff;
  }
    
  `;