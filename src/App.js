import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <Footer />
      </BrowserRouter>
  );
}

export default App;
