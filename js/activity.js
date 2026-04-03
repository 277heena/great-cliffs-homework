$(document).ready(function () {
    $(".activities-table td").each(function () {
        var cellText = $(this).text().trim();

        if (cellText !== "Not Available" && $(this).index() !== 0) {
            $(this).addClass("selectable");
        } else {
            $(this).addClass("not-selectable");
        }
    });

    $(".activities-table td.selectable").click(function () {
        var content = $(this).text().trim();
        var columnIndex = $(this).index();
        var cliffName = $(".activities-table tr").eq(1).find("th").eq(columnIndex).text().trim();
        var itemKey = content.replace(/\s+/g, "-").toLowerCase() + "-" + cliffName.replace(/\s+/g, "-").toLowerCase();

        $(this).toggleClass("selected");

        if ($(this).hasClass("selected")) {
            $("#displaySelected").css("visibility", "visible");
            $("#displaySelected").css("margin-top", "2em");

            $("#result").append(
                '<p data-key="' + itemKey + '">' +
                content + ' <span class="cliff-name">at ' + cliffName + '</span>' +
                '</p>'
            );
        } else {
            $('#result p[data-key="' + itemKey + '"]').remove();

            if ($("#result p").length === 0) {
                $("#displaySelected").css("visibility", "hidden");
                $("#displaySelected").css("margin-top", "0");
            }
        }
    });
});
