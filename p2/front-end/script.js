function button_entrar() {

if (document.getElementById("input_usuario").value === "") {
    alert("erro: usuario ou senha vazios");
} 
else if (document.getElementById("input_usuario").value.length < 3 && document.getElementById("input_senha").value.length < 8) {
    alert("erro: usuario invalido e senha invalida");
}
else if (document.getElementById("input_senha").value === "")
    {
        alert("erro: usuario ou senha vazios");
    }
else if (document.getElementById("input_senha").value.length < 8) {
    alert("erro: senha invalida, deve conter pelo menos 8 digitos");
}
else if (document.getElementById("input_usuario").value.length < 3) {
    alert("erro: usuario invalido, deve conter pelo menos 3 digitos");
}
else {
    window.location.href = "index2.html";
}
}

function criar_usuario() {
    alert("Botão criar novo usuário clicado!");
}
function primero() {
    alert("carregando o primeiro vídeo...");
    document.getElementById("video").src = "https://www.youtube.com/embed/U5zR6KPTAOU";
}
function segundo() {
    alert("carregando o segundo vídeo...");
    document.getElementById("video").src = "https://www.youtube.com/embed/08wTGkXf9uY";
}
function terceiro() {
    alert("carregando o terceiro vídeo...");
    document.getElementById("video").src = "https://www.youtube.com/embed/Uf4cw_NX7PI";
}