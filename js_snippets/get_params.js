/*
	Collection of JS functions for GETTING PARAMETERS

	Thanks to:
	http://www.creativejuiz.fr/blog/en/javascript-en/read-url-get-parameters-with-javascript
*/


function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;
	}
	return vars;
}


var name = $_GET('name'),
    age = $_GET('age');



    /*
			OR
    */


    var $_GET = $_GET(),
    	name = $_GET['name'],
    	age = $_GET['age'];





/*

Another function to get URL PARAMETERS

*/

function get(name){
	if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
		return decodeURIComponent(name[1]);
}

// how to use?
var open_banner = get('open_banner');
console.log(open_banner);
