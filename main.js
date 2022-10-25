let cart = document.querySelectorAll('.add-cart');
let product = [
    {
        nombre: 'teclado',
        tag: 'tec',
        precio: 1000,
        inCart: 0
    },
    {
        nombre: 'mouse',
        tag: 'mou',
        precio: 600,
        inCart: 0
    },
    {
        nombre: 'pantalla',
        tag: 'pant',
        precio: 2500,
        inCart: 0
    }
]

console.log("carro " , cart);
console.log("tamaño carro ",cart.length);
console.log("prueba producto ",product[0]);

for (let i=0; i< cart.length; i++) {
    cart[i].addEventListener('click', () => {
        console.log(product[i].nombre ,"aa");
        cartNumbers(product[i]);
        
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem ('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}



function cartNumbers(product) {

    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    console.log(productNumbers);
    console.log("es el rpoducto", product);
    console.log(JSON.stringify(product));

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    localStorage.setItem("productsInCart", JSON.stringify(product));


    setItems(product);

}


function setItems(product) {

    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product,
            }
            cartItems[product.tag].inCart +=1;
        } else {
            product.inCart = 1;
            cartItems = {
                //...cartItems,
                [product.tag]: product
            }
        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }

    console.log("items en el carro ", cartItems);

}
onLoadCartNumbers();