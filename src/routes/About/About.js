import CardDetail from "../../components/CardDetail/CardDetail";
import Container from "../../components/Container/Container";
import CustomText from "../../components/CustomText/CustomText";
import CustomTextWithLine from "../../components/CustomTextWithLine/CustomTextWithLine";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import { SECTION_TOW } from "../../data/info";
import { size } from "../../constant/devices";
import styled from "styled-components";

const AboutImage = styled(ImageWrapper)`
  // Default Config
  max-width: 100%;
  @media only screen and (min-width: ${size.mobileL}) and (max-width: ${size.laptop}) {
    max-width: 80%;
  }

  @media only screen and (min-width: ${size.laptop}) and (max-width: ${size.desktop}) {
    max-width: 400px;
  }
`;

const About = (props) => {
  return (
    <Container
      horizontal
      gap={"2em"}
      align="flex-start"
      justify="space-between"
      wrap="wrap"
    >
      <Container justify="flex-start" align="center">
        <AboutImage
          background={require("../../assets/images/img_13.png")}
          height="auto"
          padding="3em"
          btr="0"
          btl="30px"
          bbl="0"
          bbr="30px"
        >
          <Container
            padding="0 0 1.5em"
            horizontal
            align="center"
            gap={"1em"}
            margin="0"
          >
            <CustomTextWithLine text="About me" />
          </Container>
          <CustomText fw={"500"} fz={"1em"} lh={"32px"} color={"#fff"}>
            I am a consultant, I am a trainer, I am a leader, I am a friend. I
            owe this to my 30 years of experience, which have put me in front of
            ever-challenging situations in the field of communication, both
            personal and corporate, intervening in group dynamics and in
            modifying of behaviour.
          </CustomText>
        </AboutImage>
      </Container>
      <Container
        gap={"1em"}
        wrap="wrap"
        align="flex-start"
        justify="center"
        margin="0"
        horizontal
        grow={1}
      >
        <Container gap="1em" margin="0">
          {SECTION_TOW.filter((item) => item.id % 2 !== 0).map((item, i) => (
            <CardDetail item={item} key={item.id.toString()} />
          ))}
        </Container>
        <Container gap="1em" margin="0">
          {SECTION_TOW.filter((item) => item.id % 2 === 0).map((item, i) => (
            <CardDetail item={item} key={item.id.toString()} />
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default About;
