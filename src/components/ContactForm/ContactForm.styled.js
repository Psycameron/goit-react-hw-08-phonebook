import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  padding: 15px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: tomato;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const Input = styled(Field)`
  all: unset;
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px 0;
  padding: 15px;
  font-size: 20px;
  &:focus-visible {
    border-radius: 4px;
    border: 3px solid lightblue;
  }
`;

export const Button = styled.button`
  background-color: #ededed;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 37px;
  text-decoration: none;
  margin: 10px 0;
  &:hover {
    background-color: #5938f5;
    color: #ffffff;
  }
`;
