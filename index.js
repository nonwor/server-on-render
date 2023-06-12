const express = require('express')
const app = express()
const port = 3000

let countries = [ 
    { countryName: "United States", capital: "Washington, D.C.", population: 331000000, language: "English", currency: "United States Dollar ($)", img: "" }, 
    { countryName: "Canada", capital: "Ottawa", population: 37590000, language: "English, French", currency: "Canadian Dollar ($)", img: "" }, 
    { countryName: "Germany", capital: "Berlin", population: 83190556, language: "German", currency: "Euro (€)", img: "" }, 
    { countryName: "Japan", capital: "Tokyo", population: 126010000, language: "Japanese", currency: "Japanese Yen (¥)", img: "" }, 
    { countryName: "Brazil", capital: "Brasília", population: 211049527, language: "Portuguese", currency: "Brazilian Real (R$)", img: "" }, 
    { countryName: "Australia", capital: "Canberra", population: 25687041, language: "English", currency: "Australian Dollar ($)", img: "" }, 
    { countryName: "France", capital: "Paris", population: 67060000, language: "French", currency: "Euro (€)", img: "" }, { countryName: "China", capital: "Beijing", population: 1444216107, language: "Chinese", currency: "Renminbi (¥)", img: "" },
     { countryName: "India", capital: "New Delhi", population: 1393409038, language: "Hindi, English", currency: "Indian Rupee (₹)", img: "" }, { countryName: "Russia", capital: "Moscow", population: 145912025, language: "Russian", currency: "Russian Ruble (₽)", img: "" }, 
     { countryName: "Mexico", capital: "Mexico City", population: 126190788, language: "Spanish", currency: "Mexican Peso ($)", img: "" }, 
     { countryName: "United Kingdom", capital: "London", population: 66435600, language: "English", currency: "British Pound (£)", img: "" }, 
     { countryName: "South Africa", capital: "Pretoria, Cape Town, Bloemfontein", population: 58775022, language: "Zulu, Xhosa, Afrikaans, English", currency: "South African Rand (R)", img: "" }, 
     { countryName: "Saudi Arabia", capital: "Riyadh", population: 34813867, language: "Arabic", currency: "Saudi Riyal (ر.س)", img: "" }, 
     { countryName: "Argentina", capital: "Buenos Aires", population: 44938712, language: "Spanish", currency: "Argentine Peso ($)", img: "" } ]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/countries', (req, res) =>{
    let countriesResult = countries.map(item=>{
        console.log(item.countryName);
       return item.countryName
    })
    res.send(countriesResult)
})

app.get('/languages', (req, res)=>{
    
    let lang = countries.map(item=>{
        // console.log(item.language);
       return item.language
    })
    
    res.send(lang)
})

app.get('*/', (req, res) => {
    res.send('Sorry Wrong Route')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})