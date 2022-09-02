import Footer from "../../components/Footer/Footer";

export function Main(props) {
  return (
    <>
      {props.children}
      <Footer />
    </>
  );
}
