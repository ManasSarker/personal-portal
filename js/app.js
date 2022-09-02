const loadCountries = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayNews(data.data.news_category));
};

loadCountries();

const displayNews = (newses) => {
  const newsSection = document.getElementById("news-section");

  newses.forEach((news) => {
    // console.log("THEY ARE", news.category_name);

    const newsParagraph = document.createElement("div");

    newsParagraph.innerHTML = `
     <p onClick='loadNewsDetails()'>  ${news.category_name} </p>
    
    `;

    newsSection.appendChild(newsParagraph);
  });
};

const loadNewsDetails = () => {
  console.log("Borsha is on fire");
};

// const displayCountries = (countries) => {
//   // for(const country of countries){
//   //     console.log(country);
//   // }
//   const countriesContainer = document.getElementById("news-section");
//   countries.forEach((country) => {
//     const countryDiv = document.createElement("div");
//     countryDiv.classList.add("country");
//     // console.log(country);
//     countryDiv.innerHTML = `
//             <h3>Name: ${country.data.news_category[0].category_name}</h3>
//             <p>Capital: ${
//               country.capital ? country.capital[0] : "No Capital"
//             }</p>
//             <button onclick="loadCountryDetail('${
//               country.cca2
//             }')">Details</button>
//         `;
//     countriesContainer.appendChild(countryDiv);
//   });
// };
