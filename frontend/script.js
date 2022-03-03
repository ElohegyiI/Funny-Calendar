

function Country(name, short, population, flag, continent) {

    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;

}  

//menubutton

const menuButton = _ => {
    return`
<button id="menuBtn">
    <svg width: "40" heigth: "40">
        <rect width="20" height="2"/>
        <rect width="20" height="2"/>
        <rect width="20" height="2"/>
    </svg> 
</button>
`;
}

/*component header*/

const header = (logo, button) => {

return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>
`
}

    //country card generator

    const countryCard = (country) => {
        
        return `
        <div class="card">
            <h2>${country.name}</h2>
            <h3>${country.short}</h3>
            <p>${country.continent}</p>
            <img src="${country.flag}"</p>
            <p>${country.population}</p>
        </div>
        `
    }

    //country cards container

    const countryCards = (contentHTML) => {

        return`
            <section class="country-cards>${contentHTML}</section>
        `
    }

    

    const loadEvent = async _ => {

    //Get data

    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    //console.log(countryArr[0])

    //Process data

    let countries = countryArr.map(function(country) {

        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])

    })
    //console.log(countries)

    //add header HTML

    const rootElement = document.getElementById('root')
    rootElement.insertAdjacentHTML('beforeend', header("countries", menuButton))

    //create country HTML

    let countryHTML = ""

        countries.forEach(country => {

        countryHTML += countryCard(country) 

    });

    //add cards HTML 

    root.insertAdjacentHTML('beforeend', countryCards(countryHTML))

    


    const menuBtn = document.getElementById('menuBtn')
    menuBtn.addEventListener('click', (event) => {
    event.target.classList.toggle('clicked')

    });


}
window.addEventListener('load', loadEvent) 
