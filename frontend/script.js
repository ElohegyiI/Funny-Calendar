/*
- get Data

- prepare Data

- components (HTML elemenst we would like to add to the document later)

- rendered = add the components to the document */

/*function Month(name, id, nth, days) {

    this.name = name;
    this.id = id;
    this.nth = nth;
    this.days = days;





}
const months = [ 
    new Month('January', 'jan', 1, 31),
    new Month('February', 'feb', 2, 28),
    new Month('March', 'march', 3, 31),
    new Month('April', 'apr', 4, 30),
    new Month('May', 'may', 5, 31),
    new Month('June', 'june', 6, 30),
    new Month('July', 'july', 7, 31),
    new Month('August', 'aug', 8, 31),
    new Month('September', 'sept', 9, 31),
    new Month('October', 'oct', 10, 31),
    new Month('November', 'nov', 11, 30),
    new Month('December', 'dec', 12, 31)
]
/*console.log(months)

const monthSection = (id, h1, days) => {
    return `
    <section id="${id}">
        <h1>${h1}</h1>
        <div class="days">${days}</div>
    </section>
    `;
}

const dayCard = (year, month, day) => {
    return ` <div class="card">
        <time datetime="YYYY">${year}</time>
        <time datetime="MM">${month}</time>
        <time datetime="DD">${day}</time>
        <button class="card-Btn">Get day name</button>
        </div>
       
    `;


}

const dayCards = (month, callDayCard) => {
    let toReturn = "";

    for (let i = 1; i <= month.days; i++) {
        toReturn += callDayCard(2022, month.nth, i)
        
    }

    return toReturn;

}
/*console.log(dayCards(months[0], dayCard))





const loadEvent = _ => {
    
    let content = ""

    for (const month of months) {
        
        content += monthSection(month.id, month.name, dayCards(month, dayCard));

    }

    document.getElementById('root').insertAdjacentHTML('beforeend', content)
   
    click event*/
    
    /*function cardButtonClickEvent(event) {
        console.log(event.target.parentElement)
        
        event.target.parentElement.classList.toggle('clicked')
        
    }
    const cardList = document.querySelectorAll('.card')

    for (const card of cardList) {
        
        card.querySelector('button').addEventListener('click', cardButtonClickEvent)
        

    }

    function clickEvent(event) {

        //console.log(event.target)

        if (event.target.classList.contains('card-Btn')) {

            console.log('hello click')

            event.target.innerHTML = "This button was clicked"

        }

    }

    document.addEventListener('click', clickEvent)

}
window.addEventListener('load', loadEvent)
/*callback függvény, nincs zárójel, nem fut le */


/*function getSiteName(url) {

let newUrl = new URL(url)

let x = newUrl.hostname.split('.')

let result = x[0].charAt(0).toUpperCase() + x[0].substring(1)



console.log(result)

}
getSiteName('https://vice.com/')

const users = {
    "id": 123,
    "username": "belakovacs12",
    "email": "bela@gmail.com",
    "phone": "701231231",
    "isConfirmed": true
  }



function getUserIdentifiers(users) {
  
    let x = [];

    for (const user of Array.from(users)) {
        
        x.push(`${user.username}@${user.id}`)
    }


    return x
  
    
    
    console.log(x)
}
getUserIdentifiers(users)*/

/*const user = [
    {
        id: 4733631,
        username: "akarkine99",
        email: "kazmerne@gmail.com",
        phone: "206546547",
        gender: "female",
        age: 20,
        isConfirmed: false
      },
      {
        id: 4733632,
        username: "akarkine99",
        email: "ifjkazmerne@gmail.com",
        phone: "206546547",
        gender: "female",
        age: 17,
        isConfirmed: false
      },
      {
        id: 4733632,
        username: "akarkine99",
        email: "ifjkazmerne@gmail.com",
        phone: "206546547",
        gender: "female",
        age: 19,
        isConfirmed: false
      },
      {
        id: 4733632,
        username: "akarkine99",
        email: "ifjkazmerne@gmail.com",
        phone: "206546547",
        gender: "female",
        age: 16,
        isConfirmed: false
      }
  ]


function getFemaleAdults(users) {
  
    let x = [];

    for (const user of users) {
        
        if( user.gender === 'female' && user.age >= 18 ) {

            x.push(user)
            console.log(user)
        }

        
        //return x
    } 
  
  
}
getFemaleAdults(user)*/

/*const item = [

    {
        name: 'Bike', price: 100, id: 1
    },
    {
        name: 'TV', price: 200, id: 2
    },
    {
        name: 'Book', price: 50, id: 3
    }

]

function myNew(items) {

    let result = [];

    for (const item of items) {

        if ( item.id === 1 ) {

            result.push(item)
            console.log(item)
        }
        //return result
    }
    
}
myNew(item)

/*const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split('');

const newWords = words.reverse()

const newNew = newWords.join('')

let result = [];

result.push(newNew)



console.log(result)*/


/*const array = 'hfisjsndze'

const newArray = array.split('')

const newNew = newArray.reverse()

const newJoin = newNew.join('')

function myFunction(params) {
    
    return newJoin
    
    
}
console.log(newJoin)*/

/*function myName(name, lastName) {

    console.log('Hello Faszom' + name + ' ' + lastName)
}
myName('juno', 'etyke')

for ( i = 5; i >= 1; i-- ) {

    if ( i % 2 !== 0)

    console.log(i)

}*/





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

