if(isDarkMode()){
	var root = document.querySelector(':root');
	root.style.setProperty('--border-low', 'lightblue');
	root.style.setProperty('--variable', 'lightblue');
	root.style.setProperty('--variable', 'lightblue');
}

const urlParams = new URLSearchParams(window.location.search);
const fileurl = urlParams.get('page');
console.log(fileurl)
if(fileurl === null){
	document.getElementById("content").innerHTML = '<h1 class="title loading">Site inexistente</h1>'
}else{
	getHtml(fileurl)
}


function getHtml(file){
	file = `./content/${file}/index.html`;

fetch(file)
	.then((value) => {
		if (value.ok) {
			return value.text();
		} else {
			throw "err";
		}
	})
	.then((html) => (document.getElementById("content").innerHTML = html))
	.catch((err) => {
        
    });
}

function isDarkMode(){
	return localStorage.getItem('darkMode') == 'dark' ? 'dark' : 'light'
}

function setDarkMode(value){
	localStorage.setItem('darkMode', value)
}