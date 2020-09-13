$("#login-button").click(function(event){
    
 var usernamevalue =   $('#username').val(); 
alert(usernamevalue);  

$('form').fadeOut(500);
$('.wrapper').addClass('form-success');
});