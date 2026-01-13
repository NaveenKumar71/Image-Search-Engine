const apiKey = "YOUR_API_KEY_HERE";


const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const showMoreBtn = document.getElementById("show-more");
const searchResult = document.getElementById("search-result");
const searchForm = document.getElementById("search-form");

let keyword = "";
let page = 1;

async function show() {
    keyword = searchBox.value;

    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    const res = data.results;

    if(page===1){
        searchResult.innerHTML = "";
    }

    res.map((result) =>{
        const img = document.createElement("img");
        img.src = result.cover_photo.urls.small;
        searchResult.appendChild(img);
    })

    showMoreBtn.style.display = "block"

}

searchForm.addEventListener("submit" ,(e) =>{
    e.preventDefault();
    page = 1;
    show();
})

showMoreBtn.addEventListener(("click"),()=>{
    page++;
    show();
})

