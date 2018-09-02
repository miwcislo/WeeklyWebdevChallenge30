$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("#main-menu").removeClass("t-site-header__menu-large").addClass("t-site-header__menu-small");
	} else {
		$("#main-menu").removeClass("t-site-header__menu-small").addClass("t-site-header__menu-large");
	}
});

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});


var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

ScrollReveal().reveal('.box', { delay: 500, duration: 1000 });
ScrollReveal().reveal('.content-1', { delay: 1000, duration: 1000  });
ScrollReveal().reveal('.content-2', { delay: 1100, duration: 1000  });
ScrollReveal().reveal('.content-3', { delay: 1200, duration: 1000  });
ScrollReveal().reveal('.content-4', { delay: 1300, duration: 1000  });
ScrollReveal().reveal('.content-5', { delay: 1400, duration: 1000  });
ScrollReveal().reveal('.content-6', { delay: 1500, duration: 1000  });