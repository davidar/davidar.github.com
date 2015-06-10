var quotes = [
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
    ['Quotation. The act of repeating erroneously the words of another. The words erroneously repeated.',
     'Ambrose Bierce', 'http://publicliterature.org/books/devils_dictionary/xcn.php'],
    ['If I have seen further it is by standing on ye shoulders of Giants.',
     'Isaac Newton', 'http://en.wikiquote.org/wiki/Isaac_Newton'],
    ['The teaching of BASIC should be rated as a criminal offence: it mutilates the mind beyond recovery.',
     'Edsger W. Dijkstra', 'http://cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD898.html'],
    ['The question of whether Machines Can Think ... is about as relevant as the question of whether Submarines Can Swim.',
     'Edsger W. Dijkstra', 'http://cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD898.html'],
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
];

$(document).ready(function() {
    var i = Math.floor(Math.random() * quotes.length);
    var quote = quotes[i][0];
    var author = quotes[i][1];
    var url = quotes[i][2];
    $('#quote').html('<p>' + quote + '</p><p style="text-align:right"> &mdash; <a href="' + url + '">' + author + '</a></p>');
});
