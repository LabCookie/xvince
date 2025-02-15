/*
	Welcome to the world of XVince! The comments will guide you on the functions
 	to make you more familiar with xvince.
*/
ver = "XV1"
xvince = {
	
}

/* 
	lexical_split function does pretty much the same as the default split function.
 	However, this one does not split spaces that are in double quotes (") or whatever
  	your heart intends.
	The purpose of this function is to make tokenizing sentences with spaces much easier
 	by doing this script instead of using the split function
*/
function lexical_split(text, delimiter=" ", quotes="\"") {
	let regex = new RegExp(`${quotes}([^${quotes}\\]*(\\.[^${quotes}\\]*)*)${quotes}|[^${delimiter}]+`,"g");
	return text.split(regex);
}

/*
	xvince_cmd function interprets a single line of code.
