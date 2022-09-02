import { BiSearchAlt2 } from "react-icons/bi";
import Brand from "../CustomImage/CustomImage";
import Container from "../Container/Container";
import CustomLink from "../CustomLink/CustomLink";
import { FiMenu } from "react-icons/fi";
import React from "react";
import Sidenav from "../SideNav/Sidenav";
import styled from "styled-components";
import { useAppShallowSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: ${(props) => props.rounded || "4px"};
  border: 1px solid var(--primary);
  padding: ${(props) => props.padding || "0.25em"};
  color: var(--primary);
  cursor: pointer;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  height: calc(108vh - 1vw);
  background: var(--card_bg);

  @media only screen and (${`max-width:620px`}) {
    display: none;
  }
`;

const LinkContainer = styled(Container)`
  @media only screen and (${`max-width:620px`}) {
    display: none;
  }
`;

const ButtonContainer = styled(Container)`
  & .menuBtn {
    @media only screen and (${`min-width:620px`}) {
      display: none;
    }
  }
`;


const Navbar = () => {
  const navigate = useNavigate();
  const user = useAppShallowSelector(({ auth }) => auth.data);
  const sideRef = React.useRef();

  const openMenu = React.useCallback(() => {
    if (sideRef.current.open()) sideRef.current.open();
  }, [sideRef]);

  return (
    <Container horizontal justify="space-between" align="center" padding="1em">
      <Sidenav ref={sideRef} />
      <Background />

      <Brand
        src={require("../../assets/images/brand.png")}
        alt="Logo"
        margin="0"
        width="auto"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <Container
        horizontal
        grow={1}
        justify="center"
        align="center"
        gap="2em"
        id="nav-item"
      >
        {user ? (
          <LinkContainer horizontal margin="0" gap="2em">
            <CustomLink id="home" to="#home">
              Home
            </CustomLink>
            <CustomLink id="about" to="#about">
              About Me
            </CustomLink>
            <CustomLink id="services" to="#services">
              Services
            </CustomLink>
            <CustomLink id="contact" to="#contact">
              Contact
            </CustomLink>
          </LinkContainer>
        ) : null}
      </Container>

      <ButtonContainer justify="center" align="center" horizontal gap="0.5em">
        <CircleWrapper rounded="50%" padding="0.5em">
          <BiSearchAlt2 size="1em" onClick={() => {}} />
        </CircleWrapper>
        <CircleWrapper
          rounded="50%"
          padding="0.5em"
          onClick={openMenu}
          className="menuBtn"
        >
          <FiMenu />
        </CircleWrapper>
      </ButtonContainer>
    </Container>
  );
};

export default React.memo(Navbar);
