const animate = () => {
  const box = document.getElementById("box");
  for (let i = 0; i < 10000; i++) {
    (i => {
      setTimeout(() => {
        const left = window.getComputedStyle(box).left;
        box.style.left = `${(+left.replace("px", "") + i * 2) %
          window.innerWidth}px`;
      }, 1000);
    })(i);
  }
};
window.onload = () => {
  animate();
};