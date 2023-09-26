/* First create a function that will render the people array to the DOM - "{name} is {age} years old."
Check the HTML file to see what element you should be appending them to.
Then write the code that will allow the user to click the button and
sort the people by age in ascending order.
 */

const peopleArr = [
    { id: 1, name: 'Maria', age: 32 },
    { id: 2, name: 'Ryan', age: 37 },
    { id: 3, name: 'Zoe', age: 11 },
    { id: 5, name: 'Adette', age: 9 },
    { id: 6, name: 'Gio', age: 15 }
  ];

// 1. Grab the DOM elements 
const button = document.getElementById('sortButton')
const list = document.getElementById('list')

function renderer(){
  const rendering = peopleArr.map((person) => {
    const listItem = document.createElement('li')
    listItem.innerText = `${person.name} is ${person.age} years old`
    list.appendChild(listItem)
  })
}

renderer()

button.addEventListener('click', () => {
    // console.log(list.children)

    // Clears all appended list items 
    list.innerHTML = ""

    // Sort the peopleArr array through the .sort callback 
    peopleArr.sort((a, b) => {
      return a.age - b.age 
    })

    // Re-render the list items now sorted.
    renderer()

})