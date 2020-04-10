// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.



function cardMaker(user){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorName)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    img.src = user.authorPhoto

    headline.textContent = user.headline
    authorName.textContent = user.authorName

    return card

}
    const cardsContainer = document.querySelector('.cards-container') 

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const topics = Object.entries(response.data.articles)
    topics.forEach(subject => {
        subject[1].forEach(data => {
            const articleCard = cardMaker(data);
            cardsContainer.appendChild(articleCard);
            console.log(subject[1])
        })
        
    });
})
.catch(err => {
    console.log(err)
})