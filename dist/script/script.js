const button=document.querySelector(".header-menu_burger"),burgerMenu=document.querySelector(".menu__burger"),spanBtnBurger=document.querySelector(".header-menu_btn"),buttonList=()=>{button.addEventListener("click",(()=>{button.classList.toggle("active"),burgerMenu.classList.toggle("active"),spanBtnBurger.classList.toggle("active")}))};button.addEventListener("click",(()=>{button.classList.toggle("active"),burgerMenu.classList.toggle("active"),spanBtnBurger.classList.toggle("active")}));