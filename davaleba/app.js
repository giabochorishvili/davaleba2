
/* დავალება 1 */


// const users = [
//     {name: "Temo" , age: 25},
//     {name: "lasha" , age: 21},
//     {name: "ana" , age: 28}
// ];

// function findYoungestUser(users){
//     if (users.length === 0) {
//         return null
//     }

//     let youngestUser = users[0]

//     for (let i = 1; i < users.length; i++) {
//         const user = users[i]
//         if(user.age < youngestUser.age){
//             youngestUser = user
//         }
//     }
    
//     return youngestUser.name
// }

// const finduser = findYoungestUser(users)
// console.log(finduser)




/* დავალება 2 */


// const user = {
//     name: "giorgi",
//     age: 19
// }

// function result(user){
//     const newuser = {...user}
//     return newuser
// }

// console.log(result(user))





/* დავალება 3 */


function number() {
    return parseInt(Math.random()* 6) + 1
}
let player1 = number();

function number2(){
    return parseInt(Math.random()*6) + 1
}
let player2 = number2()

while (player1 !== 3 || player2 !== 3) {
    player1 = number()
    player2 = number2()
    console.log("First Player Rolls  " + player1)
    console.log("Second Player Rolls  " + player2)
    if (player1 === 3 && player2 ===3) {
        console.log("Draw")
        break
    }
    if (player1 === 3) {
        console.log("Winner is first player")
        break
    }
    if (player2 ===3) {
        console.log("Winner is second player")
        break
    }
}



