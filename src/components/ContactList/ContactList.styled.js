import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  max-width: 650px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  line-height: 1.15;
  padding: 10px 0;
  letter-spacing: 0.05em;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 25px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
    font-size: 32px;
  }
`;

export const Button = styled.button`
  background-color: #ededed;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 16px;
  text-decoration: none;
  &:hover {
    background-color: #5938f5;
    color: #ffffff;
  }
`;
