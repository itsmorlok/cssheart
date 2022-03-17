function changeColor() {
    let randomColor = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + " ," + Math.floor(Math.random() * 255) + ")";
    document.getElementById("heart1").style.backgroundColor = randomColor;
    document.getElementById("heart2").style.backgroundColor = randomColor;
    document.getElementById("heart3").style.backgroundColor = randomColor;
    document.body.style.background = "radial-gradient(circle, " + randomColor + ", rgb(45, 45, 45))";
}