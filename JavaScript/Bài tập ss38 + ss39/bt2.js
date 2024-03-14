document.addEventListener("DOMContentLoaded", function(){
    const searchContainer = document.getElementById('search-container');
    const searchIcon = document.getElementById('inputSearch');

    searchIcon.addEventListener("click", function() {
    searchContainer.classList.toggle("search-expanded");
    searchContainer.classList.toggle("timKiem");
    searchIcon.classList.toggle("fa-search");
    searchIcon.classList.toggle("fa-times");
    });
});