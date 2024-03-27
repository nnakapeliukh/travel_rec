async function searchJSON() {
  const searchInput = document.getElementById("searchInput");

  const searchTerm = searchInput.value.toLocaleLowerCase().slice(0, 5);

  let searchResults;

  const data = await (await fetch("./travel_recommendation_api.json")).json();
  console.log(data);

  switch (searchTerm) {
    case "beach":
      searchResults = data.beaches;
    case "templ":
      searchResults = data.temples;
      break;
    case "count":
      searchResults = data.countries;
      break;
    default:
      break;
  }

    if (searchResults) {
        const searchResultContainer = document.getElementById("search-results");
        searchResults.forEach(place => {
            
        });
    }
  
    console.log(searchResults);
}
