// const options = {
//     method: "GET",
//     headers: {
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "1ebbe8f1f6msh121e5541a7ac97ap1d303ejsn04a6ee135f2d"
//     }
// };

// const url = "https://api-football-v1.p.rapidapi.com/v2/coachs/team/496"
// const coachesContainer = document.querySelector('.coachesContainer');

// async function getTeams() {
//     try{
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
    
//         coachResult = result.api.coachs;
//         console.log(coachResult)
//         coachesContainer.innerHTML= "";
    
//         coachResult.forEach(function(coach) {
//             coachesContainer.innerHTML += 
//                                         `<a href="details.html?id=${coach.id}" class="coach">
//                                             <h3>${coach.name}</h3>
//                                             <p> First Name: ${coach.firstname}</p>
//                                             <p> Last Name: ${coach.lastname} </p>
//                                         `
//         })

//     } catch(error) {
//         console.log(error);
//         coachesContainer.innerHTML="An error has occured";
//     }
    

// }

// getTeams();
  

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
    try{
        const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    popularDrinks = result.drinks;
    container.innerHTML = "";

    popularDrinks.forEach(function(drinks){
        container.innerHTML += 
                                `<a href="details.html?i=${drinks.idDrink}" class="drinks">
                                    <h3>${drinks.strDrink}</h3>
                                    <img src="${drinks.strDrinkThumb}" alt="${drinks.strDrink}"/>
                                    <p> ${drinks.strAlcoholic} </p>
                                    <p> Tags: ${drinks.strTags}</p>
                                    <p> Type of glass: ${drinks.strGlass} </p>
                                </a>
                                `
    })

    }catch(error) {
        console.log(error);

    }



}
fetchDrinks();




