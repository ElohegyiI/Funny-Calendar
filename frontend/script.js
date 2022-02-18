function loadEvent() {

    let funCal = document.getElementById('root');

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

    for (const monthThisYear of months) {
    
        let thisYear = 2022;

        funCal.insertAdjacentHTML("beforeend", `<section id="${months.name}</section`)

        let section = document.getElementById(months.name);

        let monthName = months.name;

        if (months.days === 31) {
            for (let i = 0; i < 31; i++); {
                
                section.insertAdjacentHTML("beforeend", 
                `<div class="card">
                    <time datetime="YYYY">${thisYear}</time>
                    <time datetime="MM">${monthName}</time>
                    <time datetime="DD">${i+1}</time>
                 </div>`)
                
            } elseif (months.days === 28); { 
    
            for (let i = 0; i < 28; i++) {

                section.insertAdjacentHTML("beforeend", 
                `<div class="card">
                    <time datetime="YYYY">${year}<time>
                    <time datetime="MM">${monthName}</time>
                    <time datetime="DD">${i+1}<time>
                </div>`)
                }
            }
            } else (months.days === 30); {

            for (let i = 0; i < 30; i++); {
                section.insertAdjacentHTML("beforeend", 
                `<div class="card">
                    <time datetime="YYYY">${year}</time>
                    <time datetime="MM">${monthName}</time>
                    <time datetime="DD">${i+1}</time>
                </div>`) 
                }

        }
    }
}        



window.addEventListener('load', loadEvent);

