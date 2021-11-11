//console.log('Hello World')

let backpack = [] //this is an empty array

backpack.push('longClaw') // we are adding a string longClaw into that array named backpack
backpack.push('shield') //adding shield
backpack.push('food') // adding food

//backpack.push('longClaw', 'shield', 'food') This would also work to add them all at once.

//console.log(backpack)

//Removing first item from array
//let longClaw = backpack.shift()
let longClaw = backpack.splice(0, 1) //another way to remove first item from an array.


let furCoat = 'fur coat'
backpack.push(furCoat)

backpack.pop() // popped furCoat out of the backpack. removed it from array. but didnt save it as anything



backpack.push('flint')


let itemCount = backpack.length

let backpack2= backpack.splice(2, 3)

//console.log(itemCount) //displays how many items are in the array(backpack)
//console.log(backpack2[0])

// let itemCount1 = backpack.length
// let itemCount2 = backpack2.length

// console.log(itemCount1) //amount of items in array 1 . backpack

// for (let i = 0; i < backpack.length; i++){
//     console.log(backpack[i])
// }

// console.log(itemCount2) //these are the amount of items in array 2. backpack2

// for (let i = 0; i < backpack2.length; i++){
//     console.log(backpack2[i])
// }
if (backpack.length >= 3){
    for(let i = 0; i < 3; i++){
       // console.log(backpack[i])
}
}else{
    for(let i = 0; i < backpack.length; i++){
        //console.log(backpack[i])
    }
}
    
//console.log(backpack)


// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('--------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('guessMe is divisble by 4 or 5. Added 25')
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log('guessMe is divisible by 3. Subtracted 27')
        guessMe -= 27
    } else {
        console.log('Added 3.')
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22. guessMe is now ${guessMe}`)
}
console.log(guessMe)