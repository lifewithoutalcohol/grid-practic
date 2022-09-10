
//ДОДАВАННЯ ІМЕНІ КЛАСУ ПРИ НАТИСКАННІ=========================================
$(document).ready(function() {
    $('.menu__icon').click(function(event){
        $('.menu__icon,.menu__leftpart,.menu__center,.menu__rightpart,.menu__content,.menu__center,.content').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//Применение класса "ibg" Чистый JS==========================
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();


//Применение класса "ibg" jQuery==============================
// function ibg(){

//     $.each($('.ibg'), function(index, val) {
//     if($(this).find('img').length>0){
//     $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
//     }
//     });
//     }
    
//     ibg();