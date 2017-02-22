
// Store the SetTimeout reference, if the window is not resized anymore, then execute the function 
// Useful for working with ISOTOPE.JS 
var id;

$(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(doneResizing, 500);
    
});

function doneResizing(){
   
	console.log('%c DONE RESIZING ', 'background: #222; color: #bada55');
	$('.grid').isotope({
		layoutMode: 'packery',
		itemSelector: '.grid-item',
	});
}