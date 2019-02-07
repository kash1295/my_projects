
// Get the first character of every string 
	function firstCharacter(name){
		return name.split(" ").map((word) =>{
			return word[0];
		}).join('');
		}
	console.log( firstCharacter("John k feri"));


	function firstCharacter(name){
		let initials = "";
		let whitespace = false;
		for(var i=0; i< name.length; i++){
				if(!whitespace){
					initials += name[i];
					whitespace = true;
				}

if(name[i] === " "){
	whitespace = false;
}
		}
		return initials;
	}

	console.log( firstCharacter("John k feri"));


// Reverse a string 

function reverseString(name){
	var reverseStrig = "";
for( var i = name.length-1; i>=0; i--){
 reverseStrig += name[i];
}
return reverseStrig;
}
console.log(reverseString("hello"));