window.addEventListener('load', function(){
    let show = document.querySelector('.show_hide-menu'),
    menu = document.querySelector('.menu'),
    fa = document.querySelector('.fa-sign-in'),
    dx = this.document.querySelector('.d-x')
    console.log(show);
    console.log(menu);
    
    show.addEventListener('click', function(){
      menu.classList.add('lefting');
      setTimeout(function(){
          dx.classList.add('dblock');
      }, 700)

      
    })

    dx.addEventListener('click', function(){
      menu.classList.remove('lefting');
      dx.classList.remove('dblock');
    })
  })
