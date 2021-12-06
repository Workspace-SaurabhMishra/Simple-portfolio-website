const sidebaropen = document.querySelector("#uppercontent");


sidebaropen.addEventListener('click',function(){
   
        document.querySelector("#sidebar").style.width="250px";
        document.querySelector(".overlay").style.marginLeft="250px";  
    
})

const sidebarclose=document.querySelector("#close-btn")

sidebarclose.addEventListener('click' ,function(){
    document.querySelector("#sidebar").style.width="0px";
    document.querySelector(".overlay").style.marginLeft="0px";
})