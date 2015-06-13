var quotes = [
    ['Quotation. The act of repeating erroneously the words of another. The words erroneously repeated.',
     'Ambrose Bierce', 'https://en.wikisource.org/wiki/The_Devil%27s_Dictionary'],
    ['Only wimps use tape backup: _real_ men just upload their important stuff on ftp, and let the rest of the world mirror it ;)',
     'Linus Torvalds', 'http://groups.google.com/group/linux.dev.kernel/msg/76ae734d543e396d'],
    ['Talk is cheap. Show me the code.',
     'Linus Torvalds', 'http://lkml.org/lkml/2000/8/25/132'],
    ['E = mc&#178;',
     'Albert Einstein', 'http://fourmilab.ch/etexts/einstein/E_mc2/www/'],
    ['Not to be absolutely certain is, I think, one of the essential things in rationality.',
     'Bertrand Russell', 'http://positiveatheism.org/hist/russell8.htm'],
    ['Creationists make it sound as though a "theory" is something you dreamt up after being drunk all night.',
     'Isaac Asimov', 'http://en.wikiquote.org/wiki/Isaac_Asimov'],
    ['Numbers exist only in our minds. There is no physical entity that is number 1. If there were, 1 would be in a place of honor in some great museum of science, and past it would file a steady stream of mathematicians gazing at 1 in wonder and awe.',
     'John Fraleigh, Raymond Beauregard', 'http://en.wikiquote.org/wiki/Mathematics'],
    ['Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.',
     'Winston Smith', 'http://en.wikipedia.org/wiki/Nineteen_Eighty-Four'],
    ['Science is what we understand well enough to explain to a computer. Art is everything else we do.',
     'Donald Knuth', 'http://www.cis.upenn.edu/~wilf/foreword.pdf'],
    ['Someone decided to trash the one part of Windows that was usable? The file system is no longer usable. The registry is not usable. This program listing was one sane place but now it is all crapped up.',
     'Bill Gates', 'http://blog.seattlepi.com/microsoft/archives/141821.asp'],
    ['Microsoft looks at new ideas, they don\'t evaluate whether the idea will move the industry forward, they ask, "how will it help us sell more copies of Windows?"',
     'Bill Gates', 'http://msversus.org/microsoft-software.html'],
    ['The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.',
     'Douglas Adams', 'http://biota.org/people/douglasadams/'],
    ['Isn\'t it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?',
     'Douglas Adams', 'http://en.wikiquote.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy#Chapter_16'],
    ['INSUFFICIENT DATA FOR MEANINGFUL ANSWER',
     'Multivac', 'http://multivax.com/last_question.html'],
    ['If I have seen further it is by standing on the shoulders of Giants.',
     'Isaac Newton', 'http://en.wikiquote.org/wiki/Isaac_Newton'],
    ['The teaching of BASIC should be rated as a criminal offence: it mutilates the mind beyond recovery.',
     'Edsger W. Dijkstra', 'http://cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD898.html'],
    ['The question of whether Machines Can Think ... is about as relevant as the question of whether Submarines Can Swim.',
     'Edsger W. Dijkstra', 'http://cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD898.html'],
    ['Elegance is not a dispensable luxury but a quality that decides between success and failure.',
     'Edsger W. Dijkstra', 'https://www.cs.utexas.edu/users/EWD/transcriptions/EWD12xx/EWD1284.html'],
    ['I\'m sorry, Dave. I\'m afraid I can\'t do that.',
     'HAL 9000', 'http://imdb.com/title/tt0062622/quotes'],
    ['Mathematics is less related to accounting than it is to philosophy.',
     'Leonard Adleman', 'http://www.nytimes.com/1994/12/13/science/scientist-at-work-leonard-adleman-hitting-the-high-spots-of-computer-theory.html?pagewanted=2'],
    ['When two trains approach each other at a crossing, both shall come to a full stop and neither shall start up again until the other has gone.',
     'Kansas Legislature', 'http://en.wikipedia.org/wiki/Deadlock'],
    ['Nature is nowhere accustomed more openly to display her secret mysteries than in cases where she shows traces of her workings apart from the beaten path.',
     'William Harvey', 'http://en.wikisource.org/wiki/Page:The_Works_of_William_Harvey_%28part_2_of_2%29.djvu/98'],
    ['Any sufficiently advanced technology is indistinguishable from magic.',
     'Arthur C. Clarke', 'http://groups.google.com/group/rec.arts.sf.misc/msg/e4185210a85826fc'],
    ['You cannot do inference without making assumptions.',
     'David J.C. MacKay', 'http://www.inference.phy.cam.ac.uk/mackay/itila/'],
    ['Probability theory is nothing but common sense reduced to calculation.',
     'Pierre-Simon Laplace', 'https://archive.org/details/philosophicaless00lapliala'],
    ['Nature laughs at the difficulties of integration.',
     'Pierre-Simon Laplace', 'https://books.google.com/books?id=IsHuAAAAMAAJ'],
    ['The actual science of Logic is conversant at present only with things either certain, impossible, or entirely doubtful, none of which (fortunately) we have to reason on. Therefore the true Logic for this world is the Calculus of Probabilities.',
     'James Clerk Maxwell', 'https://books.google.com/books?id=zfM8AAAAIAAJ&pg=PA197'],
    ['We are all under an ego-driven temptation to project our private thoughts out onto the real world, by supposing that the creations of one\'s own imagination are real properties of Nature, or that one\'s own ignorance signifies some kind of indecision on the part of Nature.',
     'E. T. Jaynes', 'http://bayes.wustl.edu/etj/articles/cmystery.pdf'],
    ['The fundamental, inescapable distinction between probability and frequency lies in this relativity principle: probabilities change when we change our state of knowledge, frequencies do not.',
     'E. T. Jaynes', 'https://books.google.com/books?id=tTN4HuUNXjgC&pg=PA292'],
    ['Just as there is a trade-off between program size and running time, there is a trade-off between the number of bits of axioms one assumes and the size of proofs.',
     'Gregory J. Chaitin', 'https://www.cs.auckland.ac.nz/~chaitin/georgia.html'],
];

var updateQuote = function() {
    var i = Math.floor(Math.random() * quotes.length);
    $('#quote').html(            quotes[i][0]);
    $('#quote-src').html(        quotes[i][1]);
    $('#quote-src').attr('href', quotes[i][2]);
};

$(document).ready(function() {
    updateQuote();
    window.setInterval(updateQuote, 15*1000);
});
