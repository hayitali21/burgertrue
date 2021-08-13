window.addEventListener('load', function(){
    let show = document.querySelector('.show_hide-menu'),
    menu = document.querySelector('.menu'),
    fa = document.querySelector('.fa-sign-in')
    console.log(show);
    console.log(menu);
    
    show.addEventListener('click', function(){
      menu.classList.toggle('lefting');
      fa.classList.toggle('rotate');
    })
  })