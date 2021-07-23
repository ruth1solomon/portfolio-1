window.addEventListener("scroll",function(){
    const header=this.document.querySelector("header");
    header.classList.toggle('sticky',window.scrolly > 0);
});
const menuBtn=document.querySelector(".menu-btn");
const navigation=document.querySelector("navigation");
menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});