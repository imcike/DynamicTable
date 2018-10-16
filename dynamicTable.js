/*
$(function (){
  $(".parent-menu").click(function (){
    $(this).next("ul").toggleClass("active");
  });
})*/

// 一种二级菜单实现方式
function showSubMenu(target) {
  var parentLi = target.parentNode;
  var submenu = parentLi.children[1];
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

$(document).ready(function(){
  $(".side-menu a").each(function(){
    $(this).click(function(){
      $(".side-menu a").removeClass("change-color");
      $(this).addClass("change-color");
    });
  });
});



