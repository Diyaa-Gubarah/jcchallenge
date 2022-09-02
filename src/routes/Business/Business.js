import CardItem from "../../components/CardItem/CardItem";
import Container from "../../components/Container/Container";
import CustomTextWithLine from "../../components/CustomTextWithLine/CustomTextWithLine";
import { SECTION_ONE } from "../../data/info";
import styled from "styled-components";

const BusinessCard = styled(Container)`
  // Default Config
  gap: 1em;
  padding: ${(props) => props.rise && "2em 0 0 0"};
  @media only screen and (max-width: 540px) {
    width: 100%;
    padding: 0;
  }
`;

const Business = () => {
  return (
    <Container
      horizontal
      margin={"3em 0"}
      align="center"
      gap={"2em"}
      wrap="wrap"
      width="100%"
    >
      <CustomTextWithLine text="My Business" textColor={"#151E2C"} ta="left" />

      <Container
        gap={"1em"}
        wrap="wrap"
        align="center"
        justify="center"
        horizontal
      >
        <BusinessCard>
          {SECTION_ONE.filter((item) => item.id % 2 !== 0).map((item, i) => (
            <CardItem item={item} key={item.id.toString()} />
          ))}
        </BusinessCard>
        <BusinessCard rise>
          {SECTION_ONE.filter((item) => item.id % 2 === 0).map((item, i) => (
            <CardItem item={item} key={item.id.toString()} />
          ))}
        </BusinessCard>
      </Container>
    </Container>
  );
};

export default Business;
