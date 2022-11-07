const WeatherForm = document.getElementById("cityName") 
const weatherByDay = [[],[], [], [],]
const container = document.querySelector('.container')

//always start by the fetch event if you don't know how to do it
//fetch it's like call someone with the phone 
const getWeather = (cityName) =>{
    fetch("api.openweathermap.org/data/2.5/forecast?lat=50.8465573&lon=4.3517103&appid=2f18dd87e2e6152f8d814353efa9564a")
     //put your Api key
    .then(response => response.json())//json = Javascript
    .then((data) =>{
    
        console.log(data[0].lat, data[0].lon) 
        fetch(    fetch("api.openweathermap.org/data/2.5/forecast?lat=50.8465573&lon=4.3517103&appid=2f18dd87e2e6152f8d814353efa9564a")
        .then(response => response.json()
        .then((data) => {
            let i=0
            let c =0
            
            data.list.forEach((weatherEntry) => {
                if(i<8){
                weatherByDay[0].push(weatherEntry)

                }else{
                    weatherByDay[0].push(weatherEntry)

                    c++
                    i=0
                }

                i++;

            });
        console.log(weatherByDay)
       
        weatherByDay.forEach((day) => {
            let d = document.createElement('div')
            let title = document.createElement('h1')
            title.innerText = day[0].dt_txt
            container.append(d)
            day.forEach((temp)=> {
                let desc = document.createElement('p')
                p.innerText= temp.main.temp
                d.append(desc)

            })
        })

    })    
        ))   

        
        // My API key=2f18dd87e2e6152f8d814353efa9564a

    })
}

//API key = It's a authentification

WeatherForm.addEventListener('submit' , (event) => {
    event.preventDefault()
    let formData = Object.fromEntries(new FormData(WeatherForm));
    getWeather(formData.city)
})
 //http://api.openweathermap.org/geo/1.0/direct?q=${cityName}
