import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const StyledFormTitle = styled.h1`
  margin: 0 auto;
  font-size: 30px;
`;

export const Btn = styled.button`
  align-items: center;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  cursor: pointer;
  max-width: 100%;
  height: 48px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  font-size: 15px;
  text-transform: uppercase;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const FormInput = styled.input`
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

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
