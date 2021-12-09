const colorPalette = document.querySelector("#color-palette");
const pixelBoard = document.querySelector("#pixel-board");

function paintColorsPalette() {
    const blackColor = document.querySelector("#black");
    blackColor.style.backgroundColor = "black";

    const redColor = document.querySelector("#red");
    redColor.style.backgroundColor = "red";

    const blueColor = document.querySelector("#blue");
    blueColor.style.backgroundColor = "blue";

    const greenColor = document.querySelector("#green");
    greenColor.style.backgroundColor = "green";
}

function pixelBoardCreateLines(heigth, width) {
    for (let index = 1; index <= heigth; index += 1) {
        const lineSection = document.createElement("section");
        lineSection.id = "pixel-board-line-" + index;

        for (let index = 1; index <= width; index += 1) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.backgroundColor = "white";

            lineSection.appendChild(pixel);
        }

        pixelBoard.appendChild(lineSection);
    }
}

function resetSelected() {
    const blackColor = document.querySelector("#black");

    if (document.getElementsByClassName("selected").length > 0) {
        for (let element of document.getElementsByClassName("selected")) {
            element.classList.remove("selected");
        }
    }

    blackColor.classList.add("selected");
}

function changeSelected(event) {
    let selected = document.getElementsByClassName("selected");
    if (selected.length > 0) {
        resetSelected();
    }
    if (event.target === selected) {
        return;
    }
    selected[0].classList.remove("selected");
    event.target.classList.add("selected");
}

function toPaintPixel(event) {
    const selected = document.querySelector(".selected");
    const color = selected.style.backgroundColor;
    if (!event.target.classList.contains("pixel")) {
        return;
    }

    event.target.style.backgroundColor = color;
}

function clearPixelBoard() {
    for (let element of document.getElementsByClassName("pixel")) {
        element.style.backgroundColor = "white";
    }
}

function loadClearButton() {
    const button = document.querySelector("#clear-board");
    button.innerText = "Limpar";
    button.addEventListener("click", clearPixelBoard);
}

paintColorsPalette();
loadClearButton();
pixelBoardCreateLines(5, 5);
resetSelected();
colorPalette.addEventListener("click", changeSelected);
pixelBoard.addEventListener("click", toPaintPixel);