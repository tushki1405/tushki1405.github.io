var lastItem = "#item1tab";
var dataWidth;

$(document).ready(function () {
    $(".item").click(function () {
        var currentItem = "#" + $(this).attr('id');
        //If a new tab is clicked and last tab is not animating
        if (currentItem != lastItem && !$(GetDataFromTab(lastItem)).is(':animated')) {
            $(GetDataFromTab(lastItem)).animate({ width: 0 }, "slow");
            $(GetDataFromTab(currentItem)).animate({ width: dataWidth }, "slow", function () {
                lastItem = currentItem;
            });
        }
    });

    //Set width for first tab
    dataWidth = $("#rotatorBox").width() - 25 - (($("#item1tab").width()) * 6);
    $(GetDataFromTab(lastItem)).width(dataWidth);
    
    //    //Set text for all Divs
    //    for (var i = 1; i <= 6; i++) {
    //        var cur = "#item" + i + "tab";
    //        //$(cur).html($(cur).html().split("").join("<br />"));
    //        //$(cur).addClass(rotate);
    //    }

});

function GetDataFromTab(tab)
{
  return tab.substring(0,tab.indexOf("tab")) + "data";
}

function scrollToAnchor(aid) {
    try{
        $('html,body').animate({ scrollTop: $(aid).offset().top }, 1000);
    }
    catch(err)
    {}
}