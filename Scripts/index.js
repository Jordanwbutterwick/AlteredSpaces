const image_gallery = document.querySelector(".image--container");
const image_container = document.querySelector(".image--selection");
const apiUrl =
  "https://api.unsplash.com/photos/?client_id=8dd839a74ceea72e92afe3771beb91e0f2aae03d661286914f7cad77ba63e157";
let output = "";
const loading = '<h1 class="loader">Loading...</h1>';
const imageHrefs = [
  { link: "Assets/Photos/bathroom.jpg", altTexts: "" },
  { link: "Assets/Photos/kitchen.jpg", altTexts: "" },
  { link: "Assets/Photos/kitchenCounter.jpg", altTexts: "" },
  { link: "Assets/Photos/kitchenIncomplete.jpg", altTexts: "" },
  { link: "Assets/Photos/Staircase.jpg", altTexts: "" },
  { link: "Assets/Photos/tornWall.jpg", altTexts: "" },
  { link: "Assets/Photos/wall2.jpg", altTexts: "" },
];

const showImages = () => {
  // Show loading text if no data
  if (image_container.children.length === 0)
    image_container.innerHTML = loading;

  //Take images from image folder

  // Show the first image on the viewer
  image_gallery.innerHTML =
    "<img src=" +
    imageHrefs[0].link +
    ' class="animate-entrance image--gallery" alt=' +
    imageHrefs[0].altTexts +
    ">";
  setTimeout(() => {
    image_gallery.children[0].classList.remove("animate-entrance");
  }, 500);
  // show unselected images
  imageHrefs.forEach(({ link, altTexts }) => {
    output +=
      '<img src="' + link + '" alt="' + altTexts + '" class="image__item" />';
  });
  image_container.innerHTML = output;
};

const changeImage = (e) => {
  // Get the viewer image element
  const image = image_gallery.children[0];
  if (e.target.src) {
    // change the image
    image.classList.add("animate-entrance");
    image.src = e.target.src;
    setTimeout(() => {
      image.classList.remove("animate-entrance");
    }, 800);
  }
};
// Event listeners
document.addEventListener("DOMContentLoaded", showImages);
image_container.addEventListener("click", changeImage);
//# sourceURL=pen.js
