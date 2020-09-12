
const url = "https://api.openbrewerydb.org/breweries"

const container = document.querySelector(".drinkContainer")
async function getBreweries() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        console.log(result);
        container.innerHTML = "";

        result.forEach(breweries => {
            container.innerHTML += `<a href="details.html?id=${breweries.id}" class="card">
                                    <h4>${breweries.name}</h4>
                                    <p> City: ${breweries.city}</p> 
                                    <p> Country: ${breweries.country}</p>
                                    <p> State: ${breweries.state} </p>
                                    </a> `
        })


    } catch (error) {
        console.log(error);
        container.innerHTML = error;
    }


}

getBreweries()


