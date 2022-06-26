const urlArr = window.location.href.split('=');

const symbol = urlArr[urlArr.length - 1];
console.log(symbol); 

async function getSymbol() {
    try {
        const endpoint = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`;
        let response = await (await fetch(endpoint)).json();
        return response;
    }
    catch (err) {
        console.log(err);
    }
}
async function displayData() {
    const data = await getSymbol();
    console.log(data);
    createData(data);
}
function createData(data) {

}
// console.log(getSymbol());

window.addEventListener('DOMContentLoaded', function () {
    displayData();
});
