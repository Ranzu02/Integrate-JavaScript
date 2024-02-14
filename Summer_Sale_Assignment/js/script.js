function getProductPrice(price, productName){

    // Adding price to the cart's Total Price
    const priceElement = document.getElementById(price);
    const priceString = priceElement.innerText;
    const priceNumber = parseFloat(priceString);

    const totalPriceElement = document.getElementById('total-price');
    const totalPriceString = totalPriceElement.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);

    const priceAfterAddingItem = totalPriceNumber + priceNumber;
    const priceAfterAddingItemTwo = priceAfterAddingItem.toFixed(2);

    totalPriceElement.innerText = priceAfterAddingItemTwo;

    // Adding the Item Name to Cart

    const productListDiv = document.getElementById('items');
    const count = productListDiv.childElementCount;
    const productNameString = document.getElementById(productName).innerText;
    const p = document.createElement('p');
    p.classList.add("pb-2");
    p.innerHTML= `${count + 1}. ${productNameString} <span class="pl-4">Price:</span> ${priceNumber}`;
    productListDiv.appendChild(p);

    if (priceAfterAddingItemTwo >= 200){
        const button = document.getElementById('button-apply');
        button.removeAttribute('disabled');
        
    }

    if (priceAfterAddingItemTwo > 0){
        const purchaseButton = document.getElementById('purchase-button');
        purchaseButton.removeAttribute('disabled');
    }

    
}


const applyButton = document.getElementById('button-apply');
applyButton.addEventListener('click', applyDiscount);

function applyDiscount(){
    console.log('apply button clicked');
    const couponElement = document.getElementById('coupon-element');
    const couponValue = couponElement.value;
    if(couponValue === 'SELL200') {
        const totalPriceElement = document.getElementById('total-price');
        const totalPriceString = totalPriceElement.innerText;
        const totalPrice = parseFloat(totalPriceString);
        
        const discount = (totalPrice * 20) / 100;
        const discountFixed = discount.toFixed(2);
        const discountElement = document.getElementById('discount');
        discountElement.innerText = discountFixed;
        
        const finalPrice = totalPrice - discount;
        const finalPriceFixed =finalPrice.toFixed(2);
        const totalElement = document.getElementById('price-after-discount');
        totalElement.innerText = finalPriceFixed;
        

    }

    else {
        alert('Please enter correct Coupond Code');
    }
}

