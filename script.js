const apiKey = '2a5f4bc51ba84ae895fa6eca7b73911d'; 

// Fetch the news from the API
const newsGrid = document.querySelector('.news-grid');
const overlay = document.querySelector('.overlay');
const fullArticle = document.querySelector('.full-article');


const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

let articles = [];

// Fetch and display the news
async function fetchNews() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    articles = data.articles;
    displayNews();
}

// Display the news in grid format
function displayNews() {
    newsGrid.innerHTML = ''; // Clear any existing news
    articles.forEach((article) => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        
        const newsImage = article.urlToImage || 'https://via.placeholder.com/150'; // Default image if none provided
        const newsTitle = article.title;
        const newsDescription = article.description;
        const newsUrl = article.url;

        newsCard.innerHTML = `
            <img src="${newsImage}" alt="${newsTitle}" />
            <h3>${newsTitle}</h3>
            <a href="${newsUrl}" target="_blank" class="read-more">Read More</a>
        `;

        newsGrid.appendChild(newsCard);
    });
}

// Call the fetchNews function to get the news when the page loads
fetchNews();
