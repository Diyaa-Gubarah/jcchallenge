import { MdOutlineClose, MdOutlineLogout } from "react-icons/md";

import Container from "../Container/Container";
import CustomLink from "../CustomLink/CustomLink";
import CustomText from "../CustomText/CustomText";
import React from "react";
import { logout } from "../../store/slice/userSlice";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  display: flex;
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 45vw;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (${`max-width:620px`}) {
    width: 60vw;
  }
`;

const TransparentContainer = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 55vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (${`max-width:620px`}) {
    width: 40vw;
  }
`;

const Button = styled(Container)`
  cursor: pointer;
  background: rgba(207, 3, 3, 1);
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
`;

const App = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [show, setShow] = React.useState(false);

  const signOut = React.useCallback(() => {
    dispatch(logout());
    navigate("/jcchallenge");
  }, [dispatch]);

  const open = React.useCallback(() => {
    setShow(true);
  }, [show]);

  const close = React.useCallback(() => {
    setShow(false);
  }, [show]);

  React.useImperativeHandle(ref, () => ({
    open: () => {
      open();
    },
    close: () => {
      close();
    },
  }));
  return (
    show && (
      <FixedContainer horizontal>
        <MdOutlineClose
          onClick={close}
          color="rgba(207, 3, 3, 1)"
          size="2em"
          style={{
            position: "absolute",
            right: "0",
            margin: "1em",
            padding: "0.25em",
            zIndex: "5",
          }}
        />
        <TransparentContainer onClick={close} />
        <SideNav ref={ref}>
          <Container
            margin="0"
            gap="1em"
            align="center"
            justify="center"
            grow={1}
          >
            <CustomLink to="#home">Home</CustomLink>
            <CustomLink to="#about">About Me</CustomLink>
            <CustomLink to="#services">Services</CustomLink>
            <CustomLink to="#contact">Contact</CustomLink>
          </Container>
          <Button horizontal gap="0.5em" align="center" onClick={signOut}>
            <CustomText
              fw={"600"}
              fz={"1.em"}
              lh="22px"
              color={"white"}
              width="fit-content"
            >
              Logout
            </CustomText>
            <MdOutlineLogout size="1.5em" color="white" />
          </Button>
        </SideNav>
      </FixedContainer>
    )
  );
});

export default App;
