
const textBox = document.getElementById("input-box");
const submitBtn = document.getElementById("submit");
const apiKey = 'RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC';
const limit = 9;
const rating = 'pg';
const showMore = document.querySelector(".more-pics");
let gifArea = document.querySelector(".gif-area");
let innerGifArea = document.querySelector(".inner-gif-area");
let offset = 0;
let pages = 0;
const form = document.querySelector("#form");


submitBtn.addEventListener('click', getResults);

async function getResults(e){
    e.preventDefault();
    let offset = pages * limit;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC&limit=${limit}&offset=${offset}&q=`+ textBox.value+ '&rating=g';
    const get = await fetch(url);
    const getData = await get.json();
    console.log(getData);

    let gifs = getData.data;

    gifs.forEach(e => {
        displayResults(e);
    })

    console.log(url);
    
    pages++;
    offset *= 2;

    console.log(prevVariable);
    console.log(textBox.value);
    if(prevVariable != textBox.value){
        gifArea.innerHTML += "";
    }

}



showMore.addEventListener('click', displayMore);
async function displayMore(e){
    getResults(e);

}


function displayResults(data){
    innerGifArea.innerHTML += '<img class="individual-gif" src=' + data.images.downsized.url + '>';
    gifArea += innerGifArea;
}


