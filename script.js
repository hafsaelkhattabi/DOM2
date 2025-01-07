
document.addEventListener("DOMContentLoaded", function () {
    var colorBox = document.getElementById("color-box");
    var colorBtn = document.getElementById("color-btn");

    function getColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            // Use Date.now() and bitwise operations to simulate randomness
            var Index = (Date.now() + i) & 15; // Generate a number between 0 and 15
            color += letters[Index];
        }
        return color;
    }

    function changeColor() {
        var Color = getColor();
        colorBox.style.backgroundColor = Color;
    }

    colorBtn.addEventListener("click", changeColor);
});
