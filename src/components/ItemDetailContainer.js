import { useState, useEffect } from "react";
import { getProductoById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { itemId } = useParams()

  useEffect(() => {
    getProductoById(itemId)
      .then(response => {
        setProducto(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div>
      < ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
