
const companies = [

    { name: 'Company One', category: 'finance', start: 1978, end: 2000 },
    { name: 'Company Two', category: 'retail', start: 1980, end: 2010 },
    { name: 'Company Three', category: 'auto', start: 1979, end: 2002 },
    { name: 'Company Four', category: 'technology', start: 1988, end: 2020},
    { name: 'Company Five', category: 'auto', start: 1998, end: 2001 },
    { name: 'Company Six', category: 'technology', start: 1999, end: 2015 },
    { name: 'Company Seven', category: 'finance', start: 1923, end: 2001 },
    { name: 'Company Eight', category: 'technology', start: 1945, end: 2022 }
];

const ages = [ 12, 34, 43, 67, 89, 51, 29, 79, 65, 23, 10 ]

/*for (let i = 0; i < companies.length; i++) {

        console.log(companies[i])
}*/


/*function canDrink(ages) {

    let result = [];
    
    let str = result.toString()

    for (let i = 0; i < ages.length; i++) {
        
        if(ages[i] >= 51 ) {

            result.push(ages[i])
            
        }
        
        
    }
    console.log(str)
    return str
}
canDrink(ages)*/

/*const testMap = companies.map(function(company) {

    return `${company.name} [${company.start} - ${company.end}]`

})*/



/*companies.forEach(function(company) {
    
    console.log(company.end)

});

ages.forEach(function(ages) {

    console.log(ages)
});*/



/*const eigthiesCompanies = companies.filter(company => (company.start >= 1980 && company.end < 2010))*/

/*function eigthiesCompanies(company) {

    let result = [];

    for (const comp of companies) {

        if(companies.start === 1988 && companies.end === 2020 ){

            result.push(comp)
            console.log(comp)
            
        }
        console.log(comp)
    }
    

}
eigthiesCompanies(companies)*/


/*function greet(word) {

    console.log(word)
    return 'Hello ' + word
}
greet('Ada')

function myLength(sentence) {

    let result = [];

    let sentenceLength = sentence.length

    result.push(sentenceLength)

    console.log(result)
}
myLength('A kurva anyját a Javascriptnek!22')

function myCase(words) {

    let x = [];

    let caseWords = words.toUpperCase()

    let result = words + '-' + caseWords

    x.push(result)

    console.log(x)
}
myCase('annamária')

function myTrim(words) {

    let result = [];

    let trimWords = words.trim()

    
    result.push(trimWords)
    console.log(result)
    
}
myTrim(' A kurva anyját neki! ')

function myReplace(words) {

    let replaceDate = words.replace(/-/g, '/')

    console.log(replaceDate)

}
myReplace('2020-03-16')

function onesDigit(n) {

    let x = n % 10
    
    console.log(x)

    return x
  }
  onesDigit(2674)*/

  /*function mySum() {

    let sum = 0;

    let numbersSum = 0;

    let result = [];

    for(let i = 0; i <= 10; i++) {
        
        sum = sum + i;
        
        result.push(sum)
    }
    console.log(result)
    
    
    /*for(let i = 0; i < result.length; i++) {
        
        let x = numbersSum += result[i]
        
        
        
        console.log(x)
        return x
    }*/

  


  /*function simplifyNumber(number) {

    

    if (number < 0) {

        return 'nulla'

    } else if (number > 10) {

        return 'sok'

    } else {

        return 'nem'
    }
    

    
    

  }
  simplifyNumber(11)*/

  function amplifyBs(sentence) {

      let result = sentence+'!'+sentence+'!!'+sentence+'!!!'+sentence+'!!!!'+sentence+'!!!!!'
      

      console.log(result)

        return result
  }
  amplifyBs('Éld át az élményt')