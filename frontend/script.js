


const loadEvent = () => {

    const rootElement = document.getElementById('root')

    const division = document.createElement('div')
        division.className = 'form'
        document.getElementById('root').appendChild(division)


        const formHTML = () => { 
            return `
            <form>
            
            <input id="name1" name="input1" type="text"><br>
            
            <input id="name2" name="input2" type="text"><br>
            
            <input id="name3" name="input3" type="text"><br>
            <select name="animals" id="animals">
                <option value="cats5555">cats</option>
                <option value="both5555">Both</option>
                <option value="dogs">dogs</option>                
            </select>
            <button>Click</button>

            </form>`           

        }

        
        
        rootElement.insertAdjacentHTML('beforeend', formHTML())
          
        const form = rootElement.querySelector('form')


        const inputList = document.queryselectorAll('input')

        console.log(typeof inputList);
        console.log(Array.isArray(inputList));

        /*for (const input of inputList ) {

            input.addEventListener('input', function(event) {

                console.log(event.target.value)

            }
        } */

        Array.from(inputList).map(function(input) {
            input.addEventListener('input', function(event) {

            console.log(event.target.value);

        }) 
        
    });
        
        form.querySelector('select').addEventListener('input', function(event) {
            console.log(event.target);

        })

        form.addEventListener('submit', function(event) {
            event.preventDefault()
             console.log(event.target)
        })    

/*Fetch dátumokra, több képre*/

    const nasaApiKey = 'd8rG7d4dYIisXPSU8KBH17ipMYR7pPGj1tjRgNqD'
    const requestedDate = "2022.02.22"
    const apod = await fetch(".....${apiKey}....${requestedDate")

    const apodJson = await.apod.json() 
    console.log(apodJson.explanation)

    fetch(`
    https.....${apiKey}....${requestedDate}.then(
        function(apodResponse) {
            console.log(apodResponse)
            apodResponse.json(.then(
                function(apodResponseJson) {
                    console.log(apodResponseJson.explanation)
                }
            ))
        }
    )
    `)


}

window.addEventListener('load', loadEvent)