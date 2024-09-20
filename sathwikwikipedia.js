let searchInput1 = document.getElementById("searchInput");
let searchResults1 = document.getElementById("searchResults");
let spinner1 = document.getElementById("spinner");

function createandappendsearchresult(result) {
    let {
        title,
        link,
        description
    } = result;
    let resultitem = document.createElement("div");
    searchResults1.appendChild(resultitem);
    searchResults1.classList.add("result-item");
    let resultitemtitle = document.createElement("a");
    resultitemtitle.textContent = title;
    resultitemtitle.href = link;
    resultitemtitle.target = "_blank";
    resultitemtitle.classList.add("result-title");
    resultitem.appendChild(resultitemtitle);
    let resultbreak = document.createElement("br");
    resultitem.appendChild(resultbreak);
    let resultitemlink = document.createElement("a");
    resultitemlink.textContent = link;
    resultitemlink.href = link;
    resultitemlink.target = "_blank";
    resultitemlink.classList.add("result-url");
    resultitem.appendChild(resultitemlink);
    let resultbreak2 = document.createElement("br");
    resultitem.appendChild(resultbreak2);
    let resultitemdata = document.createElement("p");
    resultitemdata.textContent = description;
    resultitemdata.classList.add("link-description");
    resultitem.appendChild(resultitemdata);
}

function displayResults(search_results) {
    spinner1.classList.toggle("d-none");
    for (let result of search_results) {
        console.log(result);
        createandappendsearchresult(result);
    }
}
searchInput1.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinner1.classList.toggle("d-none");
        searchResults1.textContent = "";
        let searchdata = searchInput1.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchdata;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(textdata) {
                let {
                    search_results
                } = textdata;
                console.log(search_results);
                displayResults(search_results);
            });
    }
});