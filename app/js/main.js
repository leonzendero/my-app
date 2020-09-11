$(document).ready(function () {
    $('.popup-with-zoom-anim').click(function (e) {

        $('#small-dialog-img').attr('src', $(e.currentTarget).find('img').eq(0).attr('src'));

        $.magnificPopup.open({
            items: {
                src: '#small-dialog'
            },
            type: 'inline',
            preloader: false,
            fixedContentPos: true,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    });
});