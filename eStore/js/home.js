$(document).ready(function () {
    sessionStorage.setItem("cart", "")
   
    $.ajax({
        type: "GET",
        url: "../data/inventory.json",
        dataType: "text",
        success: function(jsonData) {
            console.log(jsonData)             
            localStorage.setItem("Inventory",jsonData)
        }          
     });


    $("#logout").on("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("role");
        window.location="http://localhost/eStore/login.html";
    });


    $("#cart").on("click", function (e) {
        e.preventDefault();
        window.location="http://localhost/eStore/view/cart.html";
    });



});