import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
