//import "./styles.css";

function expandArticleBody() {
  // your code here
  const expandButtons = document.querySelectorAll(".expand_button");
  for (let button of expandButtons) {
    button.addEventListener("click", (event) => {
      // find article it belongs to
      const button = event.target;
      const article = button.parentNode.parentNode.parentNode;
      const articleBody = article.querySelector(".article_body");
      let innerButton = button.innerText;

      if (innerButton === ">") {
        articleBody.style.display = "block";
        button.innerText = "V";
      } else if (innerButton === "V") {
        articleBody.style.display = "none";
        button.innerText = ">";
      }
    });
  }
}

function highlightArticle() {
  // your code here
  const articles = document.querySelectorAll(".article");
  for (let article of articles) {
    const button = article.querySelector(".highlightBtn");
    button.addEventListener("click", (event) => {
      const theButton = event.target;
      let innerButton = theButton.innerText;
      if (innerButton === "+") {
        article.classList.add("highlight");
        button.innerText = "-";
      } else {
        button.innerText = "+";
        article.classList.remove("highlight");
      }
    });
  }
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
