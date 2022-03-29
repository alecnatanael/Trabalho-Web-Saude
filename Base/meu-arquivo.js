window.onload = () => {
    var botaoCalcular = document.getElementById("calcularIMC");
botaoCalcular.addEventListener("click", calcularIMC, false);

    function calcularIMC() {
        var altura = document.querySelector("#altura").value;

        if (!altura) {
            alert("Por favor, preencha com todas as informações solicitadas")
            return
        }

        var massa = document.querySelector("#massa").value;

        if (!massa) {
            alert("Por favor, preencha com todas as informações solicitadas")
            return
        }

        var alturaaoquadrado = altura*altura

        var IMC = massa/alturaaoquadrado

        var classificacao = ""

        if (IMC < 18.5) {
            classificacao = "Magreza";
        }

        if (IMC >= 18.5 & IMC <= 24.9) {
            classificacao = "Normal";
        }

        if (IMC >= 25 & IMC <= 29.9) {
            classificacao = "Sobrepeso";
        }

        if (IMC >= 30 & IMC <= 39.9) {
            classificacao = "Obesidade";
        }

        if (IMC >= 40) {
            classificacao = "Obesidade Grave";
        }

        document.querySelector(".apresentarIMC").innerHTML = "<p><b>Seu IMC é: " + IMC.toFixed(2) + "<br>" + "Sua classificação é: " + classificacao + "</b></p>";
    }
}