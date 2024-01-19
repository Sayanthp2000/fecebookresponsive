
$().ready(function() {
    
    $("#formvalidation").validate();


    $("#formvalidation").validate({
        rules: {
            userid:"required",
            userid :{
                required:true,
            },
            pass: {
                required: true,
                minlength: 5
            },
            
            userid: {
                required: true,
                email: true
            },

            agree: "required"
        },
        messages: {
            firstname: "Please enter your email adress",

            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        }
    });

});
    