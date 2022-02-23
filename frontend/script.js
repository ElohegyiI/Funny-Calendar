function loadEvent() {

    let months = [
        {
            "name": "January",
            "days": 31
        },
        {
            "name": "February",
            "days": 28
        },
        {
            "name": "March",
            "days": 31
        },
        {
            "name": "April",
            "days": 30
        },
        {
            "name": "May",
            "days": 31
        },
        {
            "name": "June",
            "days": 30
        },
        {
            "name": "July",
            "days": 31
        },
        {
            "name": "August",
            "days": "31"
        },
        {
            "name": "September",
            "days": 30
        },
        {
            "name": "October",
            "days": 31
        },
        {
            "name": "November",
            "days": 30
        },
        {
            "name": "December",
            "days": 31
        }
    ];

    for (const monthsThisYear of months) {

        let rootElement = document.getElementById('root')

        let sect = document.createElement('section')
        sect.setAttribute('id', monthsThisYear.name)
        document.getElementById('root').appendChild(sect)

        
        let division = document.createElement('div')
        division.className = 'cards'
        document.getElementById('root').appendChild(sect).appendChild(division)
        
        for (let i = 1; i <= 31; i++) {
            
                let card = document.createElement('card')
                card.className = 'card'
                document.getElementById('root').appendChild(sect).appendChild(division).appendChild(card)
                division.insertAdjacentHTML("beforebegin", `<div class="card">
                        <time datetime="YYYY">2022</time>
                        <time datetime="MM">${monthsThisYear.name}</time>
                        <time datetime="DD">${i}</time>
                        </div>`)
        
            if (months.days <= 28) {
                
                for (let i = 1; i <= 28; i++) {
                    
                division.insertAdjacentHTML("beforebegin", `<div class="card">
                        <time datetime="YYYY">2022</time>
                        <time datetime="MM">${monthsThisYear.name}</time>
                        <time datetime="DD">${i}</time>
                        </div>`)
                }
                
            }            
        }
    }


            
      
                console.log(monthsThisYear) 
    
}
window.addEventListener("load", loadEvent)