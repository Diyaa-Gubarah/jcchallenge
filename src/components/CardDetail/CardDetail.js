import { device, size } from "../../constant/devices";

import Brand from "../CustomImage/CustomImage";
import Container from "../Container/Container";
import CustomText from "../CustomText/CustomText";
import styled from "styled-components";

const ResponsiveContainer = styled(Container)`
  height: max-content;
  @media only screen and (max-width: 500px) {
    height: max-content;
    width: 100%;
  }

  @media only screen and (max-width: ${size.desktop}) and (min-width: ${size.laptop}) {
    height: 245px;
  }
`;

function CardDetail({ item }) {
  return (
    <ResponsiveContainer
      rounded="10px"
      padding="1.5em 1em"
      margin="0"
      width="245px"
      height="245px"
      gap="1em"
    >
      <Container margin="0" align="flex-start" horizontal gap="1em">
        <Brand
          src={item.image}
          alt="brand"
          margin={"0"}
          width="24px"
          height="24px"
        />
        <CustomText
          fw={"700"}
          fz={"1.4em"}
          lh="24px"
          color={"#151E2C"}
          width="fit-content"
        >
          {item.header}
        </CustomText>
      </Container>
      <CustomText fw={"500"} fz={"0.9em"} lh="24px" color={"#9D9D9D"}>
        {item.sub}
      </CustomText>
    </ResponsiveContainer>
  );
}

export default CardDetail;
