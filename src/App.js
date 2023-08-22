import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      </BrowserRouter>
  );
}

export default App;
