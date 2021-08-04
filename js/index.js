let form = null;
let mostrarImc = null;
let limpar = null;
let mostrarCondicaoFisica = null;

window.onload = function() {

    form = document.getElementsByTagName('form')[0];
    limpar = document.getElementById('limpar');
    mostrarCondicaoFisica = document.forms['calculo_imc'].mostrar_condicao_fisica;
    
    form.addEventListener('submit', mostrarIMC);    
    mostrarCondicaoFisica.addEventListener('change', mostrarIMC);
    
    limpar.addEventListener('click', function() {
        mostrarImc = document.getElementById('mostrar_imc');
        mostrarImc.textContent = '';
    });
}

function calcularImc (peso, altura) {
    return peso / (altura * altura);
}

function classificacaoImc (imc) {
    let classificacao = null;

    if (imc <= 18.5) {
        classificacao = "abaixo do peso";
    }
    else if (imc >= 18.6 && imc < 25) {
        classificacao = "no peso ideal";
    }
    else if (imc >= 25 && imc < 30) {
        classificacao = "levemente acima do peso";
    }
    else if (imc >= 30 && imc < 35) {
        classificacao = "com obesidade grau I";
    }
    else if (imc >= 35 && imc < 40) {  
        classificacao = "com obesidade grau II";
    } 
    else if (imc >= 40) {  
        classificacao = "com obesidade grau III";
    }
    
    return classificacao;
}


function mostrarIMC (event) {
    event.preventDefault();

    const formInputs = document.forms['calculo_imc'];
    
    const nome = formInputs.nome;
    const peso = formInputs.peso;
    const altura = formInputs.altura;
    const mostrarNome = formInputs.mostrar_nome;

    const mostrarImcTexto = document.getElementById('mostrar_imc');

    const imc = calcularImc(peso.value, altura.value).toFixed(2);
    const classificacao = classificacaoImc(imc);

    if (nome.value != '' && peso.value != '' && altura.value != '' && form.checkValidity()) {
        
        if (mostrarNome.value == 0 && mostrarCondicaoFisica.value == 0) {
            mostrarImcTexto.textContent = `${nome.value}, seu IMC é ${imc}, você está ${classificacao}`
        }
        else if (mostrarNome.value == 1 && mostrarCondicaoFisica.value == 0) {
            mostrarImcTexto.textContent = `Seu IMC é ${imc}, você está ${classificacao}`
        }
        else if (mostrarNome.value == 0 && mostrarCondicaoFisica.value == 1) {
            mostrarImcTexto.textContent = `${nome.value}, seu IMC é ${imc}`
        }
        else if (mostrarNome.value == 1 && mostrarCondicaoFisica.value == 1) {
            mostrarImcTexto.textContent = `Seu IMC é ${imc}`;
        }
    }
}

