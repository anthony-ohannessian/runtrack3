var deck = ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG","7.PNG","8.PNG","9.PNG",];
var newPlay = ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG","7.PNG","8.PNG","9.PNG",];

function shuffling(a) {
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffling(newPlay)

for (var i = 0; i < deck.length; i++) {
    $(`#${i}`).append(`<img src='${newPlay[i]}' />`);
}

$('img').click(function () {
    console.log(this);
    console.log($(this).parent().attr('id'));
})