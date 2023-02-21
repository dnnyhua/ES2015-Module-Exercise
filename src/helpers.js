// let fruits = [
//     "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
//     "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑",
// ];

// need to pick a random food from the fruits array
// need to make random number generator based on length of the array
function choice(fruits) {
    let index = Math.floor(Math.random() * fruits.length)
    return fruits[index]
}

// need to remove the index
function remove(fruit, fruits) {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === fruit) {
            let frontHalf = fruits.slice(0, i)
            let lastHalf = fruits.slice(i + 1)
            return [...frontHalf, ...lastHalf]
        }
    }

}




export { choice, remove }