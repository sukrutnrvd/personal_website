import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #000000;
  border: 4px solid #ffffff;
  box-shadow: 4px 4px 0 #ffffff, 8px 8px 0 #000000;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  user-select: none;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 0 #ffffff, 4px 4px 0 #000000;
  }

  &:active {
    box-shadow: 1px 1px 0 #ffffff, 2px 2px 0 #000000;
    transform: translate(1px, 1px);
  }
`;

export default Button;
