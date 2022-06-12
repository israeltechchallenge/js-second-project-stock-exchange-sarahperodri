
async function getData(query) {
    try {
        const endpoint = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ`;
        let response = await (await fetch(endpoint)).json();
        return response;
    }
    catch (err) {
        console.log(err);
    }
}

//     fetch(`https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=e1f0f659667b5e0e57830b66b159b55a`)
//         .then(response => response.json())
//         .then(json => console.log(json))
//         .catch(error => console.log(error))
//console.log(data);

const btnSearch = document.getElementById('submit');
btnSearch.addEventListener('click', searchResults);


async function searchResults() {
    const inputSearch = document.getElementById('input');
    const inputValue = inputSearch.value;
    const results = await getData(inputValue);
    displayResults(results);
    // console.log(inputValue);
}   

function displayResults(results) {
    console.log(results);
    const resultsContainer = document.getElementById('responsefield');
    resultsContainer.innerHTML = "";
    const displayUl = document.createElement('ul');
    resultsContainer.appendChild(displayUl);
    results.forEach(function (item) {
        const liTag = document.createElement('li');
        displayUl.appendChild(liTag);
        setLink(item, liTag);
        //console.log("Name: " + item.name + ",Symbol: " + item.symbol);
        //take off standard design ul for black balls
    })  
}

function setLink(item, li) {
    const a = document.createElement('a');
    a.innerHTML = "Name: " + item.name + "(" + item.symbol + ")"
    a.setAttribute('href', `company.html?symbol=${item.symbol}`);
    li.appendChild(a);
}

function redirLi() {
    let a = document.createElement('a');
    a.setAttribute('href', 'company.html');
    a.appendChild(li);
    li.appendChild(a);
}

//redirect to page

function redirResults() {
    //on click at the result a href = company.html

}