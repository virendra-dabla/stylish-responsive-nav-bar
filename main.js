const nav = document.querySelector("nav.nav");
const home_btn = document.querySelector(".home-btn .btn");

var nav_state = true;

window.addEventListener("resize", function () {
	if (window.innerWidth > 1000) {
		nav.style = "height: 50px";
		nav_state = true;
	}
});

home_btn.addEventListener("click", function () {
	if (nav_state == true) {
		nav.style = "height: 22rem";
		nav_state = false;
	} else {
		nav.style = "height: 50px";
		nav_state = true;
	}
});
