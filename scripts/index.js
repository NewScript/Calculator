const $formulation = document.getElementById('formulation');
const $value = document.getElementById('value');

const $action = document.getElementsByClassName('action');
const $allClear = $action[0];
const $clear = $action[1];
const $backSpace = $action[2];

const $operands = document.getElementsByClassName('operand');

const $operators = document.getElementsByClassName('operator');

const $decimal = document.getElementById('decimal');

let $flagZeroValue = true;
let $flagZeroFormulation = true;
let $flagPoint = 3;
let $flagComma = false;

function allClear(){
    $formulation.textContent = '0';
    $value.textContent = '0';
    $flagZeroValue = true;
    $flagZeroFormulation = true;
    $flagPoint = 3;
};

function clear(){
    $value.textContent = '0';
    $flagZeroValue = true;
    $flagPoint = 3;
};

function backSpace(){
    let temp = ($value.textContent).slice(0,(($value.textContent).length - 1));
    $value.textContent = temp;
    if(!temp.length){
        $value.textContent = '0';
        $flagZeroValue = true;
        $flagPoint = 3;
    }
}

function noEnableZeroLeft(e){
    if(($value.textContent).length == 1 && e.target.id == 0){
        $value.textContent = '0';
    }
}

function includeDigit(e){
    if($flagZeroValue){
        if(!(($value.textContent).length == 1 && e.target.id == '0')){
            $value.textContent = '';
            $value.textContent += e.target.id;
            $flagZeroValue = false;
            $flagPoint = 3;
            includePoint();
        }
    }else{
        $value.textContent += e.target.id;
        includePoint();
    }
}

function formulation(e){
    if($flagZeroFormulation){
        $formulation.textContent = '';
        $formulation.textContent += `${$value.textContent} ${e.target.id} `;
        $value.textContent = '0';
        $flagZeroValue = true;
        $flagZeroFormulation = false;
    }else{
        $formulation.textContent += `${$value.textContent} ${e.target.id} `;
        $value.textContent = '0';
        $flagZeroValue = true;
    }
}

// function includePoint(){
//     for(let i = $value.textContent.length; i > 0; i-- ){
//        if($value.textContent.length >= $flagPoint){
//            $value.textContent += '.';
//            $flagPoint += 4;
//        }
//     }
// }

// function includePoint(){
//     for(let i = $value.textContent.length; i > 0; i-- ){
//        if($value.textContent.length >= $flagPoint){
//            $value.textContent += '.';
//            $formulation.textContent = $value.textContent[i-1];
//            $flagPoint += 4;
//        }
//     }
// }

function includePoint(){
    for(let i = ($value.textContent.length - 1); i >= 0; i-- ){
        console.log($value.textContent[i]);
    }
}

function includeComma(){
    if(!$flagComma){
        $value.textContent += ',';
        $flagComma = true;
    }
}

$allClear.addEventListener('click', allClear);
$clear.addEventListener('click', clear);
$backSpace.addEventListener('click', backSpace);

for (const iterator of $operands) {
    iterator.addEventListener('click', includeDigit);
}

for (const iterator of $operators) {
    iterator.addEventListener('click', formulation);
}

$decimal.addEventListener('click', includeComma);