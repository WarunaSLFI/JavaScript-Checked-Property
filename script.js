let username = document.getElementById("username");

let subscribe = document.getElementById("subscribe");

let visaBtn = document.getElementById("visaBtn");
let mastercardBtn = document.getElementById("mastercardBtn");
let paypalBtn = document.getElementById("paypalBtn");

let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let usernameResult = document.getElementById("usernameResult");
let subscribeResult = document.getElementById("subscribeResult");
let paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function(){
    if(username.value.trim() !== ""){
        usernameResult.textContent = "Hello " + username.value;
    }
    else{
        usernameResult.textContent = "Username NOT Entered";
    }

    if(subscribe.checked){
        subscribeResult.textContent = "You have subscribed"
    }
    else{
        subscribeResult.textContent = "You have NOT subscribed"
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You have paid with VISA"
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = "You have paid with MasterCard"
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = "You have paid with PayPal"
    }
    else{
        paymentResult.textContent = "Please choose payment type"
    }
}

resetBtn.onclick = function(){
    username.value = "";

    subscribe.checked = false;

    visaBtn.checked = false;
    mastercardBtn.checked = false;
    paypalBtn.checked = false;

    usernameResult.textContent = "";
    subscribeResult.textContent = "";
    paymentResult.textContent = "";
}
