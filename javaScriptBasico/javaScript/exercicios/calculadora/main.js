let visor = document.querySelector('#visor')
let zeroBtn = document.querySelector('#zero')
let umBtn = document.querySelector('#um')
let doisBtn = document.querySelector('#dois')
let tresBtn = document.querySelector('#tres')
let quatroBtn = document.querySelector('#quatro')
let cincoBtn = document.querySelector('#cinco')
let seisBtn = document.querySelector('#seis')
let seteBtn = document.querySelector('#sete')
let oitoBtn = document.querySelector('#oito')
let noveBtn = document.querySelector('#nove')
let somaBtn = document.querySelector('#soma')
let subtracaoBtn = document.querySelector('#subtracao')
let divisaoBtn = document.querySelector('#divisao')
let multiplicacaoBtn = document.querySelector('#multiplicacao')
let porcentagemBtn = document.querySelector('#porcentagem')
let virgulaBtn = document.querySelector('#virgula')
let elevadoBtn = document.querySelector('#elevado')
let resultadoBtn = document.querySelector('#resultado')
let limparBtn = document.querySelector('#limpar')
let listaDeNumeros = [];
let operadorSelecionado = null;
let primeiroNumero = null;



zeroBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '0';
    } else {
        visor.innerHTML += '0';
    }
})

umBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '1';
    } else {
        visor.innerHTML += '1';
    }  
})

doisBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '2';
    } else {
        visor.innerHTML += '2';
    }
})

tresBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '3';
    } else {
        visor.innerHTML += '3';
    }
})

quatroBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '4';
    } else {
        visor.innerHTML += '4';
    }
})

cincoBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '5';
    } else {
        visor.innerHTML += '5';
    }
})

seisBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '6';
    } else {
        visor.innerHTML += '6';
    }
})

seteBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '7';
    } else {
        visor.innerHTML += '7';
    }
})

oitoBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '8';
    } else {
        visor.innerHTML += '8';
    }
})

noveBtn.addEventListener('click', function(){
    if (visor.innerHTML === '0') {
        visor.innerHTML = '9';
    } else {
        visor.innerHTML += '9';
    }
})

limparBtn.addEventListener('click', function(){
    visor.innerHTML = '';
    listaDeNumeros = [];
    operadorSelecionado = null;
    primeiroNumero = null; 
})

elevadoBtn.addEventListener('click', function(){
    if(visor.innerHTML !== ''){
        if(primeiroNumero === null){
            primeiroNumero = parseFloat(visor.innerHTML);
        }else if (operadorSelecionado) {
            const segundoNumero = parseFloat(visor.innerHTML);
            switch(operadorSelecionado){
                case '+':
                    primeiroNumero += segundoNumero;
                    break;
                case '-':
                    primeiroNumero -= segundoNumero;
                    break;
                case '/':
                    primeiroNumero /= segundoNumero;
                    break;
                case '*':
                    primeiroNumero *= segundoNumero;
                    break;
                case '%':
                    primeiroNumero = (primeiroNumero / 100) * segundoNumero;
                    break;
                case '^':
                    primeiroNumero **= segundoNumero;
                    break;
            }
            visor.innerHTML = primeiroNumero;
        }
        operadorSelecionado = '^';
        visor.innerHTML = '';   
    }
})

porcentagemBtn.addEventListener('click', function(){
    if(visor.innerHTML !== ''){
        if(primeiroNumero === null){
            primeiroNumero = parseFloat(visor.innerHTML);
        }
        else if (operadorSelecionado) {
            const segundoNumero = parseFloat(visor.innerHTML);
            switch(operadorSelecionado){
                case '+':
                    primeiroNumero += segundoNumero;
                    break;
                case '-':
                    primeiroNumero -= segundoNumero;
                    break;
                case '/':
                    primeiroNumero /= segundoNumero;
                    break;
                case '*':
                    primeiroNumero *= segundoNumero;
                    break;
                case '%':
                    primeiroNumero = (primeiroNumero / 100) * segundoNumero;
                    break;
                case '^':
                    primeiroNumero **= segundoNumero;
                    break;
            }
            visor.innerHTML = primeiroNumero;
        }
        operadorSelecionado = '%';
        visor.innerHTML = ''; 
    }
})

