let year = new Date().getFullYear();
document.querySelector("#footer").innerHTML = `&copy ${year} - Angel Solano`;

let oLastModif = new Date(document.lastModified);
document.querySelector("#modified").innerHTML = `Last modified ${oLastModif}`;


function message(week) {
    alert(`This will be Assigment ${week}`);
};