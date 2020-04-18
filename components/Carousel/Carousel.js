/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let images = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
]

let index = 0;

const carouselContainer = document.querySelector('.carousel-container')
const img1 = document.createElement('img')

function imageCreater(){
  img1.src = images[index];
}

imageCreater();

function Carousel(){

  //create element

  let carousel = document.createElement('div')
  let lButton = document.createElement('div')
  let rButton = document.createElement('div')

  //create class
  carousel.classList.add('carousel')
  lButton.classList.add('left-button')
  rButton.classList.add('right-button')

  //text content
  lButton.textContent = "<"
  rButton.textContent = ">"

  //event listener
  lButton.addEventListener('click', () =>{
    if(index > 0){
      index--;
    }else{
      index = images.length - 1;
    }
    imageCreater();
  })
  rButton.addEventListener('click', ()=>{
    if(index < images.length - 1){
      index++;
    }else{
      index = 0;
    }
    imageCreater();
  })
  

  //append
  carouselContainer.appendChild(carousel)
  carousel.appendChild(lButton)
  carousel.appendChild(img1)
  carousel.appendChild(rButton)

}

Carousel()