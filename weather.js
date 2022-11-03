// const request = new XMLHttpRequest()
// request.open("GET","https://restcountries.com/v3.1/all")
// request.send(null)
// request.onload = function() {
//     const response = JSON.parse(request.responseText)
//     console.log(typeof response)
//     response.slice(0,5).forEach((country)=>{
//         const [lat,lang] = country.latlang
//         console.log(lat,lang)
//     })
    
// }

const API_key = "39b4c9d6ea9e745d27d8d5a3ecbf04f4";
fetch("https://restcountries.com/v3.1/all")
.then((value)=>{
    return value.json();
})
.then((countries)=>{
    //console.log(countries)
    countries.slice(0,5).forEach((obj)=>{
        // console.log(obj.latlng)
        const [lat,lng] = obj.latlng
        //fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${API_key}`)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`)
        .then((value)=>{
            //console.log(value)
            return value.json()
        })
        .then((weather)=>{
            console.log(weather)
        })
    })
})