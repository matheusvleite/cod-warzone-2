const hamburguerMenu = document.getElementById('hamburguerMenu')

hamburguerMenu.addEventListener('click' , function(){
   const menuNav = document.querySelector('ul');
   menuNav.classList.toggle('menuHa');
   const container = document.getElementById('container')
   container.classList.toggle('padding')
 
})

window.addEventListener('load', function(){
   setTimeout(() =>{
      document.getElementById('loader').style.display="none";
   },5000)
})

