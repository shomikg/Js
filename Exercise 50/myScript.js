// JavaScript - Error Handling

// try...catch

try {
	
	callMe();
}
catch(error) {
	//alert("Error Message: " + error.message);
}


// try...throw...catch

var x = "test";
try {
	
	if( isNaN(x) ) {
		throw ("Not a number.");
	}
}
catch(e) {
	//alert("Error Message: " + e);
}


// try...throw...catch...finally

var x = "test";
try {
	
	if( isNaN(x) ) {
		throw ("Not a number");
	}
}
catch(e) {
	alert("Error Message: " + e);
}
finally {
	
	document.write("<h1>There is an error but keep going!</h1>");
}