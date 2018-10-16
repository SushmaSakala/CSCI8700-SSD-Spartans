$(document).ready(function () {

    $("#logout").on("click",function(e){
e.preventDefault();
localStorage.removeItem("role");
window.location("http://localhost/eStore/login.html")
    });

});