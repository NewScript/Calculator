const $allClear = document.getElementById('ac');
const $clear = document.getElementById('c');
const $backSpace = document.getElementById('bs');
const $formulation = document.getElementById('formulation');
const $valueOrTotal = document.getElementById('valueOrTotal');

function allClear(){
    $formulation.textContent = '';
    $valueOrTotal.textContent = '0';
};

function clear(){
    $valueOrTotal.textContent = '0';
};

function backSpace(){
    console.log(typeof($valueOrTotal.textContent));
}

$allClear.addEventListener('click', allClear);
$clear.addEventListener('click', clear);
$backSpace.addEventListener('click', backSpace);
