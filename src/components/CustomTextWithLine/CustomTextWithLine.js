import Brand from "../CustomImage/CustomImage";
import Container from "../Container/Container";
import CustomText from "../CustomText/CustomText";

function CustomTextWithLine({
  left = null,
  ta = "left",
  text,
  textColor = "#fff",
}) {
  return (
    <Container margin="0" padding="0">
      <CustomText fw={"700"} fz={"2em"} color={textColor} ta={ta}>
        {left && (
          <Brand
            src={require("../../assets/images/h_line.png")}
            width={"3em"}
            height={"16px"}
            margin={"0 0.5em"}
          />
        )}
        {text}
        <Brand
          src={require("../../assets/images/h_line.png")}
          width={"3em"}
          height={"16px"}
          margin={"0 0.5em"}
        />
      </CustomText>
    </Container>
  );
}

export default CustomTextWithLine;
