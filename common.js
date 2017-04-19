var timer = 3 * 1;

$(function () {
   timerF();
});

function turn() {
    $('#c-left').css({
        'transform': 'rotateX(' + getRandom() + 'deg)rotateY(' + getRandom() + 'deg)'
    });
    $('#c-right').css({
        'transform': 'rotateX(' + getRandom() + 'deg)rotateY(' + getRandom() + 'deg)'
    });
}

function getRandom() {
    return 90 * Math.floor(Math.random() * (6 - 2) + 2);
}

function timerF() {
    if(timer <= 0){
        turn();
        timer = 3 * 1;
    }
    $('#turn').text(timer + ' sec');
    setTimeout(timerF, 1000);
    timer--;
}