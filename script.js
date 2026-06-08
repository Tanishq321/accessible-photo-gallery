function upDate(previewPic){

    console.log("Image Hovered or Focused");

    console.log("Source: " + previewPic.src);

    console.log("Alt Text: " + previewPic.alt);

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage =
        "url('" + previewPic.src + "')";

    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML =
        "Hover over or focus on an image below to display here.";
}

function addTabFocus(){

    console.log("Page Loaded");

    let images = document.querySelectorAll(".gallery img");

    for(let i = 0; i < images.length; i++){

        images[i].setAttribute("tabindex","0");

        console.log(
            "Tabindex Added to Image " + (i + 1)
        );
    }
}
