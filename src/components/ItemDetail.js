import ItemCount from "./ItemCount";


function ItemDetail({ id, nombre, img, categoria, descripcion, precio, stock }) {
  return (
    <article>
      <header>
        <h2>{nombre}</h2>
      </header>
      <image>
        <img src={img} alt={nombre} />
      </image>
      <section>
        <p>Categoria: {categoria}</p>
        <p>Descripcion: {descripcion}</p>
        <p>Precio: ${precio}</p>
      </section>
      <footer>
        <ItemCount
          stock={stock}
          initial={1}
          onAdd={(contador) => console.log(`Cantidad agregada: ${contador}`)}
        />
      </footer>
    </article>
  );
}

export default ItemDetail;
