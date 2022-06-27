const urlParams = new URLSearchParams(window.location.search);
const fileurl = urlParams.get('page');

if(fileurl === undefined){
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