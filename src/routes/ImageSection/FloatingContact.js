import CustomButton from "../../components/CustomButtom/CustomButton";
import CustomTextWithLine from "../../components/CustomTextWithLine/CustomTextWithLine";
import EmptySpan from "../../components/EmptySpan/EmptySpan";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import styled from "styled-components";

const FooterFloating = styled(ImageWrapper)`
  box-shadow: 0px 4px 66px rgba(47, 44, 44, 0.05);
  border-radius: 5px;
  margin: 0 auto -8em;
  padding: 2em;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 2em;
  left: 0%;
  right: 0%;
  z-index: 2;
`;

const FloatingContact = () => {
  return (
    <FooterFloating
      background={require("../../assets/images/footer_floating_bg.png")}
      height="auto"
      width="90%"
    >
      <CustomTextWithLine text="Do you want to start a path together?" />
      <CustomButton bg="#fff" color="#cf0303" border="2px solid " shadow>
        Contact Now
      </CustomButton>
    </FooterFloating>
  );
};

export default FloatingContact;
