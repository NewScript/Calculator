const $formulation = document.getElementById('formulation');
const $value = document.getElementById('value');

const $action = document.getElementsByClassName('action');
const $allClear = $action[0];
const $clear = $action[1];
const $backSpace = $action[2];

const $operands = document.getElementsByClassName('operand');

let $flagZero = true;

function allClear(){
    $formulation.textContent = '0';
    $value.textContent = '0';
    $flagZero = true;
};

function clear(){
    $value.textContent = '0';
    $flagZero = true;
};

function backSpace(){
    let temp = ($value.textContent).slice(0,(($value.textContent).length - 1));
    $value.textContent = temp;
    if(!temp.length){
        $value.textContent = '0';
        $flagZero = true;
    }
}

function noEnableZeroLeft(e){
    if(($value.textContent).length == 1 && e.target.id == 0){
        $value.textContent = '0';
    }
}

function includeDigit(e){
    if(!(($value.textContent).length == 1 && e.target.id == 0)){
        if($flagZero){
            $value.textContent = '';
            $value.textContent += e.target.id;
            $flagZero = false;
        }else{
            $value.textContent += e.target.id;
        }
    }
}

$allClear.addEventListener('click', allClear);
$clear.addEventListener('click', clear);
$backSpace.addEventListener('click', backSpace);

for (const iterator of $operands) {
    iterator.addEventListener('click', includeDigit);
}