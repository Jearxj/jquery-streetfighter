$(document).ready(function() {
    var is_mouse_in = false;
    $('.ryu').mouseenter(function() {
        is_mouse_in = true;
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        is_mouse_in = false;
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
        .animate(
            {'left': '300px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '-212px');
            }
        );
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        if (is_mouse_in === true) {
            $('.ryu-ready').show();
        } else {
            $('.ryu-still').show();
        }   
    })
    
    $('body').on('keydown', function (event) {
        if (event.which == 88) {
            $('.ryu-cool').show();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
        } 
    })
    .on('keyup', function (event) {
        if (event.which == 88) {
            $('.ryu-cool').hide();
            if (is_mouse_in === true) {
                $('.ryu-still').hide();
                $('.ryu-ready').show();
            }
            else {
                $('.ryu-still').show();
                $('.ryu-ready').hide();
            }
        }
    })
});
function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
