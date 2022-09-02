import { device, size } from "../../constant/devices";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.swap
      ? props.horizontal
        ? "row-reverse"
        : "column-reverse"
      : props.horizontal
      ? "row"
      : "column"};
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  gap: ${(props) => props.gap || 0};
  flex-grow: ${(props) => props.grow || 0};
  flex-wrap: ${(props) => props.wrap};
  border-radius: ${(props) => props.rounded || 0};
  font-size: ${(props) => props.font || "1em"};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || "0 auto"};
  background-color: ${(props) => props.bgc || ""};
  max-width: ${(props) => (props.full ? "100%" : "980px")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Container;
