//import "./index.css";

/*
 Your solution here
 */

function validateExists(value) {
  return value && value.trim();
}

function validateForm(formData) {
  const errors = {};

  return errors;
}
function searchResult(article, data) {
  const title = article.querySelector("h2");
  let titleString = title.innerText;
  //console.log(titleString.toLowerCase());
  titleString = titleString.toLowerCase();

  if (!titleString.includes(data)) {
    article.classList.add("hidden");
    //console.log(article);
  }
}
function removeHidden() {
  const hidden = document.querySelectorAll(".hidden");
  for (let article of hidden) {
    article.classList.remove("hidden");
  }
}

function emptySearch() {
  const formElement = document.querySelector("#searchForm");
  const newErrorDiv = document.createElement("div");
  // newErrorDiv.innerHTML = `<div class="error" id="searchError">Please enter a search term</div>`;
  formElement.appendChild(newErrorDiv);
  newErrorDiv.classList.add("error");
  newErrorDiv.id = "searchError";
  newErrorDiv.innerText = "Please enter a search term";
}
const submitHandler = (event) => {
  event.preventDefault();
  removeHidden();
  const formData = new FormData(event.target);
  let data = formData.get("searchTerm");
  data = data.toLowerCase();
  if (!validateExists(data)) {
    emptySearch();
  } else {
    const articleList = document.querySelectorAll("article");
    for (let article of articleList) {
      searchResult(article, data);
    }
  }
};
const main = () => {
  const searchForm = document.querySelector("#searchForm");
  //console.log(searchForm);
  searchForm.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);
