$(document).ready(function() {
    var availableTags = [
        "Ted", "Eric", "Kevin","Elaine"
    ];
    $("#searchBox").autocomplete({
    	source: availableTags
    });
});