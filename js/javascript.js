$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $("#popup").delay(3000).fadeIn();
        localStorage.setItem('popState','shown') // this will make sure the popup "never" comes back
    }

    $('#popup-close').click(function(e) // You are clicking the close button
    {
    $('#popup').fadeOut(); // Now the pop up is hidden.
    });
});