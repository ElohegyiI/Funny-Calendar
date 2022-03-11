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
      }
  ]


function getFemaleAdults(user) {
  
    let x = [];

    for (const names of user) {
        
        if( user.gender === 'female' && user.age >= 18 ) {

            x.push(user)
            console.log(user)
        }

        
        //return x
    } 
  
  
}
getFemaleAdults(user)*/
