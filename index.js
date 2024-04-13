for(let i =0; i <3; i++){
    createSlide();
}

setInterval(() => {
    //createSlide();
}, 3000);

//video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () =>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video =item.children[1];
        video.pause();
    })
})

//card sliders

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('next-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth = 200;
    })
})
