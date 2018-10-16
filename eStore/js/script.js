$(document).ready(function () {

    // check login
    $("#login_form").submit(function (e) {
        e.preventDefault();
        var data = {};
        $.each($(this).serializeArray(), function (i, field) {
            data[field.name] = field.value;
        });
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/adminLogin.csv",
            dataType: "text",
            success: function(data) {validateCredentials(data);}
         });


    });
//for validation
    function validateCredentials(allData) {
        var TextLines = allData.split(/\r\n|\n/);
        var headers = TextLines[0].split(',');
        var lines = [];
    
        for (var i=1; i<TextLines.length; i++) {
            var data = TextLines[i].split(',');
            if (data.length == headers.length) {
    
                var tarr = [];
                for (var j=0; j<headers.length; j++) {
                    tarr.push(headers[j]+":"+data[j]); 
                }
                lines.push(tarr);
            }
        }
        //console.log(lines)
    }




});
