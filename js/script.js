// const switchScreen = document.querySelectorAll(".switch button");
const filter = document.querySelectorAll(".filter button");
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// const switchScreens = e => {

//     switchScreen.forEach(screen => screen.classList.contains("active") && screen.classList.remove("active"));

//     var schedule = document.querySelector("div.schedule");
//     schedule.classList.contains("hide") && schedule.classList.remove("hide");
    
//     var cards = document.querySelector(".filterable_cards");
//     cards.classList.contains("hide") && cards.classList.remove("hide");

//     if (e.target.className === schedule.className) {
//         cards.classList.add("hide");
//     } else {
//         schedule.classList.add("hide");
//     }

//     e.target.classList.add("active");
// }

const filterFilters = e => {
    //Resetando Botões e Cards
    let allActive = document.querySelectorAll(".filter .active, .filter_buttons .active")
    allActive.forEach(active => active.classList.remove("active"));
    document.querySelector('[data-name="all"]').classList.add("active");
    filterableCards.forEach(e => e.classList.remove("hide"));

    filterButtons.forEach(button => {

        button.classList.add("hide");

        if (button.classList.contains(e.target.className) || button.dataset.name === "all") {
            button.classList.remove("hide");
        }
    });
    e.target.classList.add("active");
}

const filterCards = e => {

    filterButtons.forEach(btn => btn.classList.contains("active") && btn.classList.remove("active"));
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");

        if (card.classList.contains(e.target.dataset.name) || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
}

// switchScreen.forEach(screen => screen.addEventListener('click', switchScreens));

filter.forEach(btn => btn.addEventListener('click', filterFilters));

filterButtons.forEach(button => button.addEventListener('click', filterCards));