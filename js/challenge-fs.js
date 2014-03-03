$(document).ready(function() {
    var availableTags = [
        "Ted", "Eric", "Kevin","Elaine"
    ];
    $("#search-box").autocomplete({
    	source: availableTags
    });
});