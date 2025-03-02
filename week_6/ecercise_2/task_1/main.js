/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here

const weeklyWeather = [
    { day: "Monday", temperature: 30, humidity: 60, condition: "Sunny" },
    { day: "Tuesday", temperature: 28, humidity: 65, condition: "Partly Cloudy"},
    { day: "Wednesday", temperature: 25, humidity: 70, condition: "Rainy" },
    { day: "Thursday", temperature: 27, humidity: 68, condition: "Rainy" },
    { day: "Friday", temperature: 29, humidity: 64, condition: "Sunny" },
    { day: "Saturday", temperature: 26, humidity: 72, condition: "Thunderstorms"},
    { day: "Sunday", temperature: 31, humidity: 58, condition: "Hot and Sunny" }
];

function weatherAllart(){
    for (const dayWeather of weeklyWeather){
        if(dayWeather.condition==='Rainy'){
            console.log(`${dayWeather.day} Take an umbrella!`)
        }
    }
}

weatherAllart()

