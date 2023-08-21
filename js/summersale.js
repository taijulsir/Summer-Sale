// Get number from String
function stringToNumber(idName) {
    let stringValue = document.getElementById(idName).innerText;
    stringValue = parseFloat(stringValue);
    return stringValue;
}
// Set update total price
function setdUpdatePrice(idName, newValue) {
    let oldPrice = document.getElementById(idName);
    oldPrice.innerText = newValue;
}
// Coupon code discount section 
function balance() {
    let discountCouponField = document.getElementById('coupon-input').value;
    let totalPrice = stringToNumber('total-price');
    let totalPay =stringToNumber('total-pay-value');
    if (discountCouponField === 'SELL200') {
        let divide = (totalPrice / 100) * 20;
        divide = divide.toFixed(2);
        setdUpdatePrice('discount-value', divide);
        let newTotalPayValue = totalPrice - divide;
        newTotalPayValue = newTotalPayValue.toFixed(2);
        setdUpdatePrice('total-pay-value', newTotalPayValue);
    }
}
// added price and create a list of product
function priceOfProduct(idName, nameOfProduct) {
    let priceIsString = document.getElementById(idName).innerText;
    priceIsString = parseFloat(priceIsString);


    let productNameString = document.getElementById(nameOfProduct).innerText;
// Show product name in a list
    let productList = document.getElementById('productList');
    let createProductList = document.createElement('li');
    createProductList.innerText = productNameString;
    productList.appendChild(createProductList);


// Total amount
    let totalAmount = stringToNumber('total-price');
// currrenttotal price
    let currentTotalPrice = priceIsString + totalAmount;
    setdUpdatePrice('total-price', currentTotalPrice);
    setdUpdatePrice('total-pay-value', currentTotalPrice);

// remove disabled function when total price up to 200
    if (currentTotalPrice >= 200) {
        let purchaseButton = document.getElementById('apply-btn');
        purchaseButton.removeAttribute('disabled', true);
    }
// Condition for remove attribute in purchase button when total price getter than 0
    if (currentTotalPrice > 0) {
        let purchaseButton = document.getElementById('make-purchase-btn');
        purchaseButton.removeAttribute('disabled', true);
    }
}
// Go-Home Button reload another page
const goHomeBtn = document.getElementById('go-home-btn').addEventListener('click', function(){
    window.location.href = 'index.html';
})
