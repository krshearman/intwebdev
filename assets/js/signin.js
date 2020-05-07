/* TODO:
* Validate username and password (not blank)
*
* jQuery AJAX request to send user sign in data
*
* */

"use strict";

function clearSigninForm() {
    $('#user').val('');
    $('#pass').val('');
    $('#signin-msg').css("border", "none");
    $('#signin-msg').css("background-color", "white");
    //$('#signin-msg').css("color", "white");
}

$(document).ready(function () {

    $('#signin-submit').click(function () {
        var errorMessage = "";

        var user = $('#user').val().trim();
        var pass = $('#pass').val().trim();

        $('#user').val(user);
        $('#pass').val(pass);

        if (user === "") {
            errorMessage += "Username cannot be empty.<br>";
        }

        if (pass === ""){
            errorMessage += "Password cannot be empty.<br>";
        }

        if (errorMessage.length === 0) {
            $('#signin-msg').html("Signing in...");
            //Ajax here
            clearSigninForm();

        } else {
            $('#signin-msg').waypoint(function (direction) {
                $('#signin-msg').addClass('animated bounceInLeft');

            }, { offset: '50%'

            });
            $('#signin-msg').css("border", "2px solid darkorchid");
            $('#signin-msg').css("background-color", "#e2ffff");
            $('#signin-msg').css("border-radius", "20px");
            $('#signin-msg').html(errorMessage);
        }

    });




});