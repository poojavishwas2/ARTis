function checkmail(input) {
    var pattern1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (pattern1.test(input)) { return true; } else { return false; }
}
function proceed() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var msg = document.getElementById("message");
    var errors = "";
    if (name.value === "") {
        name.className = 'error';
        return false;
    }
    else if (email.value === "") {
        email.className = 'error';
        return false;
    }
    else if (checkmail(email.value) === false) {
        alert('Please provide a valid email address.');
        return false;
    }
   
    else if (phone.value === "") {
        phone.className = 'error';
        return false;
    }
    else if (msg.value === "") {
        msg.className = 'error';
        return false;
    }
    else {
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $("#contact_form").serialize(),
            success: function (msg) {
                //alert(msg);
                if (msg) {
                    $('#contact_form').fadeOut(1000);
                    $('#contact_message').fadeIn(1000);
                    document.getElementById("contact_message");
                    return true;
                }
            }
        });
    }
};

