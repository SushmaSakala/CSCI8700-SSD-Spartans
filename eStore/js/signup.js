$(document).ready(function () {

    $("#signUpForm").submit(function (e) {
        e.preventDefault();
        var signUpData={};   
        var validFlag=true;  
        var pwdFlag=true;
        $.each($(this).serializeArray(), function (i, field) {
            signUpData[field.name] = field.value;
        });

        validFlag=validateSignUp();
        pwdFlag=validatePassword(signUpData);

        if(validFlag && pwdFlag){
            saveSignUpData(signUpData);
        }

    });

    function validateSignUp(){
        var validFlag=true
        $(".form-group").each(function () {
            if ($(this).find("input").length>0){
            
            if(!($(this).find("input").get(0).value)) {
                $(this).addClass("has-error");
                validFlag=false;
            }else{
                $(this).removeClass("has-error");  
            }
        }
        if ($(this).find("textarea").length>0){            
            if(!($(this).find("textarea").get(0).value)) {
                $(this).addClass("has-error"); 
                validFlag=false;         
            }else{
                $(this).removeClass("has-error");  
            }
        }
        });
        return validFlag;
    }

    function validatePassword(signUpData){
        var validFlag=true
        if (signUpData["pwd"] != signUpData["confPwd"]) {
            $("#confPwd").closest( ".form-group" ).addClass("has-error");
            validFlag=false;
        }else{
            if(signUpData["confPwd"]){
                $("#confPwd").closest( ".form-group" ).removeClass("has-error");
            }
       }
       return validFlag;
    }
    function saveSignUpData(signUpData){
        console.log(signUpData)
    }

});