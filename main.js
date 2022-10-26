let cart = document.querySelectorAll(".add-cart");
let product = [{
        nombre: "teclado mecanico",
        tag: "teclado",
        precio: 1000,
        inCart: 0,
    },
    {
        nombre: "mouse inalambrico",
        tag: "mouse",
        precio: 600,
        inCart: 0,
    },
    {
        nombre: "pantalla 4K",
        tag: "pantalla",
        precio: 2500,
        inCart: 0,
    },
];


for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", () => {
        cartNumbers(product[i]);
        totalCost(product[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product,
            };
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product,
        };
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.precio);
        document.querySelector(".totalContainer span").textContent = cartCost + product.precio;
    } else {
        localStorage.setItem("totalCost", product.precio)
        document.querySelector(".totalContainer span").textContent = product.precio;
    }
    
}

onLoadCartNumbers();