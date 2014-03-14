$(document).ready(function() {
	$('#myModal').modal()
    $(".name > input").focus(function () {
    	if (!$("#input-name").val()) {
   	    	$(".name > .sidetip > .done").removeClass("active");
    		$(".name > .sidetip > .tip").addClass("active");
    	}
    });

    $(".email > input").focus(function () {
    	if (!$("#input-email").val()) {
	    	$(".email > .sidetip > .done").removeClass("active");
	    	$(".email > .sidetip > .error").removeClass("active");
    		$(".email > .sidetip > .tip").addClass("active");
    	}
    });

    $(".password > input").focus(function () {
    	if (!$("#input-pw").val()) {
	    	$(".password > .sidetip > .done").removeClass("active");
	    	$(".password > .sidetip > .error").removeClass("active");
    		$(".password > .sidetip > .tip").addClass("active");
    	}
    });

    $(".name > input").focusout(function() {
	    if ($("#input-name").val()) {
	    	$(".name > .sidetip > .tip").removeClass("active");
	    	$(".name > .sidetip > .done").addClass("active");
	    }
	});

    $(".email > input").focusout(function() {
		if (isEmail($("#input-email").val())) {
	    	$(".email > .sidetip > .tip").removeClass("active");
	    	$(".email > .sidetip > .error").removeClass("active");
	    	$(".email > .sidetip > .done").addClass("active");
	    }
	    else if ($("#input-email").val()) {
	    	$(".email > .sidetip > .done").removeClass("active");
	    	$(".email > .sidetip > .tip").removeClass("active");
	    	$(".email > .sidetip > .error").addClass("active");
	    }
	});

    $(".password > input").focusout(function() {
	    if ($("#input-pw").val().length > 5) {
	    	$(".password > .sidetip > .tip").removeClass("active");
	    	$(".password > .sidetip > .error").removeClass("active");
	    	$(".password > .sidetip > .done").addClass("active");
	    }
	    else if ($("#input-pw").val()) {
	    	$(".password > .sidetip > .done").removeClass("active");
	    	$(".password > .sidetip > .tip").removeClass("active");
	    	$(".password > .sidetip > .error").addClass("active");
	    }
    });

    $("input").focus(function() {
    	if (($("#input-pw").val().length > 5) && (isEmail($("#input-email").val())) && ($("#input-name").val())) {
    		$(".btn-green").removeAttr("disabled");
    	}
    })

    $("input").focusout(function() {
    	if (($("#input-pw").val().length > 5) && (isEmail($("#input-email").val())) && ($("#input-name").val())) {
    		$(".btn-green").removeAttr("disabled");
    	}
    })

});

function isEmail(str) {
	if (str.indexOf("@") === -1) {
		return false;
	}
	else {
		return true;
	}
}