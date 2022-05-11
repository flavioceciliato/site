const btnMobile = document.getElementById('btn-mobile');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');


btn1.addEventListener('click', toggleMenu)
btn2.addEventListener('click', toggleMenu)
btn3.addEventListener('click', toggleMenu)
btn4.addEventListener('click', toggleMenu)
btn5.addEventListener('click', toggleMenu)

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn(200);
      $('.back-to-top::after').fadeIn(200);
  } else {
      $('.back-to-top').fadeOut(200);
      $('.back-to-top::after').fadeOut(200);
  }
});

$(".back-to-top").click(function() {
  $("html, body").animate({scrollTop: 0}, 100);
});

$("#lateral-logo1, #lateral-logo2, #lateral-logo3").mouseenter(function(){
  $(this).animate({bottom: 5}, 100)
})

$("#lateral-logo1, #lateral-logo2, #lateral-logo3").mouseleave(function(){
  $(this).animate({bottom: 0}, 100)
})

