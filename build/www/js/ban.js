function ban() {
	var x = document.getElementById("banmenu_reason").value;
	var x2 = document.getElementById("banmenu_ip").value;
	var x3 = document.getElementById("banmenu_end").value;
	socket.emit("command", {list:["ban",x2,x]});
	var x4 = document.getElementById("page_banmenu");
	if (x4.style.display === "none") {
		x4.style.display = "block";
	} else {
		x4.style.display = "none";
	}
	alert("Banned!") 
}

function banmenu() {
	var x4 = document.getElementById("page_banmenu");
	if (x4.style.display === "none") {
		x4.style.display = "block";
	} else {
		x4.style.display = "none";
	}
}