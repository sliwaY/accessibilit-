document.addEventListener("DOMContentLoaded", function () {
    var transcriptionButton = document.getElementById("button");
    var transcriptionDiv = document.getElementById("change");

    transcriptionButton.addEventListener("click", function () {
        if (transcriptionDiv.classList.contains("show")) {
            transcriptionButton.textContent = "changement style";
        } else {
            transcriptionButton.textContent = "masquer le changement";
        }
    });
});




function toggle() {
    var bodyElement = document.querySelector('body');
    var aaaButton = document.querySelector('#btn');

    bodyElement.classList.toggle('aaa');

    if (bodyElement.classList.contains('aaa')) {
        aaaButton.textContent = 'AA';
    } else {
        aaaButton.textContent = 'AAA';
    }
}