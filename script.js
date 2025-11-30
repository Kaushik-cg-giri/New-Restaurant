let images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

let index = 0;

function nextImage() {
    index++;
    if (index >= images.length) index = 0;
    document.getElementById("slider").src = images[index];
}

function prevImage() {
    index--;
    if (index < 0) index = images.length - 1;
    document.getElementById("slider").src = images[index];
}
