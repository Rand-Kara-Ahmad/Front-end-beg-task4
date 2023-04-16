const rightCarouselFirst = document.querySelector("#carousel-right-first");
const rightCarouselSecond = document.querySelector("#carousel-right-second");

const leftCarouselFirst = document.querySelector("#carousel-left-first");
const leftCarouselSecond = document.querySelector("#carousel-left-second");

const carouselFirst = document.querySelector("#carousel-first");
const carouselSecond = document.querySelector("#carousel-second");

rightCarouselFirst.addEventListener('click', function () {
    const child = carouselFirst.firstElementChild;
    carouselFirst.removeChild(carouselFirst.firstElementChild);
    carouselFirst.appendChild(child)
})

rightCarouselSecond.addEventListener('click', function () {
    const child = carouselSecond.firstElementChild;
    carouselSecond.removeChild(carouselSecond.firstElementChild);
    carouselSecond.appendChild(child)
})

leftCarouselFirst.addEventListener('click', function () {
    const child = carouselFirst.lastElementChild;
    carouselFirst.removeChild(carouselFirst.lastElementChild);
    carouselFirst.insertBefore(child, carouselFirst.firstElementChild)
})

leftCarouselSecond.addEventListener('click', function () {
    const child = carouselSecond.lastElementChild;
    carouselSecond.removeChild(carouselSecond.lastElementChild);
    carouselSecond.insertBefore(child, carouselSecond.firstElementChild)
})