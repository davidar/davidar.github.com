$(window).load(function() {
    $('#quote').hide();
    $('#quote').html('<p id="quote-body" class="lead"></p><p style="text-align:right">&mdash; <a id="quote-src" href="#" rel="nofollow"></a></p>');
    var updateQuote = function() {
        var i = Math.floor(Math.random() * quotes.length);
        $('#quote-body').html(       quotes[i][0]);
        $('#quote-src').html(        quotes[i][1]);
        $('#quote-src').attr('href', quotes[i][2]);
        $('#quote').fadeIn('slow');
    };
    window.setTimeout(updateQuote, 1000);
    window.setInterval(function() {
        $('#quote').fadeOut('slow', updateQuote);
    }, 15000);
});
