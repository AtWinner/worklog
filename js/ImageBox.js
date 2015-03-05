/// <reference path="jquery_min.js" />
var FadeInTime = 500;//图片缓慢进入时的时间(ms)
var slide_controls_span_color = "#999";//保存圆圈中的默认底色
var index = 0;
var Interval;

$(document).ready(function () {
    $(".slide-controls span").bind("click", slide_controls_span_click);
    Interval = setInterval(changeImageAuto, 5000);
});


function slide_controls_span_click() {
    var thisSpan = $(this);
    if (index == $(this).text() - 1) {
        return;
    }
    index = $(this).text();
    index--;
    $(".slide-controls span").css("background", slide_controls_span_color);
    thisSpan.css("background", "#0072c6");
    var ulIetms = $("#divImageBoxInner img");
    var Img = $(ulIetms.get(index));
    ulIetms.css("display", "none");
    Img.fadeIn(FadeInTime);
    clearInterval(Interval);
    Interval = setInterval(changeImageAuto, 5000);
}

function changeImageAuto() {
    index = (index + 1) >= 4 ? (index + 1) % 4 : index + 1;
    var thisSpan = $($(".slide-controls span").get(index));
    $(".slide-controls span").css("background", slide_controls_span_color);
    thisSpan.css("background", "#0072c6");
    var ulIetms = $("#divImageBoxInner img");
    var Img = $(ulIetms.get(index));
    ulIetms.css("display", "none");
    Img.fadeIn(FadeInTime);

}