// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
// console.log(axios.get('https://lambda-times-backend.herokuapp.com/topics'));

const tab = document.querySelector('.topics')

function Tabs(obj){
    obj.topics.map(item => {
        let tabs = document.createElement('div')
        tabs.classList.add('tab')
        tabs.textContent = item
        tab.appendChild(tabs)
    })
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => Tabs(res.data));
