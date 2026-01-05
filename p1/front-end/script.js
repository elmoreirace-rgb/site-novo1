function button_on()
{
    var nome = document.getElementById("inputField").value.trim();

    if (nome === "") {
        if (document.getElementById("displayName").innerText !== "") {
            document.getElementById("displayName").innerText = "";
        }
        alert("Por favor, digite seu nome.");
        return;
    }
    else
    { 
        var texto = "Olá, " + nome
        document.getElementById("displayName").innerText = texto;
        return;
    }
}

function button2_on()
{
    document.getElementById("displayName").innerText = "";
    document.getElementById("inputField").value = "";
}