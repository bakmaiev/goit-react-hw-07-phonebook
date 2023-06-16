import { styled } from 'styled-components';

export const FilterInput = styled.input`
  color: #333;
  font-size: 20px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 2px;
  background-color: rgb(255, 255, 255);
  border: none;
  outline: none;
  max-width: 100%;
  border-bottom: 1px solid transparent;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0;
  transition: all 0.3s;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
`;
