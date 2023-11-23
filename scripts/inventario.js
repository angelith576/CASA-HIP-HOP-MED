/*Agregar producto*/ 
let inventory = [
    { code: "101", name: 'DeTodito', category: 'snaks', quantity: 7 },
    { code: "102", name: 'Tostacos', category: 'snask', quantity: 3 },
    { code: "103", name: 'Bombombun', category: 'dulces', quantity: 2 },
    { code: "104", name: 'Cerveza poker lata 330 ml', category: 'refrigerado', quantity: 45 },
    { code: "105", name: 'Gaseosa 350 ML POSTOBON', category: 'refrigerado', quantity: 7 },
    { code: "106", name: 'Agua Polar 350 ml', category: 'refrigerado', quantity: 6 },
    { code: "107", name: 'Agua con gas saboriada 350 ml', category: 'refrigerado', quantity: 4 },
    { code: "108", name: 'caja pequena chicles x2 unidades', category: 'dulces', quantity: 150 },
    { code: "109", name: 'Aguardiente tapa azul(x 1/2)', category: 'seco', quantity: 10 },
    { code: "110", name: 'Aguardiente tapa roja (x 1/2)', category: 'seco', quantity: 10 },
    { code: "111", name: 'Crveza pilsen 350 en lata ', category: 'refrigerado', quantity: 16 },
    { code: "1012", name: 'Cerveza Aguila lith en la 350 ml', category: 'refrigerado', quantity: 30 },
    { code: "1013", name: 'Traident pequeno x2 unidades', category: 'dulces', quantity: 20 },
    { code: "1014", name: 'Cerveza Aguila negra 350 ml en lata', category: 'refrigerado', quantity: 30 },
    { code: "1015", name: 'Botella Aguardiente', category: 'seco', quantity: 30 },
    { code: "1016", name: 'Botella Ron', category: 'seco', quantity: 20 },
    { code: "1017", name: 'Gatorade 350 ml', category: 'refrigerado', quantity: 40 },
    { code: "1018", name: 'Cerveza Like', category: 'refrigerado', quantity: 20 },
    { code: "1019", name: 'vive 100 400 ml', category: 'refrigerado', quantity: 45 },
    { code: "1020", name: 'Spik Mas', category: 'refrigerado', quantity: 30 },
    { code: "1021", name: 'butifarra', category: 'snask', quantity: 28 },
    { code: "1022", name: 'Baileys (x botella)', category: 'seco', quantity: 6 },
    { code: "1023", name: 'Chocolatina Jumbo X2 UNIDADES', category: 'snask', quantity: 12 },
    { code: "1024", name: 'Arepa Con Salchichon', category: 'snask', quantity: 18 },
    { code: "1025", name: 'Coca Cola 350 ml', category: 'refrigerado', quantity: 10 },
    { code: "1026", name: 'paquete Cigarrillo Boston', category: 'snask', quantity: 36 },
    { code: "1027", name: 'medio paquete cigarrillo', category: 'snask', quantity: 18 },
    { code: "1028", name: 'Brandy DOMEQ (x botella)', category: 'seco', quantity: 8 },
    { code: "1029", name: 'Bretaña 8.5oz (x 250ml)', category: 'refrigerado', quantity: 9 },
    { code: "1030", name: 'Bretaña postobon 10oz (x 300ml)', category: 'refrigerado', quantity: 9 },
   
];

let currentUser = null;


function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function showInventory() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    inventory.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `Código: ${product.code}  Nombre: ${product.name}  Categoria:${product.category}  Cantidad: ${product.quantity}`;
        productList.appendChild(li);
    });
}

function showAddProductForm() {
}

function hideAddProductForm() {
    showMessage('');
}

function addProduct() {
    const codeProduct = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productCategory = document.getElementById('product-category').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value, 10);

    if (productName && productCategory && !isNaN(productQuantity) && productQuantity > 0 && codeProduct.length == 5) {
        inventory.push({code: codeProduct, name: productName, category:product-category, quantity: productQuantity });
        showInventory();
        hideAddProductForm();
        showMessage('Producto agregado al inventario.');
    } else {
        showMessage('Por favor, ingrese un nombre de producto válido y una cantidad válida.');
    }
}

showInventory()

