import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Brand from "../CustomImage/CustomImage";
import Container from "../Container/Container";
import CustomText from "../CustomText/CustomText";
import { FiYoutube } from "react-icons/fi";
import ListItem from "../ListItem/ListItem";
import { MdKeyboardArrowDown } from "react-icons/md";
import { size } from "../../constant/devices";
import styled from "styled-components";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2em;

  & .footerText {
    @media only screen and (${`max-width:${size.mobileL}`}) {
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Footer = () => {
  return (
    <Container bgc="#F7F7F7" margin="0" full gap={"1em"} font="0.8em">
      <Brand
        src={require("../../assets/images/footer_dots.png")}
        margin="0"
        width={"100%"}
        height="auto"
      />
      <GridContainer margin="3em auto" width="90%">
        <Container margin="0" gap={"1em"} className="footerText">
          <Brand
            src={require("../../assets/images/brand.png")}
            alt="Logo"
            margin="0"
          />
          <CustomText
            fw={"400"}
            fz={"1em"}
            lh="35px"
            color={"rgba(60, 60, 60, 0.8)"}
            width="fit-content"
          >
            Proj X has worked for 30 years as a communications consultant,
            expert in group dynamics and behaviour modification. He has educated
            audiences in a variety of industries, appearing as a keynote speaker
            for an impressive number of clients, including Lighthouse, NSA and
            Mango Universe.
          </CustomText>
        </Container>

        <ListItem
          header="Sitemap"
          texts={["Homepage", "About me", "Service"]}
        />

        <ListItem header="Help" texts={["Contact", "Help Center"]} />

        <Container margin="0" gap={"1em"} align="center">
          <CustomText
            fw={"600"}
            fz={"1.5em"}
            lh="35px"
            color={"#151E2C"}
            width="fit-content"
          >
            Social Media
          </CustomText>
          <Container
            horizontal
            gap="2em"
            justify="center"
            align="center"
            
          >
            <FaLinkedinIn size="1.8em" color="#171717" />
            <FiYoutube size="2em" color="#171717" />
            <FaInstagram size="1.8em" color="#171717" />
          </Container>
        </Container>
      </GridContainer>
      <Container gap="1em" margin="1em auto">
        <CustomText
          fw={"400"}
          fz={"1.3em"}
          lh="22px"
          color={"rgba(21, 30, 44, 0.5)"}
          width="fit-content"
        >
          © 2022 Proj X - All Rights Reserved
        </CustomText>
        <Container horizontal gap="0.5em" align="center">
          <CustomText
            fw={"600"}
            fz={"1.em"}
            lh="22px"
            color={"rgba(21, 30, 44, 0.8)"}
            width="fit-content"
          >
            English
          </CustomText>
          <MdKeyboardArrowDown size="1.5em" color="#171717" />
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
