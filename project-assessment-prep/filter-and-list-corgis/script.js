// Challenge:
// Using the given dogs array, create a variable named "corgis" whose value is an array containing only the dogs of breed Corgi
// When a user clicks the button "Corgis!!",
// Use the corgis variable to add only the dogs with the breed "Corgi" to the Corgi Container

// Use these dogs:
const dogs = [
    { name: "Cheddar", breed: "Corgi" },
    { name: "Toto", breed: "Terrier" },
    { name: "Susan", breed: "Corgi" },
];

// 1. Make a variable for the DOM elements we will interact with: Div & button 
const container = document.getElementById('corgi-container')
const button = document.getElementById('corgi-button')

// 2. Create the array that contains the dogs with the breed: Corgi 

// const corgi2 = dogs[0]["name"] // Corgi
// console.log(corgi2)

const corgis = dogs.filter((dog) => dog.breed === "Corgi")
// console.log(corgis) 

button.addEventListener('click', () => {

    const render = corgis.map((corgi) => {
        const corgiH1 = document.createElement('h1')
        corgiH1.innerText = corgi.name
        container.appendChild(corgiH1)
    })
})