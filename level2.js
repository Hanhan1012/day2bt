const quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote)

const quote1 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote1)

console.log(typeof "10" === typeof 10)
console.log(typeof +"10" === typeof 10)

console.log(parseFloat("9.8")===10)
console.log(Math.ceil(parseFloat("9.8"))===10)

const one ="python",two="jargon"
console.log(one.includes("on"))& two.includes("on")

const sen="I hope this course is not full of jargon"
console.log(sen.includes("jargon"))

const num = Math.floor(Math.random () * 101)
console.log(num)
const num1 = Math.floor(Math.random () * 51)+50
console.log(num1)
const num2 = Math.floor(Math.random () * 256)+0
console.log(num2)


const characters = 'Javascript'
console.log(characters.charAt(Math.floor(Math.random() * characters.length)));

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

const sen1='You cannot end a sentence with because because because is a conjunction'
console.log(sen1.substr(31,23))