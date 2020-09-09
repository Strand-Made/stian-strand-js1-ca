
const options = {
    method: 'GET',
    headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "1ebbe8f1f6msh121e5541a7ac97ap1d303ejsn04a6ee135f2d"
    }
};

const cocktailContainer = document.querySelector(".cocktailContainer");

 const queryString = document.location.search;
 const params = new URLSearchParams(queryString);
 const drinkId = params.get("i");

 if (drinkId === null) {
     document.location.href= "index.html";
 }

async function fetchCocktail() {

    try{
        const url = `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${drinkId}`;
        const apiResponse= await fetch(url, options);
        const json = await apiResponse.json();

        const drinkResult = json.drinks;
        console.log(drinkResult);
        
        for(let i = 0; i < drinkResult.length; i++) {
            //  if(!drinkResult[i].strIngredient1,2,3,4,5,6,7,){
            //      continue;
            //  }
            
            cocktailContainer.innerHTML= `
                                            <img src="${drinkResult[i].strDrinkThumb}" alt="${drinkResult[i].strDrink}" />
                                            <h3>${drinkResult[i].strDrink}</h3>
                                            <div class="cocktailDescription">
                                                <h5>Type of drink: ${drinkResult[i].strCategory}</h5>
                                                <p>${drinkResult[i].strInstructions}</p>
                                                <ul>
                                                    <li>${drinkResult[i].strIngredient1}</li>
                                                    <li>${drinkResult[i].strIngredient2}</li>
                                                    <li>${drinkResult[i].strIngredient3}</li>
                                                    <li>${drinkResult[i].strIngredient4}</li>
                                                    <li>${drinkResult[i].strIngredient5}</li>
                                                </ul>
                                                    
                                            </div>   
                                                `
        }

    }catch(error) {
        console.log(error);
    }
    


}
fetchCocktail();


    
                                    

