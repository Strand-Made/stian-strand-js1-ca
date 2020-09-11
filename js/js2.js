
const brewContainer = document.querySelector(".brewContainer");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const breweryId = params.get("id");

if(breweryId === null){
    document.location.href="index.html";
}

async function fetchBrewery() {
    try {
    const url = "https://api.openbrewerydb.org/breweries/" + breweryId;
    const apiResponse = await fetch(url);

    const apiResult = await apiResponse.json()
    console.log(apiResult);

    brewContainer.innerHTML = "";
    
    brewContainer.innerHTML = `<h3> ${apiResult.name}<h3>
                                <div class="information">
                                <p> City: ${apiResult.city}</p>
                                <p> State:${apiResult.state}</p>
                                <p> Street: ${apiResult.street}</p>
                                <a href="${apiResult.website_url}"> ${apiResult.website_url}</a>
                                </div>
                                `
    document.title = ${apiResult.name};
    } catch (error) {
        console.log(error);
        brewContainer.innerHTML = "Wonder what kind of error this is "+ error; 
    }
    

}

fetchBrewery();


    
                                    

