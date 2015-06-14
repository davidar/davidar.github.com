$(document).ready(function() {
    $('#quote').hide();
    $('#quote').html('<p id="quote-body" class="lead"></p><p style="text-align:right">&mdash; <a id="quote-src" href="#"></a></p>');
    var updateQuote = function() {
        var i = Math.floor(Math.random() * quotes.length);
        $('#quote-body').html(       quotes[i][0]);
        $('#quote-src').html(        quotes[i][1]);
        $('#quote-src').attr('href', quotes[i][2]);
        $('#quote').fadeIn('slow');
    };
    updateQuote();
    window.setInterval(function() {
        $('#quote').fadeOut('slow', updateQuote);
    }, 15000);
});
