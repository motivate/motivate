$(document).ready(function() {
    var availableTags = [
        "Ted", "Eric", "Kevin","Elaine", "Brittany"
    ];
    $("#search-box").autocomplete({
    	source: availableTags
    });

    $(".btn-blk").click(function() {
    	$(this).toggleClass("btn-selected btn-blk")
    });
});
