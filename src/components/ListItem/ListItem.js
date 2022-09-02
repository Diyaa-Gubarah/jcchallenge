import Container from "../Container/Container";
import CustomText from "../CustomText/CustomText";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Li = styled.a`
  text-decoration: none;
  padding: 0 0 0.3em;
  &:hover {
    border-bottom: 2px solid rgba(60, 60, 60, 0.8);
  }
`;

function ListItem({ header, texts = [] }) {
  return (
    <Container  gap={"1em"} align="center" >
      <CustomText
        fw={"600"}
        fz={"1.5em"}
        lh="35px"
        color={"#151E2C"}
        width="fit-content"
      >
        {header}
      </CustomText>
      <List>
        {texts.map((text, i) => (
          <Li key={i.toString()} href={`#${text}`}>
            <CustomText
              fw={"400"}
              fz={"1.2em"}
              lh="22px"
              color={"rgba(60, 60, 60, 0.8)"}
              width="fit-content"
            >
              {text}
            </CustomText>
          </Li>
        ))}
      </List>
    </Container>
  );
}

export default ListItem;
