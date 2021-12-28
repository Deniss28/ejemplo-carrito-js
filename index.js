// capturar datos
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const btnBotones = document.querySelectorAll(".card .btn");

const carritoObj = {};

const agregarCarrito = (e) => {
  console.log(e.target.dataset.fruta);
  //   se construye la info
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  //   sumar la cantidad cuando damos click a add
  // si tiene el mismo titulo o cantidad  entonces
  if (carritoObj.hasOwnProperty(producto.titulo)) {
    producto.cantidad = carritoObj[producto.titulo].cantidad + 1;
    // se va a modificar
  }

  carritoObj[producto.titulo] = producto;
  pintarCarrito(producto);
};

const pintarCarrito = () => {
  carrito.textContent = "";
  // parte vacio - tmb funciona limpiando html
  Object.values(carritoObj).forEach((item) => {
    // se va a recorrer el objeto para obtrener el titulo y cantidad
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

btnBotones.forEach((btn) => btn.addEventListener("click", agregarCarrito));
