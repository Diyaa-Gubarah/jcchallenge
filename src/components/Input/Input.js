import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.5em 0.5em;
  background-color: #fff;
  border: 1px solid var(--text_sc);
  border-radius: 4px;
  width:100%;
`;

export default React.memo(Input)
