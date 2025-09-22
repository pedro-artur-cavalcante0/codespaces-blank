document.getElementById('mostrarDados').addEventListener('click', function() {

    const dados = { nome: "Carlos", idade: 24 };

    
    document.getElementById('resultado').innerText = `Nome: ${dados.nome}, Idade: ${dados.idade}`;
});
