import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  color: yellow;
  background-color: blue;


  &:hover,
  &:focus {
    color: blue;
    background-color: yellow;
    cursor: pointer;
  }
`;