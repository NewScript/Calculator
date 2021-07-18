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

let $strInteger = '';
let $strDecimal = '';
let $strSignal = '';
let $flagComma ={
    strComma:'',
    numIndexComma: 0
};
let $strFullNumber = '0';

let $numNumber = 0;

//-------------------------------------------------------------

function clearValues(){
    $strInteger = '';
    $strDecimal = '';
    $strSignal = '';
    $flagComma.strComma = '';
    $flagComma.numIndexComma = null;
    $strFullNumber = '';
    $numNumber = 0;
}

function consolidateNumber(){
    $strFullNumber = `${$strSignal}${parseFloat($strInteger).toLocaleString('pt-BR')}${$flagComma.strComma}${$strDecimal}`;
};

function presentNumber(){
    consolidateNumber();
    if($strInteger != 0){
        viewCalculation.numberPresentation.textContent = $strFullNumber;
    }else{
        viewCalculation.numberPresentation.textContent = '0';
    }
        
};

function presentFormulation(){
    if($strInteger != 0){
        viewCalculation.calculationFormulation.textContent = $strFullNumber;
    }else{
        viewCalculation.calculationFormulation.textContent = '0';
    } 
};

function storeNumber(strNumber){
    if (!$flagComma.strComma) {
        $strInteger += strNumber;
    }else{
        $strDecimal += strNumber;
    };
};

function clear(){
    clearValues();
    presentNumber()
};

function allClear() {
    clearValues();
    presentNumber()
    presentFormulation();
};

function maximumCharactersAllowed(numNumber) {
    return ( $strInteger.length + $strDecimal.length  ) < numNumber ? true : false;
}

function includeNumber(btnClicked) {
    if (maximumCharactersAllowed(10)) {
        storeNumber(btnClicked.target.id);
        presentNumber();
    };
};

function changeSign(){
    if(!$strSignal){
        $strSignal = '-';
        presentNumber();
    }else{
        $strSignal = '';
        presentNumber();
    };
};

//-------------------------------------------------------------

action.allClear.addEventListener('click', allClear);

action.clear.addEventListener('click', clear);

for (const iterator of operand) {
    iterator.addEventListener('click', includeNumber);
};

signalChange.addEventListener('click', changeSign);