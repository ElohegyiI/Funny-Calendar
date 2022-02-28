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

    for (const month of months) {

        let rootElement = document.getElementById('root')

        let sect = document.createElement('section')
        sect.setAttribute('id', month.name)
        document.getElementById('root').appendChild(sect)
        
        let division = document.createElement('div')
        division.className = 'cards'
        document.getElementById('root').appendChild(sect).appendChild(division)

        
        
        for (let i = 1; i <= month.days; i++) {
            
                division.insertAdjacentHTML("beforebegin", `<div class="card">
                        <time datetime="YYYY">2022</time><br>
                        <time datetime="MM">${month.name}</time><br>
                        <time datetime="DD">${i}</time>
                        </div>`)
        }
        /*if (months.days === 28) {
                
            for (let i = 1; i <= 28; i++) {
                    
            card.insertAdjacentHTML("beforebegin", `<div class="card">
                        <time datetime="YYYY">2022</time>
                        <time datetime="MM">${monthsThisYear.name}</time>
                        <time datetime="DD">${i}</time>
                        </div>`)
            
            } else { (months.days === 30) 
            
          
                for (let i = 1; i <= 30; i++) {

                    division.insertAdjacentHTML("beforebegin", `<div class="card">
                    <time datetime="YYYY">2022</time>
                    <time datetime="MM">${monthsThisYear.name}</time>
                    <time datetime="DD">${i}</time>
                    </div>`)  
                    
                }
            }
        }*/
                        
    } 
    
    
        
        let cardJan = document.querySelector('#January .card');
        
            cardJan.addEventListener('click', event => {
                cardJan.style.background = "yellow"
            });
    
        
        let cardFeb = document.querySelector('#February .card');

            cardFeb.addEventListener('click', event => {
                cardFeb.style.background = "#3f2908"
            });

        let cardMar = document.querySelector('#March');
            
            cardMar.addEventListener('click', event => {
                cardMar.style.background = "#24C6E3"
            });

        let cardApr = document.querySelector('#April');

            cardApr.addEventListener('click', event => {
                cardApr.style.background = "cornsilk"
            });
   
        let cardMay = document.querySelector('#May');

            cardMay.addEventListener('click', event => {
                cardMay.style.background = "#24C6E3"
            });        

        let cardJune = document.querySelector('#June .card');
            
            cardJune.addEventListener('click', event => {
            cardJune.style.background = "#626DE3";
             });

    /*const cardJune = document.querySelector("#June")

    function focusevent()
	{
	cardJune.document.getElementById("#June").style.background=" aqua";
	}*/
    
    /*let cardJuly = document.getElementById('#July')

    cardJuly.querySelector(".card").onmouseover = function() {mouseOver()};
    cardJuly.querySelector(".card").onmouseout = function() {mouseOut()};

    function mouseOver() {
        cardJuly.querySelector(".card").style.color = "yellow";
      }
      
      function mouseOut() {
        cardJuly.querySelector(".card").style.color = "black";
      }*/
     
      /*document.getElementById("demo").addEventListener("mouseover", mouseOver);
      document.getElementById("demo").addEventListener("mouseout", mouseOut);
      
      function mouseOver() {
        document.getElementById("demo").style.color = "red";
      }
      
      function mouseOut() {
        document.getElementById("demo").style.color = "black";
      }*/

    let monthJuly = document.querySelector('#July');
        monthJuly.addEventListener('click', event => {
        monthJuly.style.background = "pink";}

        );

    let cardJuly = document.querySelector('#July .card');
        cardJuly.addEventListener('click', event => {
        cardJuly.style.border = "2px solid #dd7280"}
        
        );


    let monthSept = document.querySelector('#September');
        monthSept.addEventListener('click', event => {
        monthSept.style.background = "pink"}
        
        );

    let monthNov = document.querySelector('#November .card');
        monthNov.addEventListener('click', event => {
        monthNov.style.color = "red"
        
        });


    let cardDec = document.querySelector('#December .card')    
        cardDec.addEventListener('click', event => {
        cardDec.style.border = "4px dotted #f081b5"
        });
    
      


        
        
        
         
    
}
window.addEventListener("load", loadEvent)