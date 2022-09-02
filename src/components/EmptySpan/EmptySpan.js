/**
 * https://css-tricks.com/hash-tag-links-padding/
 */

import styled from "styled-components";

const EmptySpan = styled.span`
  content: "&nbsp";
  padding-bottom: ${(props) => props.padding};
  display: inline;
`;

export default EmptySpan;
