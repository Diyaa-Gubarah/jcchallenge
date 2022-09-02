import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";

export function Main(props) {
  return (
    <>
      {props.children}
      <Footer />
    </>
  );
}
