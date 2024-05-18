const filter = document.querySelectorAll(".filter button");
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterFilters = e => {
    //Resetando Botões e Cards
    let allActive = document.querySelectorAll(".active")
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

filter.forEach(btn => btn.addEventListener('click', filterFilters));
filterButtons.forEach(button => button.addEventListener('click', filterCards));