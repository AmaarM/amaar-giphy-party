
const textBox = document.getElementById("input-box");
const submitBtn = document.getElementById("submit");
const apiKey = 'RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC';
const limit = 9;
const rating = 'pg';
const showMore = document.querySelector(".more-pics");
let gifArea = document.querySelector(".outer-gif-area");
let offset = 0;
let pages = 0;
const form = document.querySelector("#form");
const moreBtn = document.querySelector(".more-pics");

//Grabs results and display gifs
async function getResults(e){
    e.preventDefault();
    let offset = pages * limit;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC&limit=${limit}&offset=${offset}&q=`+ textBox.value + '&rating=g';
    const get = await fetch(url);
    const getData = await get.json();
    console.log(getData);

    let gifs = getData.data;

    gifs.forEach(e => {
        displayResults(e);
    })
    
    pages++;
    offset *= 2;
}


//Display's more gifs when prompted
showMore.addEventListener('click', displayMore);
async function displayMore(e){
    getResults(e);
}


//Add directly to the html to display a individual Gif
async function displayResults(data){
    gifArea.innerHTML += '<img class="individual-gif" src=' + data.images.downsized.url + '>';
}


//Calls functions when submitted.
form.addEventListener('submit', handleFormSubmit);
async function handleFormSubmit(e){
    document.querySelector(".get-more").classList.remove('closed');
    getResults(e);
}

//update the gifs when a new text is inputed
textBox.addEventListener('change', async e =>{
    gifArea.textContent = "";
    handleFormSubmit(e);
})