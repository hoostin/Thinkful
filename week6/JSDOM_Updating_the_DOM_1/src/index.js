//import "./styles.css";

/**
  Write the addHeadings() function here
*/
function addHeadings() {
  const articles = document.querySelectorAll("article");
  for (let article of articles) {
    const value = article.innerHTML;
    article.innerHTML = `<h2> ${value} </h2>`;
  }
}
/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles() {
  const articles = document.querySelectorAll("article");

  for (let article of articles) {
    const theText = article.innerText;

    if (theText.includes("Tutorial")) {
      article.classList.add("tutorial");
    } else {
      article.classList.add("article");
    }
  }
}
/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials() {
  // create section for tutorials
  //copy tutorials to new section

  const articles = document.querySelectorAll("article");
  const container = document.querySelector(".container");
  const newSection = document.createElement("section");

  newSection.classList.add("tutorials");
  container.appendChild(newSection);
  for (let article of articles) {
    if (article.classList.contains("tutorial")) {
      newSection.appendChild(article);
    }
  }
}
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
