window.onload = () => {
  const title = document.getElementById("title");
  const stylesList = document.getElementById("styles-list");
  const titleStyles = window.getComputedStyle(title);
  Object.keys(titleStyles).forEach(key => {
    const li = document.createElement("li");
    if (isNaN(+key)) {
      li.innerHTML = `${key}: ${titleStyles[key]}`;
      stylesList.appendChild(li);
    }
  });
};