$(document).ready(function () {
    // check login
    $("#loginError").hide();
    $("#login_form").submit(function (e) {
        e.preventDefault();
        var loginData = {};
        $.each($(this).serializeArray(), function (i, field) {
            loginData[field.name] = field.value;
        });
       
        $.ajax({
            type: "GET",
            url: "data/credentials.json",
            dataType: "text",
            success: function(jsonData) {             
                validateCredentials(JSON.parse(jsonData),loginData);
            }          
         });

    });
// validate credentials
    function validateCredentials(jsonData,loginData) {        
      for(i=0;i<jsonData.length;i++){
        console.log( jsonData[i].id+  "    " + loginData["userId"]);
        if(jsonData[i].id==loginData["userId"]  && jsonData[i].pwd==loginData["password"]  ){
            $("#loginError").hide();
            localStorage.setItem("role", jsonData[i].role);  
               
            window.location = "http://localhost/eStore/view/home.html";
            return;
        }
      }
      $("#loginError").show();

   }
  

});