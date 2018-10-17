$(document).ready(function () {

    $('#signUpForm').validate({
        rules: {
            userId: {
                minlength: 3,
                required: true
            },
            pwd: {
                required: true,
                minlength: 2
            },
            confPwd: {
                minlength: 2,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.addClass('valid')
                .closest('.form-group').removeClass('error').addClass('success');
        }
    });

});