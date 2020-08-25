$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.flowfromright').css({
        //width: (50 + scroll / 25) + "%"
        left: ((scroll / 100)) + "%"
    })
    $('.flowfromleft').css({
        //width: (50 + scroll / 5) + "%",
        right: ((scroll / 100) - 40) + "%"
    })

});