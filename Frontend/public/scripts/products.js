async function getAllProducts() {
    try {
        const response = await fetch('http://localhost:8000/products');
        if (!response.ok) {
            throw new Error('Erro ao pegar os produtos');
        }
        const products = await response.json();
        return products;
    } catch (err) {
        console.error('Erro ao pegar os produtos:', err);
        return [];
    }
}

function displayProducts(products) {
    const table = document.querySelector("#productsList");

    table.innerHTML = '';

    const header = document.createElement("tr");
    const headers = ['Nome', 'Preço'];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        header.appendChild(th);
    });
    table.appendChild(header);

    for (let i = 0; i < products.length; i++) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = products[i].name;
        row.appendChild(nameCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(products[i].price);
        row.appendChild(priceCell);

        table.appendChild(row);
    }
}

function quickSort(produtos) {
    if (produtos.length <= 1) {
        return produtos;
    }

    const pivotIndex = Math.floor(produtos.length / 2);
    const pivot = produtos[pivotIndex];

    const left = [];
    const right = [];

    for (let i = 0; i < produtos.length; i++) {
        if (i === pivotIndex) continue;
        if (produtos[i].price <= pivot.price) {
            left.push(produtos[i]);
        } else {
            right.push(produtos[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

async function init() {
    try {
        const response = await getAllProducts();
        const products = quickSort(response);
        console.log(products);
        displayProducts(products);
    } catch (err) {
        console.log("Erro ao obter os produtos:", err);
    }
}

document.querySelector("#add-new-product").addEventListener("click", () => {
    window.location.href = "index.html";
});

init();


