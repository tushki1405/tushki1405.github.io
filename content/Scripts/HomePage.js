//method to slide contact panel from left
function showContactPanel(text) {
    if ($(".contactPanel").css("left") == "0px" || text == "clickedondiv") {
        $(".contactPanel").animate({ left: '-200px' }, 250, function () {
            $(".contactPanel").css("visibility", "hidden");
        });
    }
    else {
        $(".contactPanel").css("visibility", "visible");
        $(".contactPanel").animate({ left: '0px' }, 250);
    }
}
