
/******* product js*******/
function updateProductInput(product,isAdd,price){
	const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    
    if(isAdd){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }   
    productInput.value = productNumber;

    const updateTotal = document.getElementById(product + "-price");  
    updateTotal.innerText = productNumber * price;
    calculation();
}

function commonProduct(product){
    const productInput = document.getElementById(product + "-number");
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}

function calculation(){
    const iphoneAmmount = commonProduct('iphone') * 999;
    const samsungAmmount = commonProduct('samsung') * 1019;
    const laptopAmmount = commonProduct('laptop') * 1050;
    const cameraAmmount = commonProduct('camera') * 799;
    const airpodAmmount = commonProduct('airpod') * 599;
    const watchAmmount = commonProduct('watch') * 699;
    const subTotal = iphoneAmmount + samsungAmmount + laptopAmmount + cameraAmmount + airpodAmmount + watchAmmount;   
    const tax = subTotal/10;
    const grandTotal = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = grandTotal;

}

document.getElementById('iphone-plus').addEventListener('click', function(){
	updateProductInput('iphone',true,999);   
});
document.getElementById('iphone-minus').addEventListener('click', function(){
	updateProductInput('iphone',false,999);   
});
document.getElementById('samsung-plus').addEventListener('click', function(){
	updateProductInput('samsung',true,1019);   
});
document.getElementById('samsung-minus').addEventListener('click', function(){
	updateProductInput('samsung',false,1019);   
});
document.getElementById('laptop-plus').addEventListener('click', function(){
	updateProductInput('laptop',true,1050);   
});
document.getElementById('laptop-minus').addEventListener('click', function(){
	updateProductInput('laptop',false,1050);   
});
document.getElementById('camera-plus').addEventListener('click', function(){
	updateProductInput('camera',true,799);   
});
document.getElementById('camera-minus').addEventListener('click', function(){
	updateProductInput('camera',false,799);   
});
document.getElementById('airpod-plus').addEventListener('click', function(){
	updateProductInput('airpod',true,599);   
});
document.getElementById('airpod-minus').addEventListener('click', function(){
	updateProductInput('airpod',false,599);   
});
document.getElementById('watch-plus').addEventListener('click', function(){
	updateProductInput('watch',true,699);   
});
document.getElementById('watch-minus').addEventListener('click', function(){
	updateProductInput('watch',false,699);   
});

document.getElementById('order').addEventListener('click', function(){
   console.log('oppo')
   window.location.href = "thank.html";   
});