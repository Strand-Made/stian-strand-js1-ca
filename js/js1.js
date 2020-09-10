
const options = {
    method: "GET",
    headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "1ebbe8f1f6msh121e5541a7ac97ap1d303ejsn04a6ee135f2d"
    }
};

const url = "https://the-cocktail-db.p.rapidapi.com/popular.php";

const container = document.querySelector(".drinkContainer");

async function fetchDrinks() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        popularDrinks = result.drinks;
        container.innerHTML = "";

        popularDrinks.forEach(function (drinks) {
            container.innerHTML +=
                `<a href="details.html?i=${drinks.idDrink}" class="drinks">
                                    <img src="${drinks.strDrinkThumb}" alt="${drinks.strDrink}"/>
                                    <h3>${drinks.strDrink}</h3>
                                    <p> ${drinks.strAlcoholic} </p>
                                    <p> Tags: ${drinks.strTags}</p>
                                    <p> Type of glass: ${drinks.strGlass} </p>
                                </a>
                                `
        })

    } catch (error) {
        console.log(error);

    }



}
fetchDrinks();




