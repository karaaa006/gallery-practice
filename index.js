import data from "./js/item-list.js";

const imgListEls = data.map((el) => {
  const listEl = document.createElement("li");
  const img = document.createElement("img");
  listEl.classList.add("img-list-item");

  img.classList.add("gallery-img");
  img.src = el.preview;
  img.dataset.origin = el.original;
  img.alt = el.description;
  listEl.append(img);
  return listEl;
});

const galleryRef = document.querySelector(".gallery");
const imgListRef = galleryRef.querySelector(".img-list");
const mainImgRef = galleryRef.querySelector(".main-image");

imgListRef.append(...imgListEls);

const firstGalleryImgRef = galleryRef.querySelector(".gallery-img");
firstGalleryImgRef.classList.add("current");
let currentImg = firstGalleryImgRef;
console.dir(firstGalleryImgRef);
mainImgRef.src = firstGalleryImgRef.dataset.origin;

const makeCurrentImg = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  currentImg.classList.toggle("current");
  currentImg = e.target;
  currentImg.classList.toggle("current");
};

imgListRef.addEventListener("click", (e) => {
  makeCurrentImg(e);
  mainImgRef.src = currentImg.dataset.origin;
});
