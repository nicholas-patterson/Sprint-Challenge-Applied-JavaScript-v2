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
  const values = Object.values(articles);
  for (const value of values) {
    value.forEach(value => {
      const element = articlesComponent(value);
      cardsContainer.appendChild(element);
    });
  }
});
// All ARTICLES
function articlesComponent(content) {
  //create elements
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthorContainer = document.createElement("div");
  const cardImageContainer = document.createElement("div");
  const picture = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  // setting classes
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthorContainer.classList.add("author");
  cardImageContainer.classList.add("img-container");

  // appending together
  card.appendChild(cardHeadline);
  card.appendChild(cardAuthorContainer);
  cardAuthorContainer.appendChild(cardImageContainer);
  cardImageContainer.appendChild(picture);
  cardAuthorContainer.appendChild(cardAuthorName);

  //setting content
  cardHeadline.textContent = content.headline;
  cardAuthorName.textContent = content.authorName;
  picture.src = content.authorPhoto;

  return card;
}
