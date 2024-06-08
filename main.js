
//selector variable
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
apik = "be7be78e0dc888b1f3ecefacdfc0fc57"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
} 

//fetch
    btn.addEventListener('click', async ()=>{

        const res=  await fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik);
        const result =   await res.json() //.then(res => res.json())
        console.log(result.name);
         /*.then(data => console.log(data))
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })*/
      //  .catch(err => alert('You entered Wrong city name'))
    })

