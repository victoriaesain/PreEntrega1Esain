import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  let [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return (
    <>
      <div>
        <button onClick={sumar} >+</button>
        <h3>{contador}</h3>
        <button onClick={restar} >-</button>
      </div>
      <div>
        <button onClick={() => onAdd(contador)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
}

export default ItemCount;
