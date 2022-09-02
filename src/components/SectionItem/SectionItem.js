import Container from "../Container/Container";
import CustomButton from "../CustomButtom/CustomButton";
import CustomText from "../CustomText/CustomText";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import styled from "styled-components";

const ResponsiveContainer = styled(Container)`
  width: 60%;
  justify-content: flex-start;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  @media only screen and (max-width: 400px) {
    & .btnContainer * {
      font-size: 0.8em;
    }
  }
`;

function SectionItem({ background, swap = null, color }) {
  return (
    <Container
      horizontal
      margin={"3em 0 0 0"}
      gap={"2em"}
      align="center"
      justify="center"
      wrap="wrap"
      swap={swap}
    >
      <ImageWrapper
        mwidth="200px"
        bbr={swap ? "50%" : "0"}
        bbl={swap ? "50%" : "0"}
        btr={swap ? "0" : "50%"}
        btl={swap ? "0" : "50%"}
        bc={color}
      >
        <ImageWrapper
          bbr={swap ? "50%" : "0"}
          bbl={swap ? "50%" : "0"}
          btr={swap ? "0" : "50%"}
          btl={swap ? "0" : "50%"}
          mwidth="200px"
          bottom={swap ? "-0.5em" : "0.5em"}
          right={swap ? "-0.9em" : "0.9em"}
          position="absolute"
          background={background}
        />
      </ImageWrapper>
      <ResponsiveContainer gap="1em" margin="0">
        <CustomText fw={"700"} fz={"1.5em"} color={"#141E2C"} className="">
          Schedule an appointment
        </CustomText>
        <CustomText fw={"500"} fz={"1em"} lh="24px" color={"#9D9D9D"}>
          All success stories start with a first step: all you have to do is
          fill in the form and schedule our first appointment.
        </CustomText>
        <Container className="btnContainer" horizontal gap={"1em"} margin="0">
          <CustomButton bg="#fff" color="#cf0303" border="2px solid " shadow>
            Find out who I am
          </CustomButton>
          <CustomButton bg="#fff" color="#cf0303" border="2px solid " shadow>
            Contact Now
          </CustomButton>
        </Container>
      </ResponsiveContainer>
    </Container>
  );
}

export default SectionItem;
