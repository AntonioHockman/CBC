console.log("Hello, World!");
// Add an onClick handler to elements with class 'ggDisc'
document.querySelectorAll('.ggDisc').forEach(function(el) {
	el.onclick = function() {
		alert('Hello, World 2!');
	};
});
