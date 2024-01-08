function rotate() {
    const object = document.getElementById('banka_block');
    if (object) {
        object.style.transitionDuration = "3s";
        object.style.transform = object.style.transform === "rotate(360deg)" ? "rotate(-360deg)" : "rotate(360deg)";
    }
}
