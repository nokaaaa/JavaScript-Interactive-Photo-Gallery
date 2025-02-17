function upDate(previewPic) {
    console.log("Наведение на:", previewPic.src);
    console.log("Текст:", previewPic.alt);

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Мышь убрана, возвращаем стандартный фон и текст.");

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Наведи курсор на изображение ниже";
}
