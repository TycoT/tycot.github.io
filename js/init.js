(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
        $('.materialboxed').materialbox();
        //scroll code
        $('#nav1').addClass('nav-highlight'); //initialize home as it is always on top
        $('#nav1').parent().addClass('nav-outline');
        $(window).scroll(function () {
            var height = $(window).scrollTop();

            var introduction = $('#introduction').offset().top - 64;
            var aboutMe = $('#about-me').offset().top - 64;
            var projects = $('#projects').offset().top - 64;
            var contactMe = $('#contact-me').offset().top - 64;
            if (height < aboutMe) {
                $('#nav1').addClass('nav-highlight');
                $('#nav1').parent().addClass('nav-outline');
                //mobile
                $('#mnav1').addClass('nav-highlight');
                $('#mnav1').parent().addClass('nav-outline');
            } else {
                $('#nav1').removeClass('nav-highlight');
                $('#nav1').parent().removeClass('nav-outline');
                //mobile
                $('#mnav1').removeClass('nav-highlight');
                $('#mnav1').parent().removeClass('nav-outline');
            }

            if (height > aboutMe && height < projects) {
                $('#nav2').addClass('nav-highlight');
                $('#nav2').parent().addClass('nav-outline');
                //mobile
                $('#mnav2').addClass('nav-highlight');
                $('#mnav2').parent().addClass('nav-outline');
            } else {
                $('#nav2').removeClass('nav-highlight');
                $('#nav2').parent().removeClass('nav-outline');
                //mobile
                $('#mnav2').removeClass('nav-highlight');
                $('#mnav2').parent().removeClass('nav-outline');
            }

            if (height > projects && $('#nav4').hasClass('nav-highlight') === false) {
                $('#nav3').addClass('nav-highlight');
                $('#nav3').parent().addClass('nav-outline');
                //mobile
                $('#mnav3').addClass('nav-highlight');
                $('#mnav3').parent().addClass('nav-outline');
            } else {
                $('#nav3').removeClass('nav-highlight');
                $('#nav3').parent().removeClass('nav-outline');
                //mobile
                $('#mnav3').removeClass('nav-highlight');
                $('#mnav3').parent().removeClass('nav-outline');
            }

            if (document.body.scrollHeight - $(this).scrollTop() <= $(this).height()) {
                $('#nav4').addClass('nav-highlight');
                $('#nav4').parent().addClass('nav-outline');
                //remove nav3 as a work around because they are both active
                $('#nav3').removeClass('nav-highlight');
                $('#nav3').parent().removeClass('nav-outline');

                //mobile
                $('#mnav4').addClass('nav-highlight');
                $('#mnav4').parent().addClass('nav-outline');
                //remove nav3 class, work around
                $('#mnav3').removeClass('nav-highlight');
                $('#mnav3').parent().removeClass('nav-outline');
            } else {
                $('#nav4').removeClass('nav-highlight');
                $('#nav4').parent().removeClass('nav-outline');
                //mobile
                $('#mnav4').removeClass('nav-highlight');
                $('#mnav4').parent().removeClass('nav-outline');
                console.log('not bottom');
            }
        });


    }); // end of document ready
})(jQuery); // end of jQuery name space