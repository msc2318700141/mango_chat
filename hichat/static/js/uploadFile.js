function ProcessFile(e) {
    var file = document.getElementById('file').files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            var img = document.createElement("img");
            img.src = txt;
            console.log(txt)
            img.style.width = 30 + 'px'
            img.style.height = 30 + 'px'
            document.getElementById("msgbox").appendChild(img);
            // document.getElementById("showbox").appendChild(img);
        };
    }
    reader.readAsDataURL(file);
}
function contentLoaded() {
    document.getElementById('file').addEventListener('change',
        ProcessFile, false);
}
window.addEventListener("DOMContentLoaded", contentLoaded, false);