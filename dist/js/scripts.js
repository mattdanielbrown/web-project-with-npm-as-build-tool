

"use strict";

function main() {
	document.addEventListener("touchstart", function () { }, true);
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	main();
});

