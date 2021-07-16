// const $formulation = document.getElementById('formulation');
// const $representation = document.getElementById('value');
// const $signal = document.getElementById('signal');

// const $action = document.getElementsByClassName('action');
// const $allClear = $action[0];
// const $clear = $action[1];
// const $backSpace = $action[2];

// const $operands = document.getElementsByClassName('operand');

// const $operators = document.getElementsByClassName('operator');

// const $decimal = document.getElementById('decimal');

// let $representValue = '';
// let $integerValue = '';
// let $decimalValue = '';

// let $flagComma = false;
// let $flagSignal = true;

// function representValue(){
//     if (!$flagComma) {
//         $representation.textContent = parseFloat($integerValue).toLocaleString('pt-BR');
//     }else{
//         $representation.textContent = `${parseFloat($integerValue).toLocaleString('pt-BR')},${$decimalValue}`;
//     }
// }

// function storeInteger(){

// }

// function storeDecimalNumber(){

// }

// function storeNumber(number){
//     if (!$flagComma) {
//         $integerValue += number;
//     }else{
//         $decimalValue += number;
//     }
//     // console.log('Inclusao: ' + $integerValue, $decimalValue);
// }

// function allClear() {
//     $formulation.textContent = '0';
//     $representation.textContent = '0';
//     $integerValue = '';
//     $decimalValue = '';
//     $flagComma = false;
// };

// function clear() {
//     $representation.textContent = '0';
//     $integerValue = '';
//     $decimalValue = '';
//     $flagComma = false;
// };

function backSpace() {

    let indexLetterToErase = (($representation.textContent).length - 1);
    let letterToErase = $representation.textContent.charAt(indexLetterToErase);

    let indexIntegerValueToErase = (($integerValue).length - 1);
    let integerToErase = $representation.textContent.charAt(indexIntegerValueToErase);
    
    let indexDecimalValueToErase = (($decimalValue).length - 1);
    let decimalToErase = $representation.textContent.charAt(indexDecimalValueToErase);

    if(letterToErase === ','){
        let temp = ($representation.textContent).slice(0, indexLetterToErase);
        $representation.textContent = temp;
        $flagComma = false;
        return;
    }

    if(letterToErase === '.'){
        let temp = ($representation.textContent).slice(0, indexLetterToErase);
        $representation.textContent = temp;
        return;
    };

    if($flagComma){

        let tempRepresentation = ($representation.textContent).slice(0, indexLetterToErase);
        let tempDecimal= ($decimalValue).slice(0, indexDecimalValueToErase);

        $representation.textContent = tempRepresentation;
        $decimalValue = tempDecimal;
        return;

    }else{

        let tempRepresentation = ($representation.textContent).slice(0, indexLetterToErase);
        let tempInteger = ($integerValue).slice(0, indexIntegerValueToErase);
        
        if(tempRepresentation > 1){
            $representation.textContent = tempRepresentation;
            $integerValue = tempInteger;
            return;
        }else{
            $representation.textContent = '0';
            $integerValue = '';
            $decimalValue = '';
        }

    }  
    
}

// function maximumCharactersAllowed(character) {
//     return ( $integerValue.length + $decimalValue.length  ) < character ? true : false;
// }

// function includeNumber(e) {
//     if (maximumCharactersAllowed(10)) {
//         storeNumber(e.target.id);
//         representValue();
//     }
// }

// function formulation(e) {

// }

// function clearPointsOfANumber() {
//     let temp = $representation.textContent.replace(/\./g, '');
//     $representation.textContent = temp;
// };

// function includeComma() {
//     if (!$flagComma) {
//         $representation.textContent += ',';
//         $flagComma = true;
//     }
// }

// function changeSign(){
//     if($flagSignal){
//         $integerValue = '-'+$integerValue;
//         $flagSignal = false;
//     }else{
//         $integerValue = $integerValue.slice(1);
//         $flagSignal = true;
//     }
//     representValue();
//     console.log($integerValue);
//     console.log('chamou changeSign');
// }

// $allClear.addEventListener('click', allClear);
// $clear.addEventListener('click', clear);
// $backSpace.addEventListener('click', backSpace);

// for (const iterator of $operands) {
//     iterator.addEventListener('click', includeNumber);
// }

// for (const iterator of $operators) {
//     iterator.addEventListener('click', formulation);
// }

// $decimal.addEventListener('click', includeComma);

// $signal.addEventListener('click', changeSign);