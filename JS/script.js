var mobile_offset = 255;
var medium_offset = 100;
var computer_offset = 220;
window.onscroll = function() {shrinkHeader()};
//Funcion basada en una consulta a ChatGPT
function shrinkHeader() {
  const header = document.getElementById("header-cont");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  const nav_button = document.getElementById("nav-button");
  const nav_items = document.getElementById("nav-items");
  let is_down = false;
  nav_button.addEventListener('click',() =>{
    if(is_down){
      nav_items.style.display = 'flex';
    }else{
      nav_items.style.display = 'none';
    }
    is_down=!is_down;
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('submit');
  const message_display = document.getElementById('message');
  const input = document.getElementById('register');
  btn.addEventListener('click', () => {
        input.value = '';
        message_display.style.display = 'block';
        //idea de timeout por ChatGPT
        setTimeout(() => {
            message_display.style.display = 'none';
        }, 3000); 
  });
});


//Funcion proporcionada por ChatGPT
function scrollToSection(section_Id, offset) {
    const section = document.getElementById(section_Id);
    const sectionTop = section.getBoundingClientRect().top + window.scrollY -offset;
    window.scrollTo({
        top: sectionTop - offset, 
        behavior: 'smooth'
    });
}

document.getElementById('benefits_nav').addEventListener('click', function(){
    if (window.innerWidth <= 768) {
        scrollToSection('benefits',mobile_offset);
    } else if(window.innerWidth <=1024) {
        scrollToSection('benefits',medium_offset);
    }else{
        scrollToSection('benefits',computer_offset);
    }
})

document.getElementById('features_nav').addEventListener('click', function(){
    if (window.innerWidth <= 768) {
        scrollToSection('features',mobile_offset);
    } else if(window.innerWidth <=1024) {
        scrollToSection('features',medium_offset);
    }else{
        scrollToSection('features',computer_offset);
    }
})

document.getElementById('reviews_nav').addEventListener('click', function(){
    if (window.innerWidth <= 768) {
        scrollToSection('reviews',mobile_offset);
    } else if(window.innerWidth <=1024) {
        scrollToSection('reviews',medium_offset);
    }else{
        scrollToSection('reviews',computer_offset);
    }
})
