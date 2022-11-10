const magnifier = document.querySelector(".magnifier");
const searchContainer = document.querySelector(".search-container");
magnifier.addEventListener("click", () => {
    searchContainer.classList.toggle("active");

}) 