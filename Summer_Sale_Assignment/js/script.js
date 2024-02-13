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
}

