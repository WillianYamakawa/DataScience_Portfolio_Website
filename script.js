let fileurl = window.location.hash.replace("#/", "");

if(fileurl === ""){
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