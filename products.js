const data = [
  {
    id: 1,
    name: "Manzana roja Huella Natural x kg",
    category: "Frutas",
    price: "2.990,00",
    quantity: 100,
    description: "Manzanas frescas y crujientes.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/176823-1600-auto?v=637468574453170000&width=1600&height=auto&aspect=true",
  },
  {
    id: 2,
    name: "Banana seleccion x kg",
    category: "Frutas",
    price: "1.999,00",
    quantity: 120,
    description: "Bananas maduras y dulces.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/490488-1600-auto?v=638453427125500000&width=1600&height=auto&aspect=true",
  },
  {
    id: 3,
    name: "Leche entera larga vida La Serenísima clásica 1 l",
    category: "Lácteos",
    price: "1.416,75",
    quantity: 60,
    description: "Leche entera fresca.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/178236-1600-auto?v=637468578453270000&width=1600&height=auto&aspect=true",
  },
  {
    id: 4,
    name: "Queso cremoso Cremac x kg",
    category: "Lácteos",
    price: "13.635,00",
    quantity: 50,
    description: "Queso cremoso de alta calidad.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/180880-1600-auto?v=637468586036200000&width=1600&height=auto&aspect=true",
  },
  {
    id: 5,
    name: "Pan integral Fargo grano entero bolsa 350 g",
    category: "Panadería",
    price: "3.909,00",
    quantity: 80,
    description: "Pan integral recién horneado.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/411706-1600-auto?v=638348772494570000&width=1600&height=auto&aspect=true",
  },
  {
    id: 6,
    name: "Arroz tipo largo fino 00000 Vanguardia 500 g",
    category: "Granos",
    price: "1.050,00",
    quantity: 200,
    description: "Arroz blanco de grano largo.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/218649-1600-auto?v=637702639116070000&width=1600&height=auto&aspect=true",
  },
  {
    id: 7,
    name: "Pollo entero congelado x kg",
    category: "Carnes",
    price: "2.599,00",
    quantity: 40,
    description: "Pollo fresco.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/254862-1600-auto?v=637975559909700000&width=1600&height=auto&aspect=true",
  },
  {
    id: 8,
    name: "Paleta x kg",
    category: "Carnes",
    price: "6.900,00",
    quantity: 30,
    description: "Carne vacuna.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/172942-1600-auto?v=637468551183970000&width=1600&height=auto&aspect=true",
  },
  {
    id: 9,
    name: "Fideos mostacholes Lucchetti 500 g",
    category: "Granos",
    price: "1.020,00",
    quantity: 150,
    description: "Pasta de trigo de alta calidad.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/370667-1600-auto?v=638297065496300000&width=1600&height=auto&aspect=true",
  },
  {
    id: 10,
    name: "Zanahoria Huella Natural x kg",
    category: "Verduras",
    price: "1.590,00",
    quantity: 90,
    description: "Zanahorias frescas y crujientes.",
    img: "https://carrefourar.vtexassets.com/arquivos/ids/226755-1600-auto?v=637715439512570000&width=1600&height=auto&aspect=true",
  },
  {
    id: 11,
    name: "algodón primer precio clàsico 75grs",
    category: "Algodones E Hisopos",
    price: "1.009,00",
    quantity: 45,
    description: "Fibra de algodón natural y suave.",
    img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00260000/00260042.jpg?3.0.172c",
  },
  {
    id: 12,
    name: "Aceite de girasol Cocinero 1.5l",
    category: "aceite",
    price: "2.650,00",
    quantity: 70,
    description: "Aceite de origen vegetal.",
    img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00011700/00011760.jpg?3.0.172c",
  },
];


let totalPrice = 0;

function createCard(product) {
  return `
        <div class="card">
            <img src="${product.img}" alt="${product.name}">
            <div class="texts">
                <h2>${product.name}</h2>
                <p>$ ${product.price}</p>
                <p>${product.description}</p>
            </div>
            <div class="quantity-selector">
                <button onclick="changeQuantity(this, -1)">-</button>
                <input id="buy" type="number" value="1" min="1" max="${product.quantity}" />
                <button onclick="changeQuantity(this, 1)">+</button>
            </div>
            <div class="availability" id="stock">
                +${product.quantity} disponibles
            </div>
            <button class="btnAdd" onclick="addToCart(${product.id}, this)">Agregar al carrito</button>
        </div>
    `;
}

function displayProducts() {
  const productsSection = document.getElementById("products");
  const cards = data.map(createCard).join("");
  productsSection.innerHTML = cards;
}

function changeQuantity(button, change) {
  const input = button.parentElement.querySelector('input[type="number"]');
  let newValue = parseInt(input.value) + change;
  if (newValue < parseInt(input.min)) {
    newValue = parseInt(input.min);
  } else if (newValue > parseInt(input.max)) {
    newValue = parseInt(input.max);
  }
  input.value = newValue;
}

function addToCart(productId, button) {
  const card = button.parentElement;
  const input = card.querySelector("#buy");
  const quantityBuy = parseInt(input.value);

  data.forEach((product) => {
    if (product.id === productId) {
      if (quantityBuy <= product.quantity) {
        product.quantity -= quantityBuy;
        const stock = card.querySelector("#stock");
        stock.textContent = `+${product.quantity} disponibles`;

        input.value = 1;

        if (product.quantity === 0) {
          button.disabled = true;
        }

        //transforma el precio en numero
        const productPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));

       //suma el total de los productos
        totalPrice += productPrice * quantityBuy;

       //lo manda al html
        document.getElementById("total-price").textContent = totalPrice.toFixed(2).replace('.', ',');

      } else {
        Swal.fire({
          title: "Error!",
          text: "No hay suficiente stock disponible.",
          icon: "error",
          confirmButtonText: "Volver",
          timer: "3000",
          timerProgressBar: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          confirmButtonColor: "#80ed99",
        });

        input.value = 1;
      }
    }
  });
}

  let comprar = document.getElementById("comprar").addEventListener("click", function() {
  let total = document.getElementById("total-price").textContent;
  if(total !== "0,00"){
    Swal.fire({
      title: "Compra realizada",
      text: "Su compra se a realizado correctamente.",
      icon: "success",
      confirmButtonText: "Volver",
      timer: "3000",
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonColor: "#80ed99",
    }).then((response) => {
      if (response.isConfirmed) {
        window.location.href = "home.html";
      } else {
        window.location.href = "home.html";
      }
    });
  }else{
    Swal.fire({
      title: "Error!",
      text: "No productos dentro de el carrito.",
      icon: "error",
      confirmButtonText: "Volver",
      timer: "3000",
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonColor: "#80ed99",
    });
  }
});

displayProducts();