somaBtn.addEventListener('click', function(){
    if(visor.innerHTML !== ''){
        if(primeiroNumero === null){
            primeiroNumero = parseFloat(visor.innerHTML);
        }else if (operadorSelecionado) {
            const segundoNumero = parseFloat(visor.innerHTML);
            switch(operadorSelecionado){
                case '+':
                    primeiroNumero += segundoNumero;
                    break;
                case '-':
                    primeiroNumero -= segundoNumero;
                    break;
                case '/':
                    primeiroNumero /= segundoNumero;
                    break;
                case '*':
                    primeiroNumero *= segundoNumero;
                    break;
                case '%':
                    primeiroNumero = (primeiroNumero / 100) * segundoNumero;
                    break;
                case '^':
                    primeiroNumero **= segundoNumero;
                    break;
            }
            visor.innerHTML = primeiroNumero;
        }
        operadorSelecionado = '+';
        visor.innerHTML = '';    
    }     
});

subtracaoBtn.addEventListener('click', function(){
    if(visor.innerHTML !== ''){
        if(primeiroNumero === null){
            primeiroNumero = parseFloat(visor.innerHTML);
        }else if (operadorSelecionado) {
            const segundoNumero = parseFloat(visor.innerHTML);
            switch(operadorSelecionado){
                case '+':
                    primeiroNumero += segundoNumero;
                    break;
                case '-':
                    primeiroNumero -= segundoNumero;
                    break;
                case '/':
                    primeiroNumero /= segundoNumero;
                    break;
                case '*':
                    primeiroNumero *= segundoNumero;
                    break;
                case '%':
                    primeiroNumero = (primeiroNumero / 100) * segundoNumero;
                    break;
                case '^':
                    primeiroNumero **= segundoNumero;
                    break;
            }
            visor.innerHTML = primeiroNumero;
        }  
        operadorSelecionado = '-';
        visor.innerHTML = ''; 
    }  
});

divisaoBtn.addEventListener('click', function(){
    if(visor.innerHTML !== ''){
        if(primeiroNumero === null){
            primeiroNumero = parseFloat(visor.innerHTML);
        }else if (operadorSelecionado) {
            const segundoNumero = parseFloat(visor.innerHTML);
            switch(operadorSelecionado){
                case '+':
                    primeiroNumero += segundoNumero;
                    break;
                case '-':
                    primeiroNumero -= segundoNumero;
                    break;
                case '/':
                    primeiroNumero /= segundoNumero;
                    break;
                case '*':
                    primeiroNumero *= segundoNumero;
                    break;
                case '%':
                    primeiroNumero = (primeiroNumero / 100) * segundoNumero;
                    break;
                case '^':
                    primeiroNumero **= segundoNumero;
                    break;
            }
            visor.innerHTML = primeiroNumero;
        }
        operadorSelecionado = '/';
        visor.innerHTML = '';    
    }  
});

multiplicacaoBtn.addEventListener('click', function(){
    if(visor.innerHTML !== ''){
        if(primeiroNumero === null){
            primeiroNumero = parseFloat(visor.innerHTML);
        }else if (operadorSelecionado) {
            const segundoNumero = parseFloat(visor.innerHTML);
            switch(operadorSelecionado){
                case '+':
                    primeiroNumero += segundoNumero;
                    break;
                case '-':
                    primeiroNumero -= segundoNumero;
                    break;
                case '/':
                    primeiroNumero /= segundoNumero;
                    break;
                case '*':
                    primeiroNumero *= segundoNumero;
                    break;
                case '%':
                    primeiroNumero = (primeiroNumero / 100) * segundoNumero;
                    break;
                case '^':
                    primeiroNumero **= segundoNumero;
                    break;
            }
            visor.innerHTML = primeiroNumero;
        }
        operadorSelecionado = '*';
        visor.innerHTML = ''; 
    }  
});

virgulaBtn.addEventListener('click', function(){
    if(visor.innerHTML.includes('.')){
        return;
    }
    visor.innerHTML += '.';
});

resultadoBtn.addEventListener('click', function(){
    if(visor.innerHTML !== '' && primeiroNumero !== null && operadorSelecionado){
        const segundoNumero = parseFloat(visor.innerHTML);
        switch(operadorSelecionado){
            case '+':
                visor.innerHTML = primeiroNumero + segundoNumero;
                break;
            case '-':
                visor.innerHTML = primeiroNumero - segundoNumero;
                break;
            case '/':
                visor.innerHTML = primeiroNumero / segundoNumero;
                break;
            case '*':
                visor.innerHTML = primeiroNumero * segundoNumero;
                break;
            case '%':
                visor.innerHTML = (primeiroNumero / 100) * segundoNumero;
                break;
            case '^':
                visor.innerHTML = primeiroNumero ** segundoNumero;
                break;
        }
        primeiroNumero = null;
        operadorSelecionado = null;
        listaDeNumeros = []
    }else if (visor.innerHTML !== '') {
        visor.innerHTML = visor.innerHTML;
    } else {
        visor.innerHTML = 'Erro';
    }
});

