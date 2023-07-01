// your code here
let url = document.getElementById("url");
const name = document.getElementById("name");
const year = document.getElementById("year");
const submitBtn = document.getElementById("button");

submitBtn.addEventListener("click", (e)=>{
	e.preventDefault();
	if(name.value && year.value){
		url.innerText += `?${name.name}=${name.value}&${year.name}=${year.value}`
	}
	 
})