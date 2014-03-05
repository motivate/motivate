$(document).ready(function() {
    var availableTags = [
        "Ted", "Eric", "Kevin","Elaine"
    ];
    $("#search-box").autocomplete({
    	source: availableTags
    });

    $(".btn-blk").click(function() {
    	$(this).toggleClass("btn-selected btn-blk")
    });
});
