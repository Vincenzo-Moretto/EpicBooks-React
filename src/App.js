import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <div className="d-flex justify-content-center flex-wrap gap-5 my-5">
          <AllTheBooks />
        </div>
      </Container>
      <MyFooter bloccato="fixed" />
    </>
  );
}

export default App;
