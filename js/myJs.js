/*animation du début*/
/*typewriter*/
const txtwriter = document.getElementById('type');
new Typewriter(txtwriter, {
    loop : true, 
    deleteSpeed: 90
})
.typeString('Tongasoa.')
.pauseFor(400)
.deleteChars(9)
.typeString('Bienvenue.')
.pauseFor(400)
.deleteChars(10)
.typeString('Welcome.')
.pauseFor(400)
.deleteChars(8)
.start();
/*date*/
/*
function daty(){

  var today = new Date();

var forme = {weekday:"long",year:"numeric",month:"long",day:"2-digit"};

var date= today.toLocaleDateString("fr-FR", forme);

var heure = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);

var dateEtHeure=date+" "+heure;

var dateEtHeure=dateEtHeure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());

const daty=document.getElementById('time').innerHTML=dateEtHeure;

}

setInterval('daty()',1000); */
/*Luciole*/
let c = init("canvas"),
  w = (canvas.width = window.innerWidth),
  h = (canvas.height = window.innerHeight);
//initiation

class firefly{
  constructor(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.s = Math.random()*2;
    this.ang = Math.random()*2*Math.PI;
    this.v = this.s*this.s/4;
  }
  move(){
    this.x += this.v*Math.cos(this.ang);
    this.y += this.v*Math.sin(this.ang);
    this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
  }
  show(){
    c.beginPath();
    c.arc(this.x,this.y,this.s,0,2*Math.PI);
    c.fillStyle="#fddba3";
    c.fill();
  }
}

let f = [];

function draw() {
  if(f.length < 100){
    for(let j = 0; j < 10; j++){
     f.push(new firefly());
  }
     }
  //animation
  for(let i = 0; i < f.length; i++){
    f[i].move();
    f[i].show();
    if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
       f.splice(i,1);
       }
  }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener(
  "mousemove",
  function(e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);
function init(elemid) {
  let canvas = document.getElementById(elemid),
    c = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
  c.fillStyle = "red";
  c.fillRect(0, 0, w, h);
  return c;
}

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback);
    }
  );
});

function loop() {
  window.requestAnimFrame(loop);
  c.clearRect(0, 0, w, h);
  draw();
}

window.addEventListener("resize", function() {
  (w = canvas.width = window.innerWidth),
  (h = canvas.height = window.innerHeight);
  loop();
});

loop();
setInterval(loop, 1000 / 50);
/*Animation menu et Réseux sosiaux*/
  anime({
    targets: '.elementNavBar',
    translateY: 25,
    delay: anime.stagger(400),
  });

  anime({
    targets: '.elementMedia',
    translateY: 460,
    easing: 'linear',
    delay: anime.stagger(250),
  });

/*Parallax Scrolling*/
let fondnoire = document.getElementById('fondnoire')
let stars = document.getElementById('stars');
let montagne = document.getElementById('montagne');
let bishe = document.getElementById('bishe');
var volana = document.getElementById("moon");
window.addEventListener('scroll', function () {
  let value = window.scrollY;
  fondnoire.style.top = value * 0.2 +'px';
  volana.style.top = value * 0.6 + 'px';
  stars.style.right = value * 0.2 + 'px';
  bishe.style.top = value * 0.2 + 'px';
  montagne.style.top = value * 0.24 + 'px';
})


$(window).scroll(function(){
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $("#photo1").each(function(){
    var distanceFromTop = $(this).offset().top;
    if(scrolledFromTop >= distanceFromTop+200){
      var delaiAnim = $(this).data("delai");
      $(this).delay(delaiAnim).animate({
        opacity:1
      });
    }
  });
});

/*MENU HAMBERGER*/
const hamburger = document.querySelector(".hamburger");
const MenuHamberger = document.querySelector(".MenuHamberger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  MenuHamberger.classList.toggle("active");
})
anime({
  targets: '.hamburger',
  translateX: 170,
  delay: anime.stagger(2),
});

/*Competences*/

$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();
  $('.appear').each(function(){
    if(scroll >= ($(this).offset().top - $(this).innerHeight()*5.5)) {
      $(this).css({
        'opacity': '1',
        'transform': 'translate(0)'
      });
    }
  })
});

$(window).scroll(function(){
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".animated-progress span").each(function () {
    var distanceFromTop = $(this).offset().top;
    if(scrolledFromTop >= distanceFromTop){
      $(this).animate(
        {
          width: $(this).attr("data-progress") + "%",
        },
        1000
      );
      $(this).text($(this).attr("data-progress") + "%");
    }
  });
});
/*caroussel*/
( function($) {
  
  $(document).ready(function() {
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


      //CONTENT ANIMATIONS

      var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
      var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

      TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
      TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
      TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
      TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

    });
          
  });
})(jQuery);

$('.overlay').addClass('overlay-blue');

/*scroll*/
$(window).scroll( function(){
  var topWindow = $(window).scrollTop();
  var topWindow = topWindow * 1.5;
  var windowHeight = $(window).height();
  var position = topWindow / windowHeight;
  position = 1 - position;
  $('.scroll').css('opacity', position);
});


$(window).scroll( function(){
  var topWindow = $(window).scrollTop();
  var topWindow = topWindow * 1.5;
  var windowHeight = $(window).height();
  var position = topWindow / windowHeight;
  position = -0.8 + position;
  $('.scroll2').css('opacity', position);
});
/*smooth scrolling*/
$('a[href*="#"]').on('click', function(e){
  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 500
  },500);
  e.preventDefault();
});
