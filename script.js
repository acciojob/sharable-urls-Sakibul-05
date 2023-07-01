// your code here
let url = document.getElementById("url");
const name = document.getElementById("name");
const year = document.getElementById("year");
const submitBtn = document.getElementById("button");

submitBtn.addEventListener("click", (e)=>{
	e.preventDefault();
 
	e.target.style.borderColor = '#96cbf6';
	if(name.value && year.value){
		url.innerText += `?${name.name}=${name.value}&${year.name}=${year.value}`
	}
	if(name.value==="" && year.value){
		url.innerText += `?${year.name}=${year.value}`
	}
	if(year.value==="" && name.value){
		url.innerText += `?${name.name}=${name.value}`
	}
	 
},{once:true})