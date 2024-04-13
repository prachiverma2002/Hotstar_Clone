const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;
const createSlide = () =>{
    if(slideIndex >= movies.lenth){
        slideInex = 0;
    }
    // creating DOM element
    let slide = document.createElement('div')
    let imgElement = document.createElement('img')
    let content = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(document.createTextNode(h1));
    content.appendChild(document.createTextNode(p));
    slide.appendChild(document.createTextNode(content));
    slide.appendChild(document.createTextNode(imgElement));
    carousel.appendChild(slide);

    //setting up image
    imgElement.src = movies[slideIndex].name;
    slideIndex++;

    //setting elements classname
    slide.className = 'slide';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    //adding sliding effect
    if(sliders.length){
        sliders[0].style.marginLeft = 'calc(-${100 * (sliers.length -2)}% -${30 * (sliders.length-2)}px)';
    }
}

for(let i=0; i<3; i++){
    createSlide();
}

setInterval(()=> {
    createSlide();
}, 3000);