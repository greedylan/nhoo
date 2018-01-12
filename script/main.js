// 01_ SCRIPT FOR HOMEPAGE
  // Homepage Feature Offers - Slick Carousel
  $(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  // animation for changing form
  // we dont really need this script as long as we can toogle two NHOO invitation forms
  $('#link-get-invite').click(function(){
    $('.enter-invite').css({ 'display': 'none' });
    $('.get-invite').css({ 'display' : 'flex'});
    $('.invite').addClass('expand')
  })
  $('#link-enter-invite').click(function(){

    $('.enter-invite').css({ 'display' : 'flex'});
    $('.invite').removeClass('expand')

    setTimeout(function(){
      $('.get-invite').css({ 'display': 'none' });
    }, 500);
  })


// 02_ SCRITP FOR BROWSE PAGE
  // sticky side category
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var dis_top_sideMenu = $('.main-side-cat').offset().top;
    var dis_left_sideMenu = $('.main-side-cat').offset().left;

    if(scroll > dis_top_sideMenu){
      console.log('fire the sticky side category')
      $('.seudo-block').css({
        'display' : 'block'
      });
      $('.main-side-cat').css({
        'max-width' : '285px',
        'position' : 'fixed',
        'top' : 'dis_top_sideMenu',
        'left' : 'dis_left_sideMenu',
        'z-index' : '1000'
      })
    }
    // console.log($(window).scrollTop());
  });

  // angular incapable
  //highlight side cateory menu
  // $('.offer-cat-wrapper, .cat-wrapper').hover(function(){
  //   var cat_index = $(this).index()
  //   var dis = (60 * cat_index) - 5
  //
  //   if(cat_index === 0){
  //     $('.highlight').css({
  //       'transform' : 'translate( -10px, -5px)'
  //     });
  //     return;
  //   }
  //   $('.highlight').css({
  //     'transform' : 'translate( -10px, '+ dis +'px)'
  //   })
  // });

  // smooth scroll, navigating through offer boxes
  $(document).ready(function(){
    $('.side-cat-wrapper-inner a[href*="#"]').bind('click', function(e){
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').stop().animate({
						scrollTop: $(target).offset().top - 160
				}, 400, function() {
			});
    });
  });




// 03_ SCRIPT FOR DETAIL PAGE
  // to show SMS modal window
  $('#btn-sms').click(function(){
    $('.modal-custom').addClass('show-modal');
  });

  $('.modal-custom .btn-exit').click(function(){
    $('.modal-custom').removeClass('show-modal');
  });

  $('#btn-save').click(function(){
    $('section.notice').addClass('show');
  })
  $('.btn-exit').click(function(){
    $('section.notice').removeClass('show')
  })










$('form.form-animated input').focus(function(){
  $(this).parent('div.form-input').addClass('focused')
});
$('form.form-animated input').focusout(function(){
  if($(this).val()){
    return
  }else{
    $(this).parent('div.form-input').removeClass('focused')
  }
});







$('.hamburger').click(function(){
  $('section.menu-mobile').addClass('menu-mobile-show');
  $('section.overlay').addClass('overlay-show');
})

$('.back-arrow').click(function(){
  $('section.menu-mobile').removeClass('menu-mobile-show');
    $('section.overlay').removeClass('overlay-show');
})







// sliding notice box on click (add or remove '.show')
$('button.show-notice').click(function(){
  $('section.notice').toggleClass('show');
})
$('.btn-exit').click(function(){
  $('section.notice').removeClass('show')
})



// hamburger animation
var clicked = false;
$('button#burger').click(function(){

  // activate mobile menu
  if(clicked == false){
    $('section.menu-mobile').addClass('menu-mobile-show');
    $('.bun').addClass('squeeze__bun');
    setTimeout(function(){
      $('#patty').addClass('hide__patty')
    }, 100)
    setTimeout(function(){
      $('#bun__top').addClass('rotateClockwise');
      $('#bun__bottom').addClass('rotateCounterClockwise');
    }, 150)
    clicked = true;
  }
  // activate mobile menu
  else{
    $('section.menu-mobile').removeClass('menu-mobile-show');
    $('#bun__top').removeClass('rotateClockwise');
    $('#bun__bottom').removeClass('rotateCounterClockwise');
    setTimeout(function(){
      $('#patty').removeClass('hide__patty')
    }, 100)
    setTimeout(function(){
      $('.bun').removeClass('squeeze__bun');
    }, 150)
    clicked = false;
  }


});
