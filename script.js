const toggle = document.getElementById("checkbox");
const monthlyPrices = document.querySelectorAll(".month-span");
const annuallyPrices = document.querySelectorAll(".year-span");

toggle.addEventListener("change", e => {
    monthlyPrices.forEach(price => {
        if(price.classList.contains("hide-price")){
            price.classList.remove("hide-price");
            price.classList.add("show-price");
        }else{
            price.classList.remove("show-price");
            price.classList.add("hide-price");
        };
    });

    annuallyPrices.forEach(price => {
        if(price.classList.contains("hide-price")){
            price.classList.remove("hide-price");
            price.classList.add("show-price");
        }else{
            price.classList.remove("show-price");
            price.classList.add("hide-price");
        };
    });
});