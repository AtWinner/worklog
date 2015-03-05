/// <reference path="jquery_min.js" />
var FadeInTime = 500;//ͼƬ��������ʱ��ʱ��(ms)
var slide_controls_span_color = "#999";//����ԲȦ�е�Ĭ�ϵ�ɫ
var index = 0;
var Interval;
$(document).ready(function () {
    $(".slide-controls span").bind("click", slide_controls_span_click);
    $(".MenuRight ul li").bind("mouseover", MenurightChangeImage);
    $(".MenuRight ul li").bind("mouseout", MenurightOriginal);
    Interval = setInterval(changeImageAuto, 5000);
});
function slide_controls_span_click() {
    var thisSpan = $(this);
    if (index == $(this).text() - 1)
    {
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

function changeImageAuto()
{
    index = (index + 1) >= 4 ? (index + 1) % 4 : index + 1;
    var thisSpan = $($(".slide-controls span").get(index));
    $(".slide-controls span").css("background", slide_controls_span_color);
    thisSpan.css("background", "#0072c6");
    var ulIetms = $("#divImageBoxInner img");
    var Img = $(ulIetms.get(index));
    ulIetms.css("display", "none");
    Img.fadeIn(FadeInTime);
   
}
function MenurightChangeImage()
{
    var thisImg = $(this).children("img");
    var overSrc = thisImg.attr("src").toString();
    overSrc = overSrc.substr(0, overSrc.length - 4) + "_backup.png";
    thisImg.attr("src",overSrc);
}
function MenurightOriginal()
{
    var thisImg = $(this).children("img");
    var overSrc = thisImg.attr("src").toString();
    overSrc = overSrc.substr(0, overSrc.length - 11) + ".png";
    thisImg.attr("src", overSrc);
}