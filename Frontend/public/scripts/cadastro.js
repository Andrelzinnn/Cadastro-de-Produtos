function sendData(product) {
  return fetch("http://localhost:8000/products/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.text())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Erro:", error);
      throw error;
    });
}


document.querySelector("#btn-send").addEventListener("click", async (e) => {
  e.preventDefault();
  const productName = document.querySelector("#productName").value;
  const productValue = document.querySelector("#productValue").value;
  const productAvaliability = () => {
    return document.querySelector("#productAvaliabilityDisponible").checked ? document.querySelector("#productAvaliabilityDisponible") : document.querySelector("#productAvaliabilityIndisponible");
  };

  if (!productName || !productValue) {
    document.querySelector("#feedback").innerText = "Por favor, preencha todos os campos.";
    document.querySelector("#feedback").style.color = "red";
    return;
  }

  const product = {
    name: productName,
    price: parseFloat(productValue),
    avaliability: productAvaliability().value,
  };

  try {
    const response = await sendData(product);
    console.log("Produto enviado com sucesso:", response);
    window.location.href = "products.html";
  } catch (error) {
    console.error("Erro ao enviar produto:", error);
    alert(`Erro ao enviar produto: ${error}`);
  }
});

