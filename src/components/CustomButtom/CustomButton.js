import styled from "styled-components";

const CustomButton = styled.button`
  padding: ${(props) => props.padding || "1em 2em"};
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.bg || "#cf0303"};
  box-shadow: ${(props) => props.shadow || "0px 4px 25px rgba(207, 3, 3, 0.2)"};
  border-radius: ${(props) => props.rounded || "3em"};
  border: ${(props) => props.border || "none"};
  cursor: pointer;
  font-size: 1em;
`;

export default CustomButton;
