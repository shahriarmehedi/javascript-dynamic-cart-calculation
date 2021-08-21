// // // //  =======    ASSIGNMENT 5   ======   // // // //

// FUNCTION FOR DETERMINING EXTRA MEMORY COST //
function extraMemoryCost(extraMemoryType) {
    const extraMemory = document.getElementById('extra-memory-price');
    if (extraMemoryType == 'memoryType1') {
        extraMemory.innerText = 0;
    }
    else if (extraMemoryType == 'memoryType2') {
        extraMemory.innerText = 180;
    }
}


// FUNCTION FOR DETERMINING EXTRA STORAGE COST //
function extraStorageCost(extraStorageType) {
    const extraStorage = document.getElementById('extra-storage-price');
    if (extraStorageType == 'storageType1') {
        extraStorage.innerText = 0;
    }
    else if (extraStorageType == 'storageType2') {
        extraStorage.innerText = 100;
    }
    else if (extraStorageType == 'storageType3') {
        extraStorage.innerText = 180;
    }
}


// FUNCTION FOR DETERMINING DELIVERY COST //
function deliveryCost(deliveryType) {
    const deliveryCharge = document.getElementById('delivery-charge');
    if (deliveryType == 'deliveryType1') {
        deliveryCharge.innerText = 0;
    }
    else if (deliveryType == 'deliveryType2') {
        deliveryCharge.innerText = 20;
    }
}


// FUNCTION FOR DETERMINING TOTAL COST //
function totalPrice() {
    const basePrice = document.getElementById('base-price');
    const basePriceValue = parseInt(basePrice.innerText);

    const extraMemoryPrice = document.getElementById('extra-memory-price');
    const extraMemoryPriceValue = parseInt(extraMemoryPrice.innerText);

    const extraStoragePrice = document.getElementById('extra-storage-price');
    const extraStoragePriceValue = parseInt(extraStoragePrice.innerText);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeValue = parseInt(deliveryCharge.innerText);

    const totalPrice = document.getElementById('total-price');
    const totalPriceUpdated = (basePriceValue + extraMemoryPriceValue + extraStoragePriceValue + deliveryChargeValue);

    const finalPrice = document.getElementById('final-price');

    totalPrice.innerText = totalPriceUpdated;
    finalPrice.innerText = totalPriceUpdated;

}






// // // // ------------------ALL EVENT HANDLER ----------------------// // // //

// MEMORY TYPE 1 EVENT HANDLER
document.getElementById('memory-type-1').addEventListener('click', function () {
    extraMemoryCost('memoryType1');
    totalPrice();
})

// MEMORY TYPE 2 EVENT HANDLER
document.getElementById('memory-type-2').addEventListener('click', function () {
    extraMemoryCost('memoryType2');
    totalPrice();
})

// STORAGE TYPE 1 EVENT HANDLER
document.getElementById('storage-type-1').addEventListener('click', function () {
    extraStorageCost('storageType1');
    totalPrice();
})

// STORAGE TYPE 2 EVENT HANDLER
document.getElementById('storage-type-2').addEventListener('click', function () {
    extraStorageCost('storageType2');
    totalPrice();
})

// STORAGE TYPE 3 EVENT HANDLER
document.getElementById('storage-type-3').addEventListener('click', function () {
    extraStorageCost('storageType3');
    totalPrice();
})


// DELIVERY TYPE 1 EVENT HANDLER
document.getElementById('delivery-type-1').addEventListener('click', function () {
    deliveryCost('deliveryType1');
    totalPrice();
})

// DELIVERY TYPE 2 EVENT HANDLER
document.getElementById('delivery-type-2').addEventListener('click', function () {
    deliveryCost('deliveryType2');
    totalPrice();
})

// PROMO CODE APPLY EVENT HANDLER
document.getElementById('promo-apply').addEventListener('click', function () {
    const promoApply = document.getElementById('promo-apply');
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;
    const finalPrice = document.getElementById('final-price');
    const finalPriceValue = parseInt(finalPrice.innerText);

    if (promoInputValue == 'stevekaku') {
        finalPrice.innerText = Math.round(finalPriceValue - (finalPriceValue * 0.20));
        promoInput.value = '';
        promoApply.disabled = true;

    }
    else {
        alert("Invalid promo code !");
        promoInput.value = '';
    }
})














