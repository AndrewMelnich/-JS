const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = getComputedStyle(itemsList);
const items = document.querySelectorAll('.item');
const slider = document.querySelectorAll('.slider');

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const sliderWidth = getComputedStyle(slider[0]).width;
const step = parseInt(itemWidth);
const widthSlider = parseInt(sliderWidth);;
const preShowItems = widthSlider / step;
const maxRight = (items.length - preShowItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    };
});

left.addEventListener('click', e =>{
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
    };
});

//////////////////////////////////////////////

// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const itemsList = document.querySelector("#items");

// const loop = (direction, e) => {
//   e.preventDefault();

//   if (direction === "right") {
//     itemsList.appendChild(itemsList.firstElementChild);
//   } else {
//     itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
//   }
// };

// right.addEventListener("click", (e) => {
//   loop("right", e);
// });

// left.addEventListener("click", (e) => {
//   loop("left", e);
// });

//////////////////////////////////////////////

// let currentRight = 0;
// rightBtn.addEventListener('click', e => {
//     e.preventDefault();
//     let currentRight = parseInt(computedStyles.right);
//     console.log(currentRight);
   
//    if (currentRight < 500){
//        items.style.right = `${currentRight + 100}px`;
//    }   
// })

// leftBtn.addEventListener('click', e => {
//     e.preventDefault();
//     let currentRight = parseInt(computedStyles.right);
//     console.log(currentRight);
   
//    if (currentRight > 0){
//        items.style.right = `${currentRight - 100}px`;
//    }   
// })
