const viewCalculation = {
    calculationFormulation: document.getElementById('calculationFormulation'),
    numberPresentation: document.getElementById('numberPresentation')
};

const action = {
    allClear: document.getElementById('allClear'),
    clear: document.getElementById('clear'),
    backSpace: document.getElementById('backSpace')
};

const operator = {
    sum: document.getElementById('sum'),
    subtraction: document.getElementById('subtraction'),
    division: document.getElementById('division'),
    multiplication: document.getElementById('multiplication'),
    result: document.getElementById('result')
};

const operand = document.getElementsByClassName('operand');

const signalChange = document.getElementById('signalChange');

const comma = document.getElementById('comma');

//-------------------------------------------------------------

let $strIntegerValue = '';
let $strDecimalValue = '';
let $strSignalValue = '';
let $strFlagComma ={
    comma:'',
    indexComma:''
};

//-------------------------------------------------------------

function clearValues(){
    $strIntegerValue = '';
    $strDecimalValue = '';
    $strSignalValue = '';
    $strFlagComma.comma = '';
    $strFlagComma.indexComma = '';
}

function numberPresentation(){
    viewCalculation.numberPresentation.textContent = 
        `${$strSignalValue}${parseFloat($strIntegerValue).toLocaleString('pt-BR')}${$strFlagComma.comma}${$strDecimalValue}`;
};

function storeNumber(number){
    if (!$strFlagComma.comma) {
        $strIntegerValue += number.toString();
    }else{
        $strDecimalValue += number.toString();
    };
};

function allClear() {
    clearValues();
    viewCalculation.numberPresentation.textContent = '0';
    viewCalculation.calculationFormulation.textContent = '0';
};

function clear(){
    clearValues();
    viewCalculation.numberPresentation.textContent = '0';
};

function maximumCharactersAllowed(number) {
    return ( $strIntegerValue.length + $strDecimalValue.length  ) < number ? true : false;
}

function includeNumber(e) {
    if (maximumCharactersAllowed(10)) {
        storeNumber(e.target.id);
        numberPresentation();
    };
};

function includeComma() {
    if (!$strFlagComma.comma) {
        $strFlagComma.comma = ',';
        numberPresentation();
        $strFlagComma.indexComma = (viewCalculation.numberPresentation.textContent).indexOf(',');
    };
};

function changeSign(){
    if(!$strSignalValue){
        $strSignalValue = '-';
        numberPresentation();
    }else{
        $strSignalValue = '';
        numberPresentation();
    };
};

function bsNumberPresentation(){
    let indexOfTheCharacterToBeDeleted = ((viewCalculation.numberPresentation.textContent).length - 1);
    let letterToErase = viewCalculation.numberPresentation.textContent.charAt(indexOfTheCharacterToBeDeleted);
    viewCalculation.numberPresentation.textContent = (viewCalculation.numberPresentation.textContent).slice(0, indexOfTheCharacterToBeDeleted);
    if(indexOfTheCharacterToBeDeleted === 0){
        viewCalculation.numberPresentation.textContent = '0';
        maximumCharactersAllowed(0);
    };
    if(letterToErase === ','){
        $strFlagComma.comma = '';
        $strFlagComma.indexComma = '';
    };
    if(letterToErase === '-'){
        $strSignalValue = '';
    };
}

function bsValues(){
    let lengthNumber = ((viewCalculation.numberPresentation.textContent).length);
    if($strFlagComma.indexComma){
        $strDecimalValue = (viewCalculation.numberPresentation.textContent).slice($strFlagComma.indexComma + 1, lengthNumber);
    }else{
        viewCalculation.numberPresentation.textContent = viewCalculation.numberPresentation.textContent.replace(/[-.]/g, '');
        $strIntegerValue = (viewCalculation.numberPresentation.textContent).slice(0, lengthNumber);
    };
};

function backSpace() {
    bsNumberPresentation();
    bsValues();
    console.log('Integer - ' + $strIntegerValue);
    console.log('Decimal - ' + $strDecimalValue);
};

//-------------------------------------------------------------

action.allClear.addEventListener('click', allClear);

action.clear.addEventListener('click', clear);

action.backSpace.addEventListener('click', backSpace);

for (const iterator of operand) {
    iterator.addEventListener('click', includeNumber);
}

comma.addEventListener('click', includeComma);

signalChange.addEventListener('click', changeSign);