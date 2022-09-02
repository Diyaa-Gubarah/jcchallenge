import Container from "../../components/Container/Container";
import CustomTextWithLine from "../../components/CustomTextWithLine/CustomTextWithLine";
import SectionItem from "../../components/SectionItem/SectionItem";

const Services = () => {
  return (
    <Container margin={"2em auto"} gap={"2em"}>
      <Container
        horizontal
        align="center"
        justify="center"
        gap={"1em"}
        width="100%"
      >
        <CustomTextWithLine
          text=" What can we do together"
          textColor="#151E2C"
          ta="center"
          left
        />
      </Container>

      {/* ------------------- */}
      <SectionItem
        background={require("../../assets/images/img_14.png")}
        color={"#6D74CA"}
      />
      <SectionItem
        background={require("../../assets/images/img_15.png")}
        color={"#EFD288"}
        swap
      />
      <SectionItem
        background={require("../../assets/images/img_16.png")}
        color={"#6695FF"}
      />
      {/* ------------------- */}
    </Container>
  );
};

export default Services;
