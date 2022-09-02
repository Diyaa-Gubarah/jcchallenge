import styled from "styled-components";

const ImageWrapper = styled.div`
  box-sizing: border-box;
  position: ${(props) => props.position || "relative"};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  z-index: ${(props) => props.z};
  margin: ${(props) => props.margin};
  align-self: ${(props) => props.align};
  background: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: ${(props) => (props.mwidth ? "100%" : props.width)};
  max-width: ${(props) => props.mwidth};
  grow: ${(props) => props.grow};
  height: ${(props) => props.height || "220px"};
  border: ${(props) =>
    props.background ? "none" : `2px solid ${props.bc || "#cf0303"}`};
  padding: ${(props) => props.padding};
  border-top-left-radius: ${(props) => props.btl || "15px"};
  border-top-right-radius: ${(props) => props.btr || "15px"};
  border-bottom-left-radius: ${(props) => props.bbl || "15px"};
  border-bottom-right-radius: ${(props) => props.bbr || "15px"};
`;

export default ImageWrapper;
