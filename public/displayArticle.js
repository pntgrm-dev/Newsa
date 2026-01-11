window.onload = async () => {
  const articles = await fetch("/articles").then((res) => res.json());

  const articleContainer = document.querySelector(".Card");

  articles.slice(0, 50).forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.innerHTML = `
      <h2 class="Card__title">${article.title}</h2>
      <p>${article.description}</p>
      <div class="div_image">
        <img class="contentImage" src="${article.urlToImage}" alt="${article.title}">
      </div>
    `;
    articleContainer.appendChild(articleElement);;
  });
}
