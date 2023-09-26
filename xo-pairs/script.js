/* Check to see if a string has the same amount of 'x's and 'o's. 
The function must return a boolean and be case insensitive. The string can contain any characters.

Examples input/output:

xoCheck("ooxx") => true
xoCheck("xooxx") => false
xoCheck("ooxXm") => true
xoCheck("zpzpzpp") => true
xoCheck("zzoo") => false

*/

function xoCheck(str){
    const charArray = Array.from(str.toLowerCase())
    const countObj = {}

    const xoCounter = charArray.map((char) => {
        if(countObj[char]){
            countObj[char] += 1
        } else {
            countObj[char] = 1
        }
    })

    return console.log(countObj['x'] === countObj['o'] ? true : false)
}

xoCheck("ooxx") 
xoCheck("xooxx") 
xoCheck("ooxXm") 
xoCheck("zpzpzpp")
xoCheck("zzoo") 