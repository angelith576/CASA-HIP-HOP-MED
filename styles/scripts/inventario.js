/*Agregar producto*/ 
let inventory = [
    { code: "1001", name: 'Aceite de oliva extra virgen (x 3Ltr)', category: 'seco', quantity: 7 },
    { code: "1002", name: 'Aceite de girasoli (caja x 3)', category: 'seco', quantity: 3 },
    { code: "1003", name: 'Aceite super fry (x 20Ltr)', category: 'seco', quantity: 2 },
    { code: "1004", name: 'Aceituna negra deshuesada (x 350gr)', category: 'refrigerado', quantity: 45 },
    { code: "1005", name: 'Aderezo cesar (x 500gr)', category: 'refrigerado', quantity: 7 },
    { code: "1006", name: 'Agua nacimiento postobon con gas', category: 'refrigerado', quantity: 6 },
    { code: "1007", name: 'Agua nacimiento (500gr)', category: 'refrigerado', quantity: 4 },
    { code: "1008", name: 'Aguacate papelillo (10 diarios)', category: 'seco', quantity: 150 },
    { code: "1009", name: 'Aguardiente tapa azul(x 1/2)', category: 'seco', quantity: 10 },
    { code: "1010", name: 'Aguardiente tapa roja (x 1/2)', category: 'seco', quantity: 10 },
    { code: "1011", name: 'Aji dulce', category: 'refrigerado', quantity: 16 },
    { code: "1012", name: 'Ajo pelado', category: 'refrigerado', quantity: 30 },
    { code: "1013", name: 'Ajonjoli tostado', category: 'seco', quantity: 20 },
    { code: "1014", name: 'Alcaparras alfa vidrio (x 470gr)', category: 'refrigerado', quantity: 30 },
    { code: "1015", name: 'Alfajor', category: 'seco', quantity: 30 },
    { code: "1016", name: 'Almendras tostadas', category: 'seco', quantity: 20 },
    { code: "1017", name: 'Anillos de calamar (600gr)', category: 'refrigerado', quantity: 40 },
    { code: "1018", name: 'Apanado para nuggets (x 1kg)', category: 'seco', quantity: 20 },
    { code: "1019", name: 'Aromatica deshidratada ( x paquete de 25 unidades)', category: 'seco', quantity: 45 },
    { code: "1020", name: 'Azucar manuelita (x 5 Libras)', category: 'seco', quantity: 30 },
    { code: "1021", name: 'Azucar micro pulverizada (500gr)', category: 'seco', quantity: 28 },
    { code: "1022", name: 'Baileys (x botella)', category: 'seco', quantity: 6 },
    { code: "1023", name: 'Barquillos (x paquete)', category: 'seco', quantity: 12 },
    { code: "1024", name: 'Barra de nuez', category: 'seco', quantity: 18 },
    { code: "1025", name: 'Barra de chocolate 12plex (250gr)', category: 'seco', quantity: 10 },
    { code: "1026", name: 'Base de risotto', category: 'refrigerado', quantity: 36 },
    { code: "1027", name: 'Batido economico ZAFRAN (x 1kg)', category: 'seco', quantity: 18 },
    { code: "1028", name: 'Brandy DOMEQ (x botella)', category: 'seco', quantity: 8 },
    { code: "1029", name: 'Bretaña 8.5oz (x 250ml)', category: 'refrigerado', quantity: 9 },
    { code: "1030", name: 'Bretaña postobon 10oz (x 300ml)', category: 'refrigerado', quantity: 9 },
    { code: "1031", name: 'Brioche yogurt tajado', category: 'seco', quantity: 36 },
    { code: "1031", name: 'Brote de rugula', category: 'refrigerado', quantity: 28 },
    { code: "1032", name: 'Café molido new colony (x 400gr)', category: 'seco', quantity: 16 },
    { code: "1033", name: 'Café todo fresa en grano (x 2500gr)', category: 'secos', quantity: 16 },
    { code: "1034", name: 'Café todo fresa molido', category: 'seco', quantity: 16 },
    { code: "1035", name: 'Café todo fresa en grano', category: 'seco', quantity: 16 },
    { code: "1036", name: 'Camaron (PQX 104gr Talla 51/60)', category: 'congelado', quantity: 36 },
    { code: "1038", name: 'Canela en astila (x 500gr)', category: 'seco', quantity: 20 },
    { code: "1039", name: 'Canela en polvo san valentin', category: 'seco', quantity: 20 },
    { code: "1040", name: 'Carne redman res y cerdo (80gr)', category: 'refrigerado', quantity: 50 },
    { code: "1041", name: 'Carpaccio', category: 'refrigerado', quantity: 40 },
    { code: "1042", name: 'Cebolla blanca pelada', category: 'refrigerado', quantity: 26 },
    { code: "1043", name: 'Cebolla morada', category: 'refrigerada', quantity: 26 },
    { code: "1044", name: 'Cereza marraschino alfresco (x 500gr)', category: 'refrigerado', quantity: 18 },
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

