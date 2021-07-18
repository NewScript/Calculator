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
    strIndexComma: ''
};
let $strFullNumber = '0';

let $numNumber = 0;

//-------------------------------------------------------------

function clearValues(){
    $strInteger = '';
    $strDecimal = '';
    $strSignal = '';
    $flagComma.strComma = '';
    $flagComma.strIndexComma = '';
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

function presentFormulation(e){
    if(viewCalculation.calculationFormulation.textContent === '0'){
        viewCalculation.calculationFormulation.textContent = '';
    }
    if($strInteger != 0){
        viewCalculation.calculationFormulation.textContent += `${$strFullNumber} ${e.target.textContent} `;
        clear();
    }else{
        viewCalculation.calculationFormulation.textContent = '0';
    };
};

function storeNumber(strNumber){
    if(!($strInteger === '' && strNumber === '0')){
        if (!$flagComma.strComma) {
            $strInteger += strNumber;
        }else{
            $strDecimal += strNumber;
        };
    }
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
        calculateCommaIndex();
    }else{
        $strSignal = '';
        presentNumber();
        calculateCommaIndex();
    };
};

function includeComma() {
    if (!$flagComma.strComma) {
        $flagComma.strComma = ',';
        presentNumber();
        calculateCommaIndex();
    };
};

function calculateCommaIndex(){
    if($flagComma.strComma){
        $flagComma.strIndexComma = $strSignal.length + $strInteger.length;
    }else{
        $flagComma.strIndexComma = '';
    };
};

function bsPresentNumber(){
    
    let indexOfTheCharacterToBeDeleted = ((viewCalculation.numberPresentation.textContent).length - 1);
    let letterToErase = viewCalculation.numberPresentation.textContent.charAt(indexOfTheCharacterToBeDeleted);
    viewCalculation.numberPresentation.textContent = (viewCalculation.numberPresentation.textContent).slice(0, indexOfTheCharacterToBeDeleted);
    
    if(indexOfTheCharacterToBeDeleted === 0){
        viewCalculation.numberPresentation.textContent = '0';
        maximumCharactersAllowed(0);
    };

    if(letterToErase != ',' || letterToErase != '-' || letterToErase != '.'){
        bsStoreNumber();
    }

    if(letterToErase === ','){
        $flagComma.strComma = '';
        calculateCommaIndex();
    };
    if(letterToErase === '-'){
        $strSignalValue = '';
    };

};

function bsStoreNumber(){
    if($flagComma.strIndexComma){
        $strDecimal = $strDecimal.slice(0, $strDecimal.length - 1);
        // console.log('Decimal = ' + $strDecimal + ' - ' + $strDecimal.length);
    }else{
        $strInteger = $strInteger.slice(0, $strInteger.length - 1);
        // console.log('Integer = ' + $strInteger + ' - ' + $strInteger.length);
    };
};

//-------------------------------------------------------------

action.allClear.addEventListener('click', allClear);

action.clear.addEventListener('click', clear);

for (const iterator of operand) {
    iterator.addEventListener('click', includeNumber);
};

action.backSpace.addEventListener('click', bsPresentNumber);

operator.sum.addEventListener('click', presentFormulation);

operator.subtraction.addEventListener('click', presentFormulation);

operator.division.addEventListener('click', presentFormulation);

operator.multiplication.addEventListener('click', presentFormulation);

operator.result.addEventListener('click', presentFormulation);

signalChange.addEventListener('click', changeSign);

comma.addEventListener('click', includeComma);