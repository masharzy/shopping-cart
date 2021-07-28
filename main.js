const plusBtn = document.getElementById('plusBtn').addEventListener('click', function(){
    plusBtnClick('#productCount');
    itemPriceUpdate('itemPrice');
    subtotalPriceUpdate();
    taxUpdate('tax');
    totalPrice();
})
const plusBtn2 = document.getElementById('plusBtn2').addEventListener('click', function(){
    plusBtnClick('#productCount2');  
    itemPriceUpdate('itemPrice2');
    subtotalPriceUpdate();
    taxUpdate('tax');
    totalPrice();
})

const minusBtn = document.getElementById('minusBtn').addEventListener('click', function(){
    minusBtnClick('#productCount');
    itemPriceDecrease1('itemPrice');
    subtotalPriceUpdate();
    taxDecrease('tax');
    totalPrice();
})
const minusBtn2 = document.getElementById('minusBtn2').addEventListener('click', function(){
    minusBtnClick('#productCount2');  
    itemPriceDecrease2('itemPrice2');
    subtotalPriceUpdate();
    taxDecrease('tax');
    totalPrice();
})

function totalPrice() {
    const id1 = document.getElementById('subTotal').innerText;
    const id2 = document.getElementById('tax').innerText;
    const id1Number = parseFloat(id1);
    const id2Number = parseFloat(id2);

    const totalPriceId = document.getElementById('totalPrice').innerText;
    const totalPriceIdNumber = parseFloat(totalPriceId);

    document.getElementById('totalPrice').innerText = id1Number + id2Number;
}
function taxUpdate(id) {
    const tax = document.getElementById(id).innerText;
    const taxNumber = parseFloat(tax);
    const totalTax = taxNumber + 15;
    document.getElementById(id).innerText = totalTax;
}
function taxDecrease(id) {
    const tax = document.getElementById(id).innerText;
    const taxNumber = parseFloat(tax);
    const totalTax = taxNumber - 15;
    document.getElementById(id).innerText = totalTax;
}

function subtotalPriceUpdate() {
    const subTotal = document.getElementById('itemPrice').innerText;
    const subTotal2 = document.getElementById('itemPrice2').innerText;
    const subTotalNumber = parseFloat(subTotal);
    const subTotalNumber2 = parseFloat(subTotal2);
    const subTotalPrice = subTotalNumber + subTotalNumber2;
    document.getElementById('subTotal').innerText = subTotalPrice;
}

function itemPriceDecrease1(id) {
    const itemPrice = document.getElementById(id).innerText;
    const itemPriceNumber = parseFloat(itemPrice);
    const price = itemPriceNumber - 1219;
    document.getElementById(id).innerText = price;
}
function itemPriceDecrease2(id) {
    const itemPrice = document.getElementById(id).innerText;
    const itemPriceNumber = parseFloat(itemPrice);
    const price = itemPriceNumber - 59;
    document.getElementById(id).innerText = price;
}
function itemPriceUpdate(id) {
    const itemPrice = document.getElementById(id).innerText;
    const itemPriceNumber = parseFloat(itemPrice);
    const price = itemPriceNumber + itemPriceNumber;
    document.getElementById(id).innerText = price;
}



function plusBtnClick(id) {
    var productInput = document.querySelector(id);
    var productInputNumber = parseFloat(productInput.value);
    productInput.value = productInputNumber + 1;
}

function minusBtnClick(id) {
    var productInput = document.querySelector(id);
    var productInputNumber = parseFloat(productInput.value);
    productInput.value = productInputNumber - 1;
}