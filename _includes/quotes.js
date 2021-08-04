function updateQuote() {
  document.getElementById('quote').style.opacity = 0;
  window.setTimeout(function() {
    var i = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-body').innerHTML = quotes[i][0];
    document.getElementById('quote-src').innerHTML  = quotes[i][1];
    document.getElementById('quote-src').href       = quotes[i][2];
    document.getElementById('quote').style.opacity = 1;
  }, 1000);
}

function main() {
  window.setTimeout(updateQuote, 1500);
  window.setInterval(updateQuote, 15000);
}

if(document.readyState === 'complete') {
  main();
} else {
  window.addEventListener('load', main);
}
