import {
  useAppDispatch,
  useAppShallowSelector,
  useForm
} from "../../hooks/hooks";

import Brand from "../../components/CustomImage/CustomImage";
import Container from "../../components/Container/Container";
import CustomText from "../../components/CustomText/CustomText";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { loginAUser } from "../../store/slice/userSlice";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.5em;
`;

const Button = styled.button`
  background: var(--primary);
  color: #fff;
  font-size: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  width: 100%;
`;

const ErrorText = styled.span`
  color: var(--error);
  font-size: 0.75em;
`;

const UnderLineText = styled(CustomText)`
  text-decoration: underline;
  margin-top: ${(props) => props.margin};
`;

const LoginContainer = styled(Container)`
  & .left {
    width: 50%;
    gap: 1em;
  }

  & .right {
    width: 50%;
  }
  @media only screen and (${`max-width:780px`}) {
    flex-direction: column-reverse;

    height: auto;

    & .left {
      margin: 0;
      width: 80%;
      gap: 2em;
      padding: 2em 0;

      & .loginHeader {
        text-align: center;
      }
    }

    & .right {
      margin: 0;
      width: 100%;
    }
  }
`;

const ContainerWithBoarder = styled(Container)`
  padding: 1em 0;
  border-top: 1px solid #e6e7eb;
  margin: 0;
  width: 100%;
  justify-content: center;
`;
const Login = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppShallowSelector(({ auth }) => auth.isLoading);
  const success = useAppShallowSelector(({ auth }) => auth.success);
  const message = useAppShallowSelector(({ auth }) => auth.message);

  const email = useForm("email");
  const password = useForm("password");

  const login = (event) => {
    event.preventDefault();

    //dispatch login action
    dispatch(loginAUser({ email: email.value, password: password.value }));
  };

  return (
    <LoginContainer horizontal height="100vh" align="center">
      <Container
        className="left"
        justify="space-between"
        padding="2em"
      >
        <Brand
          src={require("../../assets/images/brand.png")}
          alt="Logo"
          margin="0"
          className="loginLogo"
          width="auto"
        />
        <Container horizontal gap="0.5em">
          <CustomText
            fw={"700"}
            fz={"1.5em"}
            lh={"40px"}
            color={"#151E2C"}
            className="loginHeader"
          >
            <CustomText color={"#CF0303"}>{` Log in `}</CustomText>
            now and start customizing your activities on our platform.
          </CustomText>
        </Container>

        <Form onSubmit={login} style={{ width: "100%" }}>
          <Container gap="1em" margin="0" width="100%">
            <Container margin="0" width="100%" align="start" gap="0.75em">
              <CustomText fw={"500"} fz={"1.2em"} color={"#060C3C"} ta="left">
                Email Address
              </CustomText>
              <Input {...email} placeholder="Email" />
            </Container>

            <Container margin="0" width="100%" align="flex-end" gap={"1em"}>
              <CustomText
                fw={"500"}
                fz={"1.2em"}
                color={"#060C3C"}
                ta="left"
                width="100%"
              >
                Password
              </CustomText>
              <Input {...password} placeholder="Password" />
              <Link to="/forget_password" style={{ textAlign: "right" }}>
                <UnderLineText
                  fw={"500"}
                  fz={"0.9em"}
                  color={"#CF0303"}
                  ta="right"
                >
                  Forget Password
                </UnderLineText>
              </Link>
            </Container>

            <ErrorText>{message}</ErrorText>
            <Button type="submit">Login</Button>
          </Container>
          <Container horizontal align="center" gap="0.5em">
            <CustomText fw={"500"} fz={"0.9em"} color={"#060C3C"} ta="center">
              Don’t have an account?{" "}
            </CustomText>
            <Link to="/forget_password">
              <Link to="/register">
                <UnderLineText
                  fw={"500"}
                  fz={"0.9em"}
                  color={"#CF0303"}
                  ta="right"
                >
                  Sign Up
                </UnderLineText>
              </Link>
            </Link>
          </Container>
        </Form>
        <ContainerWithBoarder horizontal align="center" gap="3em">
          <Link to="/register">
            <UnderLineText fw={"500"} fz={"1em"} color={"#B4B6C4"} ta="right">
              Terms & Conditions
            </UnderLineText>
          </Link>
          <Link to="/forget_password">
            <Link to="/register">
              <UnderLineText fw={"500"} fz={"1em"} color={"#B4B6C4"} ta="right">
                Privacy Policy
              </UnderLineText>
            </Link>
          </Link>
        </ContainerWithBoarder>
      </Container>
      <Container
        justify="center"
        align="center"
        className="right"
        height="100%"
        bgc="#F6F6F6"
        padding="1em"
      >
        <Brand
          margin="0"
          width="500px"
          height="250px"
          src={require("../../assets/images/login_bg.png")}
        />

        <Container margin="2em auto" align="center" gap="1em">
          <CustomText
            fw={"600"}
            fz={"1em"}
            lh={"30px"}
            color={"#141E2C"}
            ta="center"
          >
            Enter the Network and start growing your Business!
          </CustomText>
          <CustomText
            fw={"500"}
            fz={"0.8em"}
            lh={"23px"}
            color={"#141E2C"}
            ta="center"
          >
            Profit Paradise is the first Network that gives you all the
            necessary to promote and sell products and services taking advantage
            of Performance Marketing.
          </CustomText>
        </Container>
      </Container>
    </LoginContainer>
  );
};

export default Login;
