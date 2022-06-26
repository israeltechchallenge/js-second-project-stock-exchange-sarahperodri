const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol');

const baseUrl = 'https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/';

async function getSymbol(companySymbol) {
    try {
        const endpoint = baseUrl + `company/profile/${companySymbol}`;
        console.log(endpoint);
        let response = await (await fetch(endpoint)).json();
        return response;
    }
    catch (err) {
        console.log(err);
    }
}
export { getSymbol };

async function displayData() {
    const data = await getSymbol(symbol);
    console.log(data);
    createData(data);

    const img = document.getElementById("demo");
    img.setAttribute('src', data.profile.image);

    let compName = JSON.stringify(data.profile.companyName);
    document.getElementById("demo1").innerText = compName;

    let compDescrip = JSON.stringify(data.profile.description);
    document.getElementById("demo2").innerText = compDescrip;

    let compLink = JSON.stringify(data.profile.website);
    document.getElementById("demo3").innerText = compLink;

}
function createData(data) {   
}

window.addEventListener('DOMContentLoaded', function () {
    displayData();
});