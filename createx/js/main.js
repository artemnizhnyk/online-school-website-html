const directionsFilterBtns = document.querySelectorAll(`.directions__filter-btn`);

directionsFilterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        directionsFilterBtns.forEach(item => item.classList.remove("directions__filter-btn--active"));
        e.target.classList.add("directions__filter-btn--active");
    });
});

mixitup('.directions__body');

$(document).ready(() =>{
    $('.team-list').slick({
        arrows: false,
        slidesToShow: 4
    });
    $('.team__left-btn').on('click', e => {
        e.preventDefault();
        $('.team-list').slick('slickPrev');
    });
    $('.team__right-btn').on('click', e => {
        e.preventDefault();
        $('.team-list').slick('slickNext');
    });

    $('.say__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.say__dots')
    });
    $('.say__left-btn').on('click', e => {
        e.preventDefault();
        $('.say__slider').slick('slickPrev');
    });
    $('.say__right-btn').on('click', e => {
        e.preventDefault();
        $('.say__slider').slick('slickNext');
    });

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })
});