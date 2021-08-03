$(document).ready(function () {

    //home - audio
    $('.main-audio-player').prop('volume', 0.5);

    var sound = false;
    $('.fa-volume-mute').hide();

    $('.volume-toggle').click(function () {
        if (sound) {
            $(this).siblings('.main-audio-player')[0].pause();
            $(this).siblings('.fa-volume-up').toggle()
            $(this).toggle()
            sound = false;
        } else {
            $(this).siblings('.main-audio-player')[0].play();
            $(this).toggle()
            $(this).siblings('.fa-volume-mute').toggle()
            sound = true;
        }
    });

    $('.main-audio-player').on('ended', function () {
        $(this).siblings('.fa-volume-up').show()
        $(this).siblings('.fa-volume-mute').hide()
        sound = false;
    });

    //home - transitions
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function view_checker() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            // if element is within viewport (at least 150px within viewport)
            if ((element_bottom_position >= window_top_position + 150) &&
                (element_top_position <= window_bottom_position - 150))
                $element.addClass('in-view');
        });
    }

    $window.on('scroll resize', view_checker);
    $window.trigger('scroll');

    //home - scroll-to-top button
    $('.scroll-to-top').click(function () {
        $('html,body').stop().animate({ scrollTop: 0 }, {})
    });

    function scroll_checker() {
        var button_element = $('.scroll-to-top');
        var window_top_position = $window.scrollTop();

        if (window_top_position > 1200) {
            button_element.addClass('visible');
        } else {
            button_element.removeClass('visible')
        }
    }

    $window.on('scroll', scroll_checker);


});