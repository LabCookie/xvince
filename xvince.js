/*
	Welcome to the world of XVince! The comments will guide you on the functions
 	to make you more familiar with xvince.
*/
let ver = "XV1";
let xvince = {
	VOID_FUNC: {
		CONSOLE: {
			OUT: (args) => {
				console.log(test_value(args[0]))
			}
		}
	},
	
};
/*
	test_value function checks if a value starts with %, if so it will reference a 
 	variable. It also checks if a value starts with #, if so it will call an OUT_FUNC
*/
function test_value(value, var_reference="%", out_func_ref="#") {
	if (value[0] == var_reference) {
		
	} else if (value[0] == out_func_ref) {
		
	} else {return value}
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
