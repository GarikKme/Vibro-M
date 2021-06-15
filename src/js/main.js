$(document).ready(function ($) {
    //menu
    $('.gamburger').on('click', () => {
        $('#overlay').fadeIn(300);
        $('.menu').toggleClass('opened');
        $('.gamburger').toggleClass('close-menu');
        $('.close').toggleClass('open');
    });
    $('.close').on('click', () => {
        $('.menu').toggleClass('opened');
        $('.gamburger').toggleClass('close-menu');
        $('.close').toggleClass('open');
        $('#overlay').fadeOut(300);
    });

    $('.header__btn.desktop').on('click', () => {
        $('.menu').toggleClass('opened');
        $('.gamburger').toggleClass('close-menu');
        $('.close').toggleClass('open');
    })

    // Menu Scroll to section

    $('a[href^="#"').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500);

        return false;
    });



    //Modal form
    $('.button, .header__btn, .footer-btn, .product__btn-consult').on('click', () => {
        $('#overlay').fadeIn(300);
        $('.box-modal').fadeIn(700);
    });
    //modal close 
    $('#overlay').on('click', () => {
        $('#overlay').fadeOut(300);
        $('.box-modal').fadeOut(300);
        $('body').css("overflow", "scroll");
    });
    $('.close-button').on('click', () => {
        console.log('adsasdasd');
        $('#overlay').fadeOut(300);
        $('.box-modal').fadeOut(300);
        //$('body').css("overflow", "scroll").removeClass("padRight");
    });


    //sidebar

    $(".sidebar-head").on("click", function () {
        
        $(this).toggleClass('active');
        $(this).next().stop(true).slideToggle(200);
        $(this).find('.close-sidebar').toggleClass('open');
        $(this).find('.open-sidebar').toggleClass('open');
        
    });


    //offer slider

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: false,
        autoplay: {
            delay: 4000,
        },


    });

    /*---------------------Tabs-------------------------*/
	$('button.about__btn').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active').closest('.tabs').find('div.tabs__content').fadeOut(300).removeClass('active').eq($(this).index()).fadeIn(700).addClass('active');
    });

    //lightgallery sertificates

    lightGallery(document.getElementById('lightgallery'));

    //about gallery

    lightGallery(document.getElementById('about-gallery'));
    
    //about-testimonials gallery

    lightGallery(document.getElementById('about-testimonials'));

});