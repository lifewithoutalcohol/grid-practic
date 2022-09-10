
$(window).resize(function(event) {
    top();
})
function top(){
        let h=$(window).outerHeight();
    $('.top').css('min-height',h);
}
    top();