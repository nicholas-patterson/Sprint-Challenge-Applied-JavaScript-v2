// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(data => {
  const articles = data.data.articles;
  articles.bootstrap.forEach(bootArticle => {
    const element = bootstrapArticles(bootArticle);
    cardsContainer.appendChild(element);
  });
});
// BOOTSTRAP ARTICLES
function bootstrapArticles(content) {
  //create elements
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImageContainer = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  // setting classes
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImageContainer.classList.add("img-container");

  // appending together
  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImageContainer);
  cardImageContainer.appendChild(cardImage);
  cardAuthor.appendChild(cardAuthorName);

  //setting content
  cardHeadline.textContent = content.headline;
  cardAuthor.textContent = content.authorName;
  cardImage.src = content.authorPhoto;
  console.log(content);

  return card;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(data => {
  const articles = data.data.articles;
  console.log(articles);
  articles.javascript.forEach(javascriptArticle => {
    const element = javascriptArticles(javascriptArticle);
    cardsContainer.appendChild(element);
  });
});

// JAVASCRIPT ARTICLES

function javascriptArticles(content) {
  //create elements
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImageContainer = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  // setting classes
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImageContainer.classList.add("img-container");

  // appending together
  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImageContainer);
  cardImageContainer.appendChild(cardImage);
  cardAuthor.appendChild(cardAuthorName);

  //setting content
  cardHeadline.textContent = content.headline;
  cardAuthor.textContent = content.authorName;
  cardImage.src = content.authorPhoto;
  console.log(content);

  return card;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(data => {
  const articles = data.data.articles;
  console.log(articles);
  articles.node.forEach(nodeArticle => {
    const element = nodeArticles(nodeArticle);
    cardsContainer.appendChild(element);
  });
});

// NODE ARTICLES

function nodeArticles(content) {
  //create elements
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImageContainer = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  // setting classes
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImageContainer.classList.add("img-container");

  // appending together
  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImageContainer);
  cardImageContainer.appendChild(cardImage);
  cardAuthor.appendChild(cardAuthorName);

  //setting content
  cardHeadline.textContent = content.headline;
  cardAuthor.textContent = content.authorName;
  cardImage.src = content.authorPhoto;
  console.log(content);

  return card;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(data => {
  const articles = data.data.articles;
  console.log(articles);
  articles.javascript.forEach(technologyArticle => {
    const element = technologyArticles(technologyArticle);
    cardsContainer.appendChild(element);
  });
});
// TECHNOLOGY ARTICLES

function technologyArticles(content) {
  //create elements
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImageContainer = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  // setting classes
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImageContainer.classList.add("img-container");

  // appending together
  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImageContainer);
  cardImageContainer.appendChild(cardImage);
  cardAuthor.appendChild(cardAuthorName);

  //setting content
  cardHeadline.textContent = content.headline;
  cardAuthor.textContent = content.authorName;
  cardImage.src = content.authorPhoto;
  console.log(content);

  return card;
}
