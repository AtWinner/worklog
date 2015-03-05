/// <reference path="jquery_min.js" />
$(document).ready(function () {
    $(".MenuRight ul li").bind("mouseover", MenurightChangeImage);
    $(".MenuRight ul li").bind("mouseout", MenurightOriginal);
});
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