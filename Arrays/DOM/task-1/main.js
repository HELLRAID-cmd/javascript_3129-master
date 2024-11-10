const images = document.querySelectorAll(".box-image");
const boxImages = document.querySelector(".box-images-2");

images.forEach((image) => {
  image.addEventListener("click", function () {
    boxImages.innerHTML = "";

    const img = document.createElement("img");
    img.src = image.src;

    boxImages.append(img);
  });
});
