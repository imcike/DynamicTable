$(function (){
  $(".parent-menu").click(function (){
    $(this).next("ul").toggleClass("active");
  });
});

/*// 一种二级菜单实现方式
function showSubMenu(target) {
  var parentLi = target.parentNode;
  var submenu = parentLi.children[1];
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}*/

$(document).ready(function(){
  $(".side-menu a").each(function(){
    $(this).click(function(){
      $(".side-menu a").removeClass("change-color");
      $(this).addClass("change-color");
    });
  });
});




$("#check-apple").click(function(){
  var state = document.getElementsByClassName("apple").style.display;
  state = state === 'block' ? 'none' : 'block';
});


/*
function showTableBanana() {
  document.getElementsByClassName("banana").style.display = document.getElementsByClassName("banana").style.display === 'block' ? 'none' : 'block';
}*/

/*
$(function (){
  $("#check-apple").click(function (){
    $(".apple").toggleClass("apple");
  });
});*/

$(document).ready(function(){
  var obt=document.getElementById("check-apple");
  var odiv=document.getElementsByClassName("apple");
  obt.onclick=function(){
    if(odiv.style.display=="none"){
      odiv.style.display="block";
      // obt.value="隐藏模块";
    }
    else{
      odiv.style.display="none";
      // obt.value="显示模块";
    }
  }
});
