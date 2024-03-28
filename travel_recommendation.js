async function searchJSON() {
    const searchInput = document.getElementById("searchInput");

    const searchTerm = searchInput.value.toLocaleLowerCase().slice(0, 5);

    let searchResults;

    const data = await (await fetch("./travel_recommendation_api.json")).json();
    switch (searchTerm) {
        case "beach":
            searchResults = data.beaches;
            break;
        case "templ":
            searchResults = data.temples;
            break;
        case "count":
            searchResults = data.countries;
            break;
        default:
            break;
    }

    if (searchResults && searchTerm !== "count") {
        const searchResultContainer = document.getElementById("search-results");
        searchResultContainer.innerHTML = "";
        searchResults.forEach(place => {
            const item = `
            <div class="search-item">
                <img src="${place.imageUrl}" style="width:400px;">
                <h1>${place.name}</h1>
                <p>${place.description}</p>
                <button>View</button>
            </div>
            `;
            searchResultContainer.innerHTML += item;
        });
    } else if (searchResults && searchTerm === "count") {
        const searchResultContainer = document.getElementById("search-results");
        searchResultContainer.innerHTML = "";

        searchResults.forEach((country) => {
            console.log(country);
            country.cities.forEach(place => {
                const item = `
                    <div class="search-item">
                        <img src="${place.imageUrl}" style="width:400px;">
                        <h1>${place.name}</h1>
                        <p>${place.description}</p>
                        <button>View</button>
                    </div>
                    `;
                searchResultContainer.innerHTML += item;

            });

        });
    }
}

function clearSearch() {
    const searchResultContainer = document.getElementById("search-results");
    searchResultContainer.innerHTML = "";
}