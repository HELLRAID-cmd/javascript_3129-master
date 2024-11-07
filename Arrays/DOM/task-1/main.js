const boxImage = document.querySelectorAll(".box-image");
const boxImages2 = document.querySelector(".box-images-2");

boxImage.forEach((boxImage) => {
  boxImage.addEventListener("click", function () {
    boxImages2.classList.add("box-image-2");
    
    const imageClone = boxImage.cloneNode(true)
    boxImages2.append(imageClone);
    
  });
});
