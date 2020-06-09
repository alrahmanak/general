window.onload = () => {
  const dog = document.getElementById("dog");
  dog.addEventListener("mouseover", () => {
    if (dog.src.includes("images/dog1.jpg")) {
      dog.src = "images/dog2.jpg";
    } else {
      dog.src = "images/dog1.jpg";
    }
  });
  dog.addEventListener("mouseout", () => {
    if (dog.src.includes("images/dog1.jpg")) {
      dog.src = "images/dog2.jpg";
    } else {
      dog.src = "images/dog1.jpg";
    }
  });
};