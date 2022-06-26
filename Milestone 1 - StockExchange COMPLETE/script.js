const baseUrl = 'https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/';

import { getSymbol } from './script2.js';



async function getData(query) {
    try {
        const endpoint = baseUrl + `search?query=${query}&limit=10&exchange=NASDAQ`;
        let response = await (await fetch(endpoint)).json();
        return response;
    }
    catch (err) {
        console.log(err);
    }
}
const btnSearch = document.getElementById('submit');
btnSearch.addEventListener('click', searchResults);

async function searchResults() {
    const inputSearch = document.getElementById('input');
    const inputValue = inputSearch.value;
    const results = await getData(inputValue);
    displayResults(results);
}   
 function displayResults(results) {
    console.log(results);
    const resultsContainer = document.getElementById('responseField');
    resultsContainer.innerHTML = "";
    const displayUl = document.createElement('ul');
    resultsContainer.appendChild(displayUl);
    results.forEach(async function (item) {
        console.log(item.symbol);
        const itemProfile = await getSymbol(item.symbol);
        const liTag = document.createElement('li');
        displayUl.appendChild(liTag);
        setLink(item, liTag, itemProfile);
    })  
}


function setLink(item, li, itemProfile) {
    const itemLink = document.createElement('a');
    let itemPercentage = itemProfile.profile.changesPercentage;
    let itemImg = itemProfile.profile.image;
    const spanElement = setPercentage(itemPercentage);
    itemLink.innerHTML = " "+ item.name + " (" + item.symbol + ")" + " ";
    itemLink.setAttribute('href', `company.html?symbol=${item.symbol}`);
    const imgElement = setImage(itemImg);
    itemLink.prepend(imgElement);
    itemLink.appendChild(spanElement);
    li.appendChild(itemLink); 
}
function isPositive(itemPercentage) {
    if (itemPercentage > 0) {
        return true;
    } else {
        return false;
    }
}
function setPercentage(itemPercentage) {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = itemPercentage;
    const positiveCheck = isPositive(itemPercentage);
    if (positiveCheck) {
        spanElement.classList.add('positivePercentage')
    }
    else {
        spanElement.classList.add('negativePercentage')
    }
    return spanElement;
}
    
function setImage(itemImg) {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', itemImg); 
    imgElement.setAttribute('width', '3%');
    return imgElement;
}

function redirLi() {
    let a = document.createElement('a');
    a.setAttribute('href', 'company.html');
    a.appendChild(li);
    li.appendChild(a);
}

function redirResults() {
}