window.onload = () => {
  const dog = document.getElementById("dog");
  dog.addEventListener("mouseover", () => {
    dog.style.width = "500px";
  });
  dog.addEventListener("mouseout", () => {
    dog.style.width = "300px";
  });
};