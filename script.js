//your cod
var inputs=document.querySelector("#evaluatedText");
inputs.addEventListener("input", ()=>{
	let len=document.querySelector("#evaluatedText").value.length;
	document.getElementById("letterCount").innerText=len;
})