function pixelBoardCreateLines(heigth, width) {
    const pixelBoard = document.querySelector("#pixel-board");

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

pixelBoardCreateLines(5, 5);