import React from "react";
import styled from "styled-components";

const CustomText = styled.span`
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fz};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  letter-spacing: ${(props) => props.ls};
  text-transform: ${(props) => props.tt};
  width: ${(props) => props.width};
  text-align: ${(props) => props.ta};
`;

export default React.memo(CustomText);
