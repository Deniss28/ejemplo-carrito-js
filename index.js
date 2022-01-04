// capturar datos
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const btnBotones = document.querySelectorAll(".card .btn");

const carritoObj = [];

const agregarCarrito = (e) => {
  console.log(e.target.dataset.fruta);
  //   se construye la info
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  // retorna -1 para ver si se repite un elemnto y luego add un el mas
  const indice = carritoObj.findIndex((item) => item.id === producto.id);
  console.log(indice);

  if (indice === -1) {
    carritoObj.push(producto);
  } else {
    carritoObj[indice].cantidad++;
  }
  // console.log(carritoObj);
  pintarCarrito(carritoObj);
};

const pintarCarrito = (array) => {
  carrito.textContent = "";
  // parte vacio - tmb funciona limpiando html
  array.forEach((item) => {
    // se va a recorrer el objeto para obtrener el titulo y cantidad
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

btnBotones.forEach((btn) => btn.addEventListener("click", agregarCarrito));
