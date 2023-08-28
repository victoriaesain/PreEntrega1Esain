import { Link } from "react-router-dom"

const Item = ({id, nombre, img, precio, stock})=> {
  return (
    <article>
        <header>
        <h2>{nombre}</h2>
        </header>
        <image>
            <img src={img} alt={nombre}/>
        </image>
        <section>
            <p> Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
        </section>
        <footer>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </footer>
    </article>
  )
}

export default Item
