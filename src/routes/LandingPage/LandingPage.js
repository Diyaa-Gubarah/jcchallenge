import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Brand from "../../components/CustomImage/CustomImage";
import Container from "../../components/Container/Container";
import CustomButton from "../../components/CustomButtom/CustomButton";
import CustomText from "../../components/CustomText/CustomText";
import EmptySpan from "../../components/EmptySpan/EmptySpan";
import { FiYoutube } from "react-icons/fi";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import { size } from "../../constant/devices";
import styled from "styled-components";

const LandingLeft = styled(Container)`
  // Default Config
  width: 100%;
  gap: 1em;
  padding: 0 1.5em 0 0;

  @media only screen and (max-width: ${size.mobileL}) {
    text-align: left;
    gap: 0.75em;
  }
  @media only screen and (min-width: 860px) and (max-width: ${size.desktop}) {
    width: 43%;
    align-items: flex-start;
    gap: 1em;
    padding: 0;
  }
`;

const FixedContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const LandingPage = () => {
  return (
    <Container horizontal gap="2em" align="center" justify="center" wrap="wrap">

      <FixedContainer>
        <Brand
          src={require("../../assets/images/v_line.png")}
          width={"8px"}
          height={"3em"}
          margin={"0"}
        />
        <FaLinkedinIn size="1.3em" color="#CF0303" />
        <FiYoutube size="1.25em" color="#CF0303" />
        <FaInstagram size="1.3em" color="#CF0303" />
        <Brand
          src={require("../../assets/images/v_line.png")}
          width={"8px"}
          height={"3em"}
          margin={"0"}
        />
      </FixedContainer>
      <LandingLeft gap={"2em"} margin="0" wrap="wrap">
        <CustomText
          fw={"700"}
          fz={"0.9em"}
          lh={"1.1em"}
          color={"#CF0303"}
          ls={"0.51em"}
          tt={"uppercase"}
        >
          Listen, Learn, Guide
        </CustomText>
        <CustomText fw={"700"} fz={"2.834em"} lh={"65px"} color={"#151E2C"}>
          Realise your goals
          <CustomText color={"#CF0303"}>{` And live `}</CustomText>
          as you wish
        </CustomText>
        <CustomText fw={"500"} fz={"1em"} lh={"32px"} color={"#9D9D9D"}>
          If you are in focus and want to realise your goals, both personal and
          professional, you are on the right track. Together we can do the rest:
          work on your self-awareness and prepare you for the challenges of the
          future.
        </CustomText>
        <CustomButton>Find out who they are</CustomButton>
      </LandingLeft>

      <Container
        horizontal
        margin={"0"}
        gap={"1em"}
        wrap="wrap"
        justify="center"
      >
        <ImageWrapper margin="0 1em" width="180px">
          <ImageWrapper
            width="180px"
            bottom={"-1.2em"}
            right={"-1.2em"}
            position="absolute"
            background={require("../../assets/images/person_2.png")}
          />
        </ImageWrapper>
        <ImageWrapper margin="20% 1em 0" width="180px">
          <ImageWrapper
            width="180px"
            bottom={"0.9em"}
            right={"0.9em"}
            position="absolute"
            background={require("../../assets/images/person_1.png")}
          />
        </ImageWrapper>
      </Container>
    </Container>
  );
};

export default LandingPage;
