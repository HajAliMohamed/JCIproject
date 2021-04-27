var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
var menu = document.getElementById('menu');
    icon = document.getElementById('hum');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});



menu.style.maxHeight = "0px"

icon.onclick = function()
{
    if(menu.style.maxHeight == "0px")
    {
        menu.style.maxHeight = "266px" ;
    }

    else{
        menu.style.maxHeight = "0px" ;
    }
    

}    ;
