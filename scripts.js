function openmenu() {
	document.getElementById("side-menu").style.display="block";
	document.getElementById("menu-btn").style.display="none";
	document.getElementById("close-btn").style.display="block";
}
function closemenu() {
	document.getElementById("side-menu").style.display="none";
	document.getElementById("menu-btn").style.display="block";
	document.getElementById("close-btn").style.display="none ";
}
function showsearchbox() {
	var dl=document.getElementById("dynamic-search-box-div").classList;
	var textbox=document.getElementById("form-control-text");
	if (!dl.contains("dynamic-search-box-show")) {
		dl.add("dynamic-search-box-show");
		textbox.value="";
		textbox.classList.add("form-control-show");
		textbox.focus();
	}
}
function hidesearchbox() {
	var dl=document.getElementById("dynamic-search-box-div").classList;
	var tl=document.getElementById("form-control-text").classList;
	if (dl.contains("dynamic-search-box-show")) {
		dl.remove("dynamic-search-box-show");
		tl.remove("form-control-show");
	}
}
function setupSearch() {
   var input = document.getElementById("form-control-text");
   input.addEventListener("keyup", function(event) {
     	if (event.keyCode === 13) {
       	event.preventDefault();
       	hidesearchbox();
     	}
   });
}
function setupPage() {
	setupSearch();
	$(document).click(function(e) {
		var tgt = $(e.target);
        if (tgt.is('#side-menu') || tgt.is('#menu-btn') || tgt.is('#close-btn')) {
            return;
        } else {
            closemenu();
        }
    });
}