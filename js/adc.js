$(document).ready(function() {
	var buttonCount = 3;
	var ads= [["off", "off"], ["off", "off"], ["off", "off"]];
    $(".btn-blk").click(function() {
    	var index = eval($(this).val()[0]);
    	var index2 = eval($(this).val()[1]);
    	if (ads[index][index2] == "on") {
    		ads[index][index2] = "off";
    	}
    	else if (ads[index][index2] == "off") {
    		ads[index][index2] = "on";
    		var index3 = (index2 + 1) % 2;

    		if (ads[index][index3] == "on") {
    			ads[index][index3] = "off";
    			var buttons =$("button");
    			for (var i=0; i < buttons.length; i++) {
    				if (buttons[i].value == index.toString() + index3.toString()) {
    					$(buttons[i]).toggleClass("btn-selected btn-blk")
    				}
    			}
    		}
    	}

    	$(this).toggleClass("btn-selected btn-blk")

    });

    $("#revert").click(function() {
    	ads= [["off", "off"], ["off", "off"], ["off", "off"]];
    	var buttons =$("button");
    	for (var i=0; i < buttons.length; i++) {
    		if ($(buttons[i]).hasClass("btn-ad")) {
    			$(buttons[i]).addClass("btn-blk");
    			$(buttons[i]).removeClass("btn-selected");
    		}
		}
    });

    $("#submit").click(function() {
    	var buttons =$("button");
    	for (var i=0; i < buttons.length; i++) {
    		if ($(buttons[i]).hasClass("btn-selected")) {
    			$(buttons[i]).parent().parent().remove();
    			buttonCount = buttonCount - 1;
    		}
		}

		if (buttonCount == 0) {
			$(".navbar-static-bottom").remove();
			$("#row2").append("<div class='col-md-4 text-center col-md-offset-4'><h3> \
				You have no outstanding challenges! </h3> <br/> </div>");
			$("body").append('<div class ="navbar navbar-default navbar-static-bottom"> \
		            <div class="container-fluid text-center"> \
		                <a href="homepage.html"> \
		                <button type="button" class="btn btn-blue btn-lg" id="submit"> Home </button> </a> \
		            </div> \
		        </div>');
			buttonCount = -1;
		}
    });
});