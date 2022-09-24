$(function () {
	$(document).scroll(function () {
  var $nav = $(".sb-navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

window.onscroll = () => {
  let height = document.getElementById("banner").scrollHeight;
  if(window.scrollY - 70 > height){
    document.getElementById("banner").style.display = "none";
    document.getElementById("brand-name").style.color = "#332265"
  }else{
    document.getElementById("banner").style.display = "flex";
    document.getElementById("brand-name").style.color = "#fff";
  }
}

let isNavOpen = false;

window.onload = () => isNavOpen = false; 
window.onresize = () => isNavOpen = false;

const hamburgerBtnHandler = document.getElementById("hamburger-btn");

hamburgerBtnHandler.onclick = () => {
  isNavOpen = !isNavOpen;
  if(isNavOpen){
    document.getElementById("navbarNavAltMarkup").classList.add("hideNavMobile");
  }else {
    document.getElementById("navbarNavAltMarkup").classList.remove("hideNavMobile");
  }
}