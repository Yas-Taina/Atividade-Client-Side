function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = 'block';
}

function subm() {
    const formData = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        cartao: document.getElementById("cartao").value,
        mensagem: document.getElementById("mensagem").value,
    };

    console.log("Dados: ", formData); 

    fetch("http://localhost:3333/form", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) =>  {
        console.log("Sucesso:", data); 
        alert("Dados enviados (hehe).");
    })
    .catch((error) => {
        console.error("Errinho: ", error);
        alert("Teve um erro (not hehe).");
    });
    document.getElementById("vendaForm").reset();
    document.getElementById("popup").style.display = 'none';
}

function subNao() {
    document.getElementById("popup").style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('vendaForm').addEventListener('submit', (event) => {
        event.preventDefault();
        showPopup();
    });

    document.getElementById("simBtn").addEventListener('click', subm);
    document.getElementById("naoBtn").addEventListener('click', subNao);
});
