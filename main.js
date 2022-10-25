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

for ( i=0; i< cart.length; i++) {
    cart[i].addEventListener('click', () => {
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

    let productNumbers = localStorage.getItem('cartNumbers', productNumbers + 1);
    productNumbers = parseInt(productNumbers);
    
    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers +1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null){
        if(cartItems [product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
    } else {
            product.inCart = 1;
            cartItems = {
                [product.tag]: product
            }
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();