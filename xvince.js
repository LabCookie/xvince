console.log("Hello, XVince!")
/*
	Welcome to the world of XVince! The comments will guide you on the functions
    to make you more familiar with xvince.
*/
let ver = "XV1pre-1";
xvar = {
	VER: ver
};
let xvince = {
	VOID_FUNC: {
		ORPHANAGE: {
			VAR: function(args) {
				if (args[0] in xvar) {
					
				}
				xvar[args[0]] = test_value(args[1]);
			}
		},
		CONSOLE: {
			OUT: function(args) {
				console.log(test_value(args[0]));
			}
		},
        HTML: {
            OUT: function(args) {
                const element = document.getElementById(xvar[args[0]])
                element.innerHTML = test_value(args[1]);
            }
        }
	},
	OUT_FUNC: {
		ORPHANAGE: {
			LAST: function(args) {
                return args[args.length-1];
            }
		}
	}
};
// out_func function runs a xvince function
function void_func(func,args) {
	if (func.includes(":")) {
		let split_func = func.split(/[^:]+/g);
		let namespace = split_func[0];
		let sub_func = split_func[1];
		xvince.VOID_FUNC[namespace][sub_func](args);
	} else {
		xvince.VOID_FUNC.ORPHANAGE[func](args);
	}
}
// out_func function runs a xvince function and returns the value
function out_func(func,args) {
	if (func.includes(":")) {
		let split_func = func.split(/[^:]+/g);
		let namespace = split_func[0];
		let sub_func = split_func[1];
        if (namespace in xvince.OUT_FUNC) {
            if (sub_func in xvince.OUT_FUNC[namespace]) {
                return xvince.OUT_FUNC[namespace][sub_func](args);
            } else {
                console.error(`Function "${sub_func}" cannot be found anywhere in the ${namespace} namespace.`)
            }
        } else {
            console.error(`Namespace "${namespace}" does not exist in the xvince hierarchy.`)
        }
	} else {
		return xvince.OUT_FUNC.ORPHANAGE[func](args);
	}
}
/*
	test_value function checks if a value starts with %, if so it will reference a 
    variable. It also checks if a value starts with #, if so it will call an OUT_FUNC
*/
function test_value(value, var_reference="%", out_func_ref="#") {
	let sliced_value = value.slice(1);
	
	if (value[0] == var_reference) {
		return xvar[sliced_value];
	} else if (value[0] == out_func_ref) {
		let split_func = func.split(/[^:]+/g);
		let main = func[0];
		let args = lexical_split(func[1],",","'");
		return out_func(sliced_value,args);
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
	interpret function interprets multiple lines of code.
*/
function interpret(text) {
	let lines = text.split("\n");
	for (let line in lines) {
        if (line.length > 0 && line.substring(0,1) != "--") {
            let args = lexical_split(line);
            let namespace = args[0];
            args.pop(0);
            void_func(namespace,args);
        }
	}
}
