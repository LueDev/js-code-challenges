/* Write a function that takes a string of random words and 
returns an object with the unique words as keys (ignoring case) 
and values of the number of times the word appears

Exmaple input/output: 

const str = "Gabba boo dah ugh fpp BOO gabba doo Boo"

console.log(convertToObjectWithCounts(str)) => { gabba: 2, boo: 3, dah: 1, ugh: 1, fpp: 1, doo: 1 }

*/

//sample String to pass to our func
const words = "Yo Gabba Gabba wanna Dabba Dabba till we lit lit ?"

function uniqueWords(sentence){
    // empty object to be filled in the function
    let countObj = {}

    // Will split the sentence by the delimiter: " " and return an array
    let sentenceArr = sentence.split(' ')

    //Use .map to traverse the array and for each value, run an anonymous function against it.
    //We can check if the countObj already contains a passed word,
    //If not, set the initial value of the passed word to one and add 1 if it exists in the object.
    const counter = sentenceArr.map((word) => {
        if(countObj[word]){
            countObj[word] += 1
        } else {
            countObj[word] = 1
        }
    })    
    return countObj
}

console.log(uniqueWords(words))
