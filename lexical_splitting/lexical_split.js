/* 
	lexical_split function does pretty much the same as the default split function.
 	However, this one does not split spaces that are in double quotes (") or whatever
  	your heart intends. It also allows having the double quotes (") inside of the texts
   	by adding a backward slash (\) like this: \"
	The purpose of this function is to make tokenizing sentences with spaces much easier
 	by doing this script instead of using the split function
*/

function lexical_split(text, delimiter=" ", quotes="\"") {
	let regex = new RegExp(`(${quotes}[^${quotes}]+${quotes}|[^${delimiter}]+)`,"g");
	return text.split(regex);
}
