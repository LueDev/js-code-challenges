/* 
  Create a search feature. When the user makes a change to the input field,
  capture the user input and use it to filter through the products - this should happen in real time (which event type listens for).
  Then list the products on the page that pass the filter - remember to account for letter case. 
  You should allow products that contain **ALL of the letters in order in the input to pass the filter. 
  Use a h3 tag for the product name and a p tag for the category.
  */

const products = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Carrot", category: "Vegetables" },
    { id: 4, name: "Tomato", category: "Vegetables" },
    { id: 5, name: "Orange", category: "Fruits" },
    { id: 6, name: "Broccoli", category: "Vegetables" },
  ];
  
  // 1. Grab the DOM elements (Search bar and div below)
  // 2. Add event listener to the search bar 
  // 3. Create the text we want to be rendered 
  // 4. Append the text to DOM element 


//first, grab the DOM elements
const userInput = document.getElementById('searchInput')
const container = document.getElementById('productList')

//create a button for submit purposes
// const btn = document.createElement('button')
// btn.innerText = "Submit"
// container.appendChild(btn)

//using 
console.log(products.filter(product => product.name === 'Broccoli')[0].name)

userInput.addEventListener('change', (event) => { 
  if (event.target.value === products.filter(product => event.target.value === product.name)[0].name){
    const userTyped = document.createElement('h3')
    userTyped.innerText = userInput.value
    container.appendChild(userTyped);
  }

  console.log(event.target.value);
})
