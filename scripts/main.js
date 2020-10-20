import { mathOps } from "./Operations.js"

console.log("Welcome to the main module")

const sum = mathOps(2,4,"+")
console.log(sum)
const difference = mathOps(4,2, "-")
console.log(difference)
const product = mathOps(2,4,'*')
console.log(product)
const quotient = mathOps(4,2,'/')
console.log(quotient)

const doozy = ['beaut', 'beauty', 'bees-knees', 'cats-meow', 'corker', 'crackerjack', 'daisy', 'dandy', 'dilly', 'dream', 'honey', 'hot-stuff', 'humdinger', 'hummer', 'jim-dandy', 'knockout', 'lollapalooza', 'lulu', 'nifty', 'peach', 'pip', 'pippin', 'ripper', 'ripsnorter', 'snorter', 'sockdolager', 'standout', 'sweetheart']
const random = Math.floor(Math.random() * doozy.length);
console.log(`Today is going to be a ${doozy[random]} day`)