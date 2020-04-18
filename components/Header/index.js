// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector('.header-container')

function Header() {

    //create element
    let header = document.createElement('div')
    let date = document.createElement('span')
    let t1 = document.createElement('h1')
    let temp = document.createElement('span')

    //class list
    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    //text content
    date.textContent = "MARCH 28, 2019";
    t1.textContent = 'Lambda Times';
    temp.textContent = '98°';

    //append
    headerContainer.appendChild(header)
    header.appendChild(date)
    header.appendChild(t1)
    header.appendChild(temp)

    return header
}

Header()