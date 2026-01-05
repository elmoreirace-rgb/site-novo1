function calcularIdade() {
    const input = document.getElementById("dataNasc").value;

    if (!input) {
        document.getElementById("resultado").innerText = "Digite uma data válida.";
        return;
    }

    const dataNascimento = new Date(input);
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    document.getElementById("resultado").innerText = `Você tem ${idade} anos`;
}
