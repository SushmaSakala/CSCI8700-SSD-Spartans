$(document).ready(function () {
    sessionStorage.setItem("cart", "")
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