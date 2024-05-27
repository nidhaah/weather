

weatherSearch = async() =>{
    let cityName = city.value
    console.log(cityName);
    let upper = cityName.toUpperCase()
    if(cityName){
        const time = new Date()

        const hour = time.getHours()
        console.log(hour);
    
        const min = time.getMinutes()
        console.log(min)
    
        const sec = time.getSeconds()
        console.log(sec)
    
        const date = time.getDate()
        console.log(date);
    
        const monthnum = time.getMonth()
        console.log(monthnum);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const monthname = months[monthnum];
        console.log(monthname);
    
        const year = time.getFullYear()
        console.log(year);
    
        const daynum = time.getDay()
        const days = ['Sunday','Monday','Tuesday','Wedesnday','Thrusday','Friday','Saturday'];
        const day = days[daynum];
        console.log(day);
        
    
        setTimeout(()=>{
            getTime()
        },1000)   
        const cityRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b8defdc22990505723b853b84db56ab4`)
        cityRes.json().then((data)=>{
            console.log(data);
            //icon and description
            for(let item in data.weather){
                var icon = data.weather[item].icon
                var desc = data.weather[item].description
            }
            console.log(icon);
            console.log(desc);

            if(data.weather[0].description == 'overcast clouds' ){
               icon = "icons/overcastclouds.png"
            }
            else if(data.weather[0].description == 'broken clouds'  || data.weather[0].description == 'few clouds' ){
              icon = "icons/brokenclouds.png"
            }
            else if(data.weather[0].description == "haze" || data.weather[0].description == "fog" || data.weather[0].description == "dust" || data.weather[0].description == "mist" || data.weather[0].description == "smoke" || data.weather[0].description == "tornado"){
              icon = "icons/haze.png"
            }
            else if(data.weather[0].description == "rain" || data.weather[0].description == "moderate rain" || data.weather[0].description == "very heavy rain" || data.weather[0].description == "shower rain" || data.weather[0].description == "light rain"){
              icon = "icons/rain.png"
            }
            else if(data.weather[0].description == "snow" || data.weather[0].description == "light snow" || data.weather[0].description == "heavy snow"){
              icon = "icons/snowfall.png"
            }
            else if(data.weather[0].description == "thunderstorm" || data.weather[0].description == "thunderstorm with light rain" || data.weather[0].description == "thunderstorm with heavy rain"){
              icon = "icons/thunder.png"
            }
            else if(data.weather[0].description == "drizzle"){
              icon = "icons/drizzle.png"
            }
            else if(data.weather[0].description == "clear sky"){
              icon = "icons/clearsky.png"
            }
            else if(data.weather[0].description == "scattered clouds"){
              icon = "icons/scatteredclouds.png"
            }



            //feels like 
            let feel = data.main.feels_like
            console.log(feel);
            let feelcel = Math.floor(feel - 273.15)
            console.log(feelcel);
           
            //country
            let country = data.sys.country
            console.log(country);
           
            //humidity
            let humidity = data.main.humidity
            console.log(humidity);

            //pressure
            let pressure = data.main.pressure
            console.log(pressure);

            //wind speed
            let wspeed = data.wind.speed
            console.log(wspeed);

            //wind degree
            let wdeg = data.wind.deg
            console.log(wdeg);

            //sunrise
            let rise = data.sys.sunrise
            console.log(rise);

            //sunset
            let set = data.sys.sunset
            console.log(set);
            
            //temparature
            let temp = data.main.temp
            console.log(temp);
            let tempcel = Math.floor(temp - 273.15)
            console.log(tempcel);

            weatherResult.innerHTML = `<div class="card mb-3 mt-5 ms-5 me-2 p-3 " id="res" style="width: 90%;">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                 <ul>
                    <li>Country : ${country} </li><hr>
                    <li>Humidity : ${humidity}%</li><hr>
                    <li>Pressure : ${pressure}</li><hr>
                    <li>Wind speed: ${wspeed}Km/h</li><hr>
                    <li>Wind degree:${wdeg}</li><hr>
                    
                 </ul>
                </div>
              </div>
              <div class="col-md-4">
                <img id="iconimg" src="${icon}" class=" rounded mt-2" style:"width:25%;">
                <h2 class="card-title text-center mt-4 fw-bolder ">${upper}</h2>
                <h3 class="text-center ">${tempcel}°C</h3>
                <h3 class="text-center ">${desc}</h3>
                <h4 class="text-center">Feels like : ${feelcel}°C</h4>
                <p class="fw-bolder fs-5 text-center">${day} ${date} ${monthname} ${year} ${hour}:${min}:${sec} ${hour>=12?'PM':'AM'}</p>
              </div>
            </div>
          </div>`


        })
    }
    else{
        alert('enter a valid city name')
    }

}

