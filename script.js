function firstWord(s) {
if(s.length === 0) return "";
s = s.trim();
let str = "";
for(let i=0; i<s.length; i++){
	if(s[i] !== " "){
		str += s[i];
	}else break;
}
 return str;	
}
// // Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));


