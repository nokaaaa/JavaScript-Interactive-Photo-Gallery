function upDate(previewPic) {
    // Log information for debugging
    console.log("Mouse over:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    // Select the div with id "image"
    let imageDiv = document.getElementById("image");

    // Update the background image
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // Update the text with the image's alt text
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    // Log information for debugging
    console.log("Mouse left, restoring default image and text.");

    // Select the div with id "image"
    let imageDiv = document.getElementById("image");

    // Restore the background image to none
    imageDiv.style.backgroundImage = "url('')";

    // Restore the original text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
