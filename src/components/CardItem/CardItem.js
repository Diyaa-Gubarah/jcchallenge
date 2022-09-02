import Brand from "../CustomImage/CustomImage";
import Container from "../Container/Container";
import CustomText from "../CustomText/CustomText";
import { size } from "../../constant/devices";
import styled from "styled-components";

const ResponsiveContainer = styled(Container)`
  width: 245px;
  margin: 0 auto;

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`;

function CardItem({ item }) {
  return (
    <ResponsiveContainer
      horizontal
      rounded="10px"
      bgc="#F6F6F6"
      align="flex-start"
      padding="0.5em"
    >
      <Brand
        src={item.image}
        alt="brand"
        margin={"0"}
        width="80px"
        height="80px"
      />
      <Container margin="0.5em 0 0" justify="flex-end">
        <CustomText fw={"700"} fz={"1.5em"} lh="-12px" color={"#151E2C"}>
          {item.header}
        </CustomText>
        <CustomText fw={"500"} fz={"0.75em"} color={"#9D9D9D"}>
          {item.sub}
        </CustomText>
      </Container>
    </ResponsiveContainer>
  );
}

export default CardItem;
