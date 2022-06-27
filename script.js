let fileurl = window.location.hash.replace("#/", "")
fileurl = `./content/${fileurl}/index.html`
fetch(fileurl).then(value => value.text()).then(html => document.getElementById("content").innerHTML = html)
