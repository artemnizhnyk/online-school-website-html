const directionsFilterBtns = document.querySelectorAll(`.directions__filter-btn`);

directionsFilterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        directionsFilterBtns.forEach(item => item.classList.remove("directions__filter-btn--active"));
        e.target.classList.add("directions__filter-btn--active");
    });
});

mixitup('.directions__body');