/*for (let i = 0; i < companies.length; i++) {
    console.log(companies[i])
}*/

/*companies.forEach(function(company) {
    console.log(company.name)
})*/

/*let canDrink = [];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21 ) {
        canDrink.push(ages[i])
    }

}*/

/*const canDrink = ages.filter(function(ages) {

    if( ages >= 21 ) {
        return true
    }

})*/

//const canDrink = ages.filter(ages => ages >= 21)

/*const retailCompanies = companies.filter(function(company) {

    if (company.category === 'retail') {
        return true
    }
    
})*/

/*const retailCompanies = companies.filter(company => company.category === 'retail')

const eigthiesCompanies = companies.filter(company => (company.start >= 1980 && company.end < 2010))

const lastedTenYears = companies.filter(company => (company.end - company.start > 10))

console.log(lastedTenYears)*/

//map

/*const companyNames = companies.map(function(company) {

    return company.name

})*/

/*const testMap = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`
})*/

/*const testMap = companies.map(company => 
    `${company.name} [${company.start} - ${company.end}]`
)*/

//console.log(companyNames)

//const agesSquare = ages.map(age => Math.sqrt(age))
//const agesTimesTwo = ages.map(age => age * 2)

/*const mapMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2)

console.log(mapMap)*/


/*const sortedCompanies = companies.sort(function(c1, c2) {

    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
    
});*/

/*const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

const sortedAges = ages.sort((a, b) => b - a)

console.log(sortedAges)*/

/*let ageSum = 0;

for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i]
}*/


/*const ageSum = ages.reduce((total, age) => 
    total + age
, 0);*/


/*const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start)
}, 0);*/

/*const totalYears = companies.reduce((total, company) => 
    total + (company.end - company.start)
, 0);*/

/*for (let i = 0; i < companies.length; i++) {

    console.log(companies[i])
}

companies.forEach(function(company) {
    console.log(company.name)
})*/

/*let canDrink = [];

for (let i = 0; i < ages.length; i++) {
    if ( ages[i] >= 35 ) {
        canDrink.push(ages[i])
    }
}
console.log(canDrink)*/

/*const canDrink = ages.filter(function(ages) {
    if(ages >= 35) {
        return true
    }
});*/

/*const companyCategory = companies.filter(function(company) {

    if(company.category === 'retail') {
        return true
    }
    
})

const lastedTenYears = companies.filter((company)  => {

    if(company.end - company.start > 20) {
        return true
    }
    
});
console.log(lastedTenYears)*/

function filter_list(l) {
    return l.filter( item => typeof item === 'number' );
  }



/*function extensionFileName(filename) {

    let result = [];

    let file = filename.slice(1, 5)
    
    //let result = file[0].charAt(0).toUpperCase() + file[0].substring(1)
    result.push(file)

    console.log(result)

}
extensionFileName('Annamária')*/

/*const users = {
    "id": 123,
    "username": "belakovacs12",
    "email": "bela@gmail.com",
    "phone": "701231231",
    "isConfirmed": true
  }

function getUserIdentifiers(users) {
  
    let x = [];

    for (const user of Array.from(users)) {
        
        x.push(`${user.username}@${user.id}`)
    }
    console.log(x)
    
    return x
    
  
    
    
}
getUserIdentifiers(users)*/

/*function myReverse(word) {

    let result = [];

    let wordReversed = word.split('').reverse().join('')

    if( wordReversed === word ) {

        result.push(wordReversed)

    } else {

        return 'This is not a palindrome'
    }
    //console.log(result)

    

}
myReverse('ikied')*/

/*function mySort(str) {

    let result = [];

    let arr = str.split('')

    let arrSorted = arr.sort()
    
    result.push(arrSorted)

    console.log(result)
}
mySort('hullahoopa')*/

/*function mySentence(sentence) {

    let result = [];

    let arr = sentence.split(' ')

    for (let i = 0; i < arr.length; i++) {

    let y = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    //result.push(y)
    console.log(y)
    } 
}
mySentence('tele a faszom az egész kurva anyjával')*/

/*function shortcut(s1, s2) {

    let result = [];

    let x = s1.charAt(0) + s2.charAt(0);

    result.push(x)

    console.log(result)

  }
  shortcut('Annamária', 'Benő')*/

  const companies = [
    { name: 'Company One', category: 'finance', start: 1978, end: 2000 },
    { name: 'Company Two', category: 'retail', start: 1980, end: 2010 },
    { name: 'Company Three', category: 'auto', start: 1979, end: 2002 },
    { name: 'Company Four', category: 'technology', start: 1988, end: 2020},
    { name: 'Company Five', category: 'auto', start: 1998, end: 2001 },
    { name: 'Company Six', category: 'technology', start: 1999, end: 2015 },
    { name: 'Company Seven', category: 'finance', start: 1923, end: 2001 },
    { name: 'Company Eight', category: 'technology', start: 1945, end: 2022 }
]

const ages = [ 12, 34, 43, 67, 89, 51, 29, 79, 65, 23, 10 ]



/*function myAges(age) {

    let result = [];

    for(let i = 1; i < ages.length; i++) {
        
        if(ages[i] >= 51) {

            result.push(ages[i])
        }

        console.log(result)
    }


}
myAges()*/

/*companies.forEach(function(company) {
    console.log(company.name)
})*/

function myName(company) {

const retailCompanies = company.filter() 

    if (company.category === 'retail') {
        
        console.log(retailCompanies)

        return true

    }
    
}
myName(companies)