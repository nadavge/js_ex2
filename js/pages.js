function changePage(page_id) {
	$(".page").removeClass("active");
	$("#"+page_id+".page").addClass("active");
}

function login() {
	var username = $("#username").val();
	var password = $("#password").val();
	if (username === password && password === "admin") {
		changePage("profile");
		message = document.createElement("div");
		$(message).addClass("alert alert-success");
		$(message).text("Logged out successfully!");
		$("#login.page>#messages").html(message);
	} else {
		message = document.createElement("div");
		$(message).addClass("alert alert-danger");
		$(message).text("Invalid username or password");
		$("#login.page>#messages").html(message);
	}

	return false;
}

