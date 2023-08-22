const productos = [
  {
    id: "1",
    nombre: "iPhone 13",
    precio: 450000,
    categoria: "celular",
    img: "./productos/iphone13.jpg",
    stock: 11,
    descripcion: "iPhone 13 64 gb",
  },
  {
    id: "2",
    nombre: "iPhone 14",
    precio: 650000,
    categoria: "celular",
    img: "./productos/iphone14.jpg",
    stock: 8,
    descripcion: "iPhone 14 128 gb",
  },
  {
    id: "3",
    nombre: "iPad Pro 11",
    precio: 345000,
    categoria: "tablet",
    img: "./productos/ipodpro11.jpg",
    stock: 12,
    descripcion: 'iPad Apple Pro 4th generation 2022 A2759 11" 256GB',
  },
  {
    id: "4",
    nombre: "Tablet galaxy Tab S6",
    precio: 300000,
    categoria: "tablet",
    img: "./productos/tabletgalaxytabs6.jpg",
    stock: 23,
    descripcion: "Tablet Samsung Galaxy Tab S S6 Lite with Book Cover 2022",
  },
  {
    id: "5",
    nombre: "MacBook pro",
    precio: 650000,
    categoria: "notebook",
    img: "./productos/macbookpro.jpg",
    stock: 22,
    descripcion: "MacBook Pro 16-inch 2023 silver 16.2",
  },
  {
    id: "6",
    nombre: "Lenovo LP3",
    precio: 230000,
    categoria: "notebook",
    img: "./productos/lenovolp3.jpg",
    stock: 30,
    descripcion: "Notebook Lenovo I5 1135g7 8gb Ram 512gb Ssd 14",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};
