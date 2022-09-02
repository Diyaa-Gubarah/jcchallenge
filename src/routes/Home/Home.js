import About from "../About/About";
import Brand from "../../components/CustomImage/CustomImage";
import Business from "../Business/Business";
import Container from "../../components/Container/Container";
import EmptySpan from "../../components/EmptySpan/EmptySpan";
import FloatingContainer from "../../components/FloatingContainer/FloatingContainer";
import ImageSection from "../ImageSection/ImageSection";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services/Services";

export function Home(props) {
  return (
    <>
      <Container padding="1em">
        <LandingPage />
        <FloatingContainer>
          <Brand src={require("../../assets/images/img_1.png")} alt="brand" />
          <Brand src={require("../../assets/images/img_2.png")} alt="brand" />
          <Brand src={require("../../assets/images/img_3.png")} alt="brand" />
          <Brand src={require("../../assets/images/img_4.png")} alt="brand" />
        </FloatingContainer>
        <Business />
        <EmptySpan id="about" padding="1em" />

        <About />
        <EmptySpan id="services" padding="1em" />

        <Services />
      </Container>
      <ImageSection />
    </>
  );
}
