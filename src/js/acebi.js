var $z = jQuery.noConflict();
$z(document).ready(function () {
    $z("#aumentar-fonte").click(function () {
        var n = (n = $z("#content p").css("font-size")).replace("px", "");
        return n = parseInt(n) + 2, $z("#content p").animate({
            "font-size": n + "px"
        }), !1
    }), $z("#diminuir-fonte").click(function () {
        var n = (n = $z("#content p").css("font-size")).replace("px", "");
        return n = parseInt(n) - 2, $z("#content p").animate({
            "font-size": n + "px"
        }), !1
    })
});