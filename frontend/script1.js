


/*const clon = 

  { name: "Jango Fett", age: 35, gender: "male" }

function createCloneArmy(person, number) {

  let result = [];

  if (number <= 100) {

    for (let i = 1; i <= number; i++) {

      result.push(clon)

    }

    } else {

      for (let i = 1; i <= 100; i++) {

        result.push(clon)

      }

    }
        console.log(result)
  
}createCloneArmy(clon, 8)*/


/*function mean(data) {

  let sum = 0;

  for (let i = 0; i < data.length; i ++) {
    sum = sum + data[i];
  }
  console.log(sum)
  return sum / data.length;
}mean([1,2,3,4,5])*/ 

/*let words = 'blu white red';

let indexFirstSpace = -1;

function myTest() {

for (let i = 0; i < words.length; i++) {

  if (words.charAt(i) === ' ') {

    indexFirstSpace = i;

    break;
  }
}
console.log(indexFirstSpace)

return indexFirstSpace

}myTest()




function isPrimeNumber(n) {

  for (let i = 2; i < n; i++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
    if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
  }
  
  return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
}
console.log(isPrimeNumber(23856))*/


/*function filterLongWords(sentence, n) {
  
  let result = [];

  let x = sentence.split(' ').length

  //let y = x.length

  

  console.log(x)

  

}filterLongWords('Ha egyszer belejönnék, milyen fasza lenne')*/

/*function myLoop() {

  let text = "";

  for (let i = 0; i < 5; i++) {

    
    console.log(text)
    
    return text += "The number is " + i 
    
  }

}myLoop()*/


/*function myArray() {

  let result = [];

  let others = [];

  const numbers = [13, 45, 54, 134, 739, 234, 150, 1230]

  for (const number of numbers) {

    if (number <= 739 && number >= 45) {

      result.push(number)

    } else {

      others.push(number)
      others[0].toString()

    }
  }
  console.log(others, result)
  return result + others

}myArray()*/

/*function fakeNumber(number) {
  
  //console.log(typeof number)

  return number.toString()
  .replace('0', 'X')
  .split('')
  .reverse()
  .join('')
  
}console.log(fakeNumber(3440))*/

/*const cars =
{
  "brand": "Renault",
  "doors": 5,
  "distance": 35000
}

function sumOfKmsBySmallBMWs(cars) {
  
  let km = 0;

  for (car of cars ) {}

  if ( cars.brand === 'BMW' && cars.doors === 2){
  
    console.log(cars)
    return cars.distance

  }
}
}sumOfKmsBySmallBMWs(cars.distance)*/





/*const getLongestEnglishComedy = (movies) => {
  
  let result = null;

  for (let movie of movies) {

    if ( )

  }
  
  return Math.max(movies.length)
}*/

/*function myTest(x, y) {

  if ( x > y ) {

    return x

  } else if ( y > x ) {

    return y

  } else {

    return null

  }

}console.log(myTest(33,33))

function mySign(x, y, z) {

let isString = x.toString() + y.toString().replace(y, 'WR') + z.toString()

let m = isString.split('')

let n = m.reverse()

console.log(n)

return n
  
}console.log(mySign(2,3,4))*/


/*const companies = [

  { name: 'Company One', category: 'finance', start: 1978, end: 2000 },
  { name: 'Company Two', category: 'retail', start: 1980, end: 2010 },
  { name: 'Company Three', category: 'auto', start: 1979, end: 2002 },
  { name: 'Company Four', category: 'technology', start: 1988, end: 2020},
  { name: 'Company Five', category: 'auto', start: 1998, end: 2001 },
  { name: 'Company Six', category: 'technology', start: 1999, end: 2015 },
  { name: 'Company Seven', category: 'finance', start: 1923, end: 2001 },
  { name: 'Company Eight', category: 'technology', start: 1945, end: 2022 }

]

const ages = [ 12, 34, 43, 67, 89, 51, 29, 79, 65, 23, 10 ]*/


/*const filteredAges = ages.filter((ages) => { 
  
  return ages > 12 && ages < 89
  
})
console.log(filteredAges)*/

/*const filteredCompanies = companies.filter((companies) => {

  
  
  
  if ( companies.start >= 1979 ) {
    
    console.log(companies.start)
    return companies.start
    
  }

  
})*/

/*const filteredCompanies = companies.filter((companies) => {

  
  if ( companies.end < 2015 ) {
    
    
    console.log(companies.name, companies.start, companies.category)
    
    //return companies.name

  }

  //return companies.end

})*/

function myTest(str) {

  let result = [];

  let x = str.replaceAll(/3/g, 'E').replaceAll(/0/g, 'O').replaceAll(/4/g, 'A').replaceAll(/1/g, 'l').split('').join(' ')
  
  //result.push(x)

  
  
  console.log(x)

  //return x


}myTest('34451201239')


/*function firstWord(x) {

let y = x.indexOf(' ')

let z = x.substring(0, y)

console.log(z)

return z


}firstWord('see and stop')


const cars = ['Volvo', 'Fiat', 'Skoda']

function myCars() {

  let result = "";

for (let i = 0; i < cars.length; i++) {

console.log(cars[i])

result += cars[i] 


}
return result

}myCars()*/

/*let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i;

}
console.log(text)
return text*/

/*function likes(names) {

  
  console.log(names)
  return 
    
  

}likes()*/
  
//let grades = [10, 5, 15, 20]

// calculate the sum of these grades
/*let sum = grades.reduce((total, current) => {
  return total + current
  
}, 0);
console.log(sum)

let sum = 0;

grades.forEach(grade => {
 
  sum = sum + grade

});
console.log(sum)*/

/*function myEmail(str) {

let result = [];

let x = str.split('.')

let y = x[0].charAt(0).toUpperCase() + x[0].substring(1)

let z = x[1].charAt(0).toUpperCase() + x[1].substring(1)

let s = y + ' ' + z

result.push(s)

//result.push(str)
console.log(result)
return result

}myEmail('peter.deer')

function isGoodRecommendation(user, product) {

  const purchased = user.mostRecentPurchase

  const isRecommended = (purchased.category !== product.category) && (purchased.color == product.color) && (product.price < purchased.price)

  return {
    customerName: user.username,
    productColor: product.color,
    isProductRecommended: isRecommended
  }
}*/

/*function myStr(str) {

  let notWord = 'not ' + str
  //console.log(notWord)
  if ( str.length() >= 3 && str.substring(0, 3).equals('not') ){

  return str

  } else {

    return 'not ' + str

  }

}console.log(myStr('not faszom'))*/

function myStr(mystring) {

let mySt = mystring.split('/r').join('/')

return mySt
}
console.log(myStr('faszomr/'))

function remove(str, n){



let newWord = str.substring(0, n) + str.substring(n + 1);

console.log(newWord)

return newWord

}remove('ebwe', 1)