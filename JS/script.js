$(document).ready(function(){
   
    $('#banner').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left icon"></i>','<i class="fa-solid fa-chevron-right icon"></i>'],
        loop:true,
        // autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#bannerclient').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left icon"></i>','<i class="fa-solid fa-chevron-right icon"></i>'],
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('#servicesdetails').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left icon"></i>','<i class="fa-solid fa-chevron-right icon"></i>'],
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#projectd').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#projectd1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Preloader Area
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
    
});