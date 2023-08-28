

const productos = [
  {
    id: '1',
    nombre: 'iPhone 13',
    precio: '450000',
    categoria: 'celular',
    img: 'https://urquizastore.com/wp-content/uploads/2022/05/iPhone-13-Pro-Max-5.png',
    stock: '11',
    descripcion: 'iPhone 13 64 gb',
  },
  {
    id:'2',
    nombre: 'iPhone 14',
    precio: '650000',
    categoria: 'celular',
    img: 'https://todoapplecaba.com.ar/wp-content/uploads/2022/11/iphone-14.jpg',
    stock: '8',
    descripcion: 'iPhone 14 128 gb',
  },
  {
    id: '3',
    nombre: 'iPad Pro 11',
    precio: '345000',
    categoria: 'tablet',
    img: 'https://www.segundamanopc.com/3346710-large_default/apple-ipad-pro-11-2nd-256gb-wifilte-11-space-gray-sin-accesorios-reacondicionado-grado-b.jpg',
    stock: "12",
    descripcion: 'iPad Apple Pro 4th generation 2022 A2759 11" 256GB',
  },
  {
    id: '4',
    nombre: 'Tablet galaxy Tab S6',
    precio: '300000',
    categoria: 'tablet',
    img: 'https://www.rribaceta.com.ar/4862-large_default/galaxy-tab-s6-samsung-lite-64-gbrom-4gbram-104-pulg-gray-con-wifi.jpg',
    stock: '23',
    descripcion: 'Tablet Samsung Galaxy Tab S S6 Lite with Book Cover 2022',
  },
  {
    id: '5',
    nombre: 'MacBook pro',
    precio: '650000',
    categoria: 'notebook',
    img: 'https://ar.oneclickstore.com/wp-content/uploads/2021/03/MacBookPro_16_plata_001.jpg',
    stock: "22",
    descripcion: 'MacBook Pro 16-inch 2023 silver 16.2',
  },
  {
    id: '6',
    nombre: 'Lenovo LP3',
    precio: '230000',
    categoria: 'notebook',
    img: 'https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/191999684767_3.jpg?scale=500&qlty=75',
    stock: '30',
    descripcion: 'Notebook Lenovo I5 1135g7 8gb Ram 512gb Ssd 14',
  },
];

export const getProductos= () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 200);
    });
}

export const getProductoById = (productId)  => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find((prod) => prod.id == productId));
        }, 200);
    });
}

export const getProductosByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos.filter(item => item.categoria === categoryId))
        })
    })
}
