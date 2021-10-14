const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const imageContainer = document.querySelector(".image_container");
const miniImgContainer = document.querySelector(".col-2");

let currentIndex = 0;
/* Ciclo for che scorre l'array */
for (let i = 0; i < items.length; i++) {
    const urlCorrente = items[i];

    const tagImg = document.createElement("img");
    tagImg.src = urlCorrente;
    tagImg.alt = "Immagine #" + i;
    imageContainer.append(tagImg);

    if (i === currentIndex) {
        tagImg.classList.add("active");

        const imgOverlay = document.createElement("div");
        imgOverlay.classList.add("img_overlay");

        const imgTitle = document.createElement("h5");
        imgTitle.classList.add("img_title", "fw-bold", "mb-1");
        imgTitle.textContent = title[currentIndex];

        const imgText = document.createElement("p");
        imgText.classList.add("img_text");
        imgText.textContent = text[currentIndex];

        imageContainer.append(imgOverlay);
        imgOverlay.append(imgTitle, imgText);
    }
}

/* Prendo gli elementi del DOM che corrispondono alle frecce */
const arrowUp = document.querySelector(".arrow_up");
const arrowDown = document.querySelector(".arrow_down");

/* Per ogni freccia aggiungiamo un addEventListener sul click */
arrowUp.addEventListener("click", function () {
    const activeImage = imageContainer.querySelector(".active");
    const activeMiniImg = miniImgContainer.querySelector(".active");
    activeImage.classList.remove("active");
    activeMiniImg.classList.remove("active");

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    const imgTags = imageContainer.querySelectorAll("img");
    const newActiveImage = imgTags[currentIndex];
    newActiveImage.classList.add("active");

    const miniImgTags = miniImgContainer.querySelectorAll("img");
    const newActiveMiniImg = miniImgTags[currentIndex];
    newActiveMiniImg.classList.add("active");

    const imgTitle = imageContainer.querySelector(".img_title");
    const imgText = imageContainer.querySelector(".img_text");
    imgTitle.textContent = title[currentIndex];
    imgText.textContent = text[currentIndex];


    /* const oldImgOverlay = document.querySelector(".img_overlay");

    oldImgOverlay.parentElement.removeChild(oldImgOverlay);

    const imgOverlay = document.createElement("div");
    imgOverlay.classList.add("img_overlay");

    const imgTitle = document.createElement("h5");
    imgTitle.classList.add("img_title", "fw-bold", "mb-1");
    imgTitle.textContent = title[currentIndex];

    const imgText = document.createElement("p");
    imgText.classList.add("img_text");
    imgText.textContent = text[currentIndex];

    imageContainer.append(imgOverlay);
    imgOverlay.append(imgTitle, imgText); */
});

arrowDown.addEventListener("click", function () {
    const activeImage = imageContainer.querySelector(".active");
    const activeMiniImg = miniImgContainer.querySelector(".active");
    activeImage.classList.remove("active");
    activeMiniImg.classList.remove("active");

    currentIndex++;

    if (currentIndex > items.length - 1) {
        currentIndex = 0;
    }

    const imgTags = imageContainer.querySelectorAll("img");
    const newActiveImage = imgTags[currentIndex];
    newActiveImage.classList.add("active");

    const miniImgTags = miniImgContainer.querySelectorAll("img");
    const newActiveMiniImg = miniImgTags[currentIndex];
    newActiveMiniImg.classList.add("active");

    const imgTitle = imageContainer.querySelector(".img_title");
    const imgText = imageContainer.querySelector(".img_text");
    imgTitle.textContent = title[currentIndex];
    imgText.textContent = text[currentIndex];
});