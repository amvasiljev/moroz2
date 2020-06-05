$(function () {
  $('.lazy').Lazy();
});





(function () {
	var youtube = $('.video__code');
	// youtube.addClass('test');
	for (var i = 0; i < youtube.length; i++) {
		var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";
		var image = new Image();
		// image.src = source;
		image.setAttribute('class', 'lazy');
		image.setAttribute('data-src', source);
		image.setAttribute('data-lazy', source);
		image.addEventListener("load", function () {
			youtube[i].appendChild(image);
		}(i));

		youtube[i].addEventListener("click", function () {
			var iframe = document.createElement("iframe");
			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allowfullscreen", "");
			iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=0");
			this.innerHTML = "";
			this.appendChild(iframe);
		});
	};
})();


$('.nav__item_group').hover(
  function(){
      $(this).find('.nav_level2').dequeue().stop(true, true).fadeIn(300)
  },
  function(){
    $(this).find('.nav_level2').dequeue().stop(true, true).fadeOut(300)
  }
)



$('.order__input_date').datepicker();

jQuery(function ($) {
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '<Пред',
    nextText: 'След>',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
});


$('.order__input_phone').mask('+7 (000) 000-00-00', {
	placeholder: "+7 (___) ___-__-__"
  });
$('.popup__input_phone').mask('+7 (000) 000-00-00', {
	placeholder: "+7 (___) ___-__-__"
  });


  $('.slider_best').slick({
    lazyLoad: 'ondemand',
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_right.png" alt="">',
    prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_left.png" alt="">',
    appendArrows: $('.slider__arrows_best'),
  });


    // $('.gallery__item').each(function(indx){
    //   if(indx == 0){
    //     $(this).addClass('gallery__item_1')
    //   }
    // })

  




var span = $('.gallery__item'),
    cntGroup = 6; // по сколько элементов в группе
var divsArr = span.get();
for(var i = 0; i < span.length; i += cntGroup){
    $(divsArr.slice(i,i+cntGroup)).wrapAll('<div class="gallery__box">');
}

$('.gallery__box').each(function(){
    $(this).find('.gallery__item').each(function(indx){

      if(indx == 0){
        $(this).addClass('gallery__item_pos_1')
    }
    else if(indx == 1){
        $(this).addClass('gallery__item_pos_2 gallery__item_height')
    }
    else if(indx == 2){
        $(this).addClass('gallery__item_pos_3')
    }
    else if(indx == 3){
        $(this).addClass('gallery__item_pos_4')
    }
    else if(indx == 4){
        $(this).addClass('gallery__item_pos_5 gallery__item_height')
    }
    else if(indx == 5){
        $(this).addClass('gallery__item_pos_6 gallery__item_width')
    }
    })
})



//mobile menu

var mobileNav = $('<ul>').addClass('nav_mobile');
var mobileItems = $('.nav').html();
var mobileWrapper = $('<div>').addClass('nav_outer').prependTo('body');
var burger = $('.burger');
var closeButton = $('<div>').addClass('nav_close');
var mobileFake = $('<div>').addClass('nav__fake').prependTo('body');


mobileWrapper.append(mobileNav);
mobileWrapper.append(closeButton);
mobileNav.append(mobileItems);
mobileNav.find('.nav__item').addClass('nav__item_mobile');
mobileNav.find('.nav_level2').addClass('nav_level2_mobile')



burger.on('click', function () {
  mobileWrapper.animate({
    right: 0
  }, 300).addClass('nav_active');
  $('body').addClass('stop_scrolling');
  $(this).attr('data-key', '');
  mobileFake.show();
})

closeButton.on('click', function () {
  mobileWrapper.animate({
    right: '-287px'
  }, 500).removeClass('nav_active');
  $('body').removeClass('stop_scrolling');
  $(this).attr('data-key', 'key');
  mobileFake.hide();
})


mobileFake.on('click', function () {
  closeButton.trigger('click')
})



$('.nav_mobile .nav__link_group').on('click', function(e){
  e.preventDefault()
  var $this = $(this).next('.nav_level2');
  $('.nav_level2').not($this).slideUp()
  $this.slideToggle()
})


$('.order__input').on('focus', function(){
  $(this).addClass('order__input_focus');
})
$('.order__input').on('blur', function(){
  $(this).removeClass('order__input_focus');
})
//mobile menu


if (/Android|webOS|iPad|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  

 

  var boxFixed = $('<div>').addClass('box_fixed').appendTo($('body'))
  
 var phoneScroll = $('.phone_header').clone().addClass('phone_scroll')
  $(document).scroll(function () {
    var scrollTop = $(this).scrollTop();

   

    if (scrollTop > 100) {

      
      boxFixed.addClass('box_fixed_scroll')

      phoneScroll.appendTo(boxFixed)

      $('.burger').addClass('burger_scroll').appendTo(boxFixed)
      
    } else {
      phoneScroll.remove()
      boxFixed.removeClass('box_fixed_scroll')
      
      $('.burger').removeClass('burger_scroll').appendTo($('.header__inner'))
    }
  })

}

if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
  $('.event__content').not(':first-child').slideUp()
  $('.event__content').eq(0).slideDown()
  $('.event').on('click','.event__image', function(){
      var $this = $(this).next('.event__content')
      $('.event__content').not($this).slideUp(300)
      $this.slideDown()
      console.log('object');
  })
}