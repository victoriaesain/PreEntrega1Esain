import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount
        stock={10}
        initial={1}
        onAdd={(contador) => console.log("cantidad agregada: ", contador)}
      />
    </BrowserRouter>
  );
}

export default App;
