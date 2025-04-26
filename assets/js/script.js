import "@fontsource/rajdhani/300.css";
import "@fontsource/rajdhani/400.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/inter/100-italic.css";
import "@fontsource/inter/200-italic.css";
import "@fontsource/inter/300-italic.css";
import "@fontsource/inter/400-italic.css";
import "@fontsource/inter/500-italic.css";
import "@fontsource/inter/600-italic.css";
import "@fontsource/inter/700-italic.css";
import "@fontsource/inter/800-italic.css";
import "@fontsource/inter/900-italic.css";
import "@/styles/sass/main.scss";

import jQuery from "jquery";

const jq = jQuery.noConflict();
jq(function ($) {
	$(".menu-toggle").on("click", function () {
		$(this).toggleClass("active");
		$("body").toggleClass("offcanvas-active");
	});
	particlesJS.load("particles", "/assets/particles.json", function () {
		console.log("particles.js loaded - callback");
	});
});
