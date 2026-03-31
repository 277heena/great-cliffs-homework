activity.js
$(document).ready(function () {
    $(".activities-table td").each(function () {
        var cellText = $(this).text().trim();

        if (
            cellText !== "Not Available" &&
            $(this).index() !== 0
        ) {
            $(this).addClass("selectable");
        } else {
            $(this).addClass("not-selectable");
        }
    });

    $(".activities-table td.selectable").click(function () {
        $(this).toggleClass("selected");
    });
});
