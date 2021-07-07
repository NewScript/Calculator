let num1 = 148759623;
// O erro aqui é a vírgula, o JS não trabalha com vírgula

let num2 = '14,8.7-59/623365,688.4';

let num3 = '444.555.567,8790';


let num4 = '148759623365,6884';

// function clearPointsOfANumber(){
//     let temp = num1.replace(/\./g, '');
//     console.log(temp);
// }

// clearPointsOfANumber();

// function clearPointsOfANumber(){
//     let newArray = num1.split('');
//     let targetInvertidoString = newArray.reverse().toString().replace(/\,/g, '');
//     targetInvertidoString.replace(/(\d{3})?/,"$1.");
//     console.log(targetInvertidoString);
// }

// function formatarValor(valor) {
//     valor = parseFloat(valor);
//     let temp = valor.toLocaleString('pt-BR');;
//     return temp;
// }



// function clearSymbols(valor){
//     let temp = valor.replace(/[-,/.]/g, '');
//     return temp;
// }

// function divideNumberIntoValueAndDecimal(){
//     let indexComma = num3.lastIndexOf(',');
//     let valor = num3.substring(0, indexComma);
//     let decimal = num3.substring(indexComma + 1, num3.length);
//     console.log(`${valor} -- ${decimal}`);
// }

function maximumCharactersAllowed(target, character){
    let temp = target.toString();
    return temp.length >= character ? true : false;
}

function containsOnlyNumbers(target){
    return typeof(target) === 'number' ? true : false;
}

function includeZero(target){
    if(!maximumCharactersAllowed(target, 1) && target.textContent != '0'){
        target.textContent += '0';
    }
}

function representValue(){



}


// console.log(formatarValor(clearSymbols(num2)));
// Só funciona com o num2

// divideNumberIntoValueAndDecimal();

console.log(formatarValor(num4))