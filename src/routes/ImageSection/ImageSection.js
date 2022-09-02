import Brand from "../../components/CustomImage/CustomImage";
import Container from "../../components/Container/Container";
import CustomText from "../../components/CustomText/CustomText";
import CustomTextWithLine from "../../components/CustomTextWithLine/CustomTextWithLine";
import EmptySpan from "../../components/EmptySpan/EmptySpan";
import FloatingContact from "./FloatingContact";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import styled from "styled-components";

const MarginContainer = styled(Container)`
  margin-left: auto;
`;

const BackgroundImage = styled(Container)`
  & .leftImage {
    // Default Config
    width: 65vw;
    @media only screen and (max-width: 800px) {
      width: 85vw;
    }
  }
  & .rightImage {
    @media only screen and (max-width: 800px) {
      width: 50vw;
      height: auto;
    }
  }
`;

const ImageSection = () => {
  return (
    <BackgroundImage
      horizontal
      margin={"3em 0"}
      gap={"2em"}
      align="center"
      justify="space-between"
      full
      wrap="wrap"
    >
      <ImageWrapper
        className="leftImage"
        background={require("../../assets/images/img_17.png")}
        height="auto"
        padding="4em"
        margin="0"
        btr="68px"
        btl="0"
        bbl="0"
        bbr="68px"
      >
        <Container
          horizontal
          padding="0 0 1.5em"
          align="center"
          gap={"1em"}
          margin="0"
          grow={1}
        >
          <CustomTextWithLine
            text="What they say about me"
            textColor="#151E2C"
          />
        </Container>

        <CustomText
          fw={"500"}
          fz={"1em"}
          lh={"32px"}
          color={"rgba(21, 30, 44, 0.5)"}
        >
          Today I can call myself a trainer because, in over 30 years of
          experience, I have trained myself. In all this time, my meetings and
          tips have left their mark on the people I have worked with. And this
          is what they say about me.
        </CustomText>
        <Container gap={"1em"} margin=" 0" align="center">
          <Brand
            src={require("../../assets/images/img_18.png")}
            alt="brand"
            width="30%"
            height={"30%"}
          />

          <CustomText
            fw={"500"}
            fz={"1.2em"}
            lh={"34px"}
            color={"#151E2C"}
            width="fit-content"
            ta="center"
          >
            I felt heard for the first time in my life. Thanks to Elia and
            private sessions with him, I overcame the difficulties that made my
            work a burden.
          </CustomText>
        </Container>
      </ImageWrapper>
      <MarginContainer
        width="30%"
        margin="0"
        position="absolute"
        className="rightImage"
      >
        <Brand
          src={require("../../assets/images/img_19.png")}
          alt="brand"
          width="100%"
          height={"100%"}
          margin="0"
        />
        <EmptySpan id="contact" padding="2em" />
      </MarginContainer>

      <FloatingContact />
    </BackgroundImage>
  );
};

export default ImageSection;
