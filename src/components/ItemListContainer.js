import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <ItemCount stock/>
    </>
  );
};

export default ItemListContainer;
