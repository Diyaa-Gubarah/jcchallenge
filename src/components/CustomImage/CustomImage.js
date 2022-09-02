import styled from "styled-components";

const Brand = styled.img`
  width: ${(props) => props.width || "8em"};
  height: ${(props) => props.height || "2em"};
  object-fit: contain;
  margin: ${(props) => props.margin || "1em"};
`;

export default Brand;
