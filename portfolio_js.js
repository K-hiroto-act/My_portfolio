// When the DOM is loaded and ready, let's do some shit!
$(document).ready(function() {
    function skillSet() {
      // Iterate over each element w/ a class of
      // bar-info, storing the value of data-total
      // in a variable.  Using jQuery's CSS method,
      // dynamically update the width of each bar.
      $('.bar-info').each(function() {
        total = $(this).data("total");
        $(this).css("width", total + "%");
      });
      
      // Iterate over each element w/ the class percent.  Using
      // jQuery's $(this) will allow us to interact w/ each specific
      // object in the loop.  Then use jQuery's super awesome animate method
      // to implement a counter on each .percent element, which will "count"
      // up incrementally until it reaches the number inside the percent span,
      // aka it's "ceiling".
      $('.percent').each(function() {
        var $this = $(this);
        $({
          Counter: 10
        }).animate({
          Counter: $this.text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.ceil(this.Counter) + "%");
          }
        });
      });
    };
    // Invoke our skillSet function inside a setTimeout, 
    // to create a short delay before the animation begins.
    setTimeout(skillSet, 1000);
});

$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('nav').slideUp();
  } else {
    $(this).addClass('active');
    $('nav').slideDown();
  }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('header').css('opacity', 0.8);
    } else {
      $('header').css('opacity', 1);
    }
  });
});

$(function(){
  var topBtn = $('.page-up');
  topBtn.hide();
  $(window).scroll(function () {
    $(this).scrollTop() > 100 ? topBtn.fadeIn() : topBtn.fadeOut();
  });
  topBtn.click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});



$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

gsap.to('.page-top-wrap', {
  duration: 1, // 右側に2秒かけて移動するモーションを指定する
  y:'0px',
  opacity:1,
  stagger: {
      each:0.5,
  }
});

gsap.to('.row', {
  duration: 2, // 右側に2秒かけて移動するモーションを指定する
  y:'0px',
  opacity:1,
  stagger: {
      each:0.5,
  }
});

gsap.to('.skill ul li', {
  duration: 2, // 右側に2秒かけて移動するモーションを指定する
  y:'0px',
  opacity:1,
  stagger: {
      each:0.5,
  }
});

gsap.to('.portfolio-main-wrap', {
  duration: 1, // 右側に2秒かけて移動するモーションを指定する
  y:'0px',
  opacity:1,
  stagger: {
      each:0.5,
  }
});

gsap.to('.portfolio-sub-wrap', {
  duration: 3, // 右側に2秒かけて移動するモーションを指定する
  y:'0px',
  opacity:1,
  stagger: {
      each:0.5,
  }
});

$(function() {
  var h = $(window).height();
  
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
  
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});
  
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});
  
function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
