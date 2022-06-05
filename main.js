const fun = async ()=>{
let country = document.getElementById('country').value;

let url = `http://api.weatherapi.com/v1/current.json?key=922a13e29dee467d931112334220506&q=${country}`;
let weatherInfo = document.getElementById('container');
let data = await fetch(url);
let jsonData = await data.json();
let = hi = jsonData.current;
let html = `
   <h3 class="text-center">Weather info of ${country}</h3>
<table class="table">
        <thead>
          <tr>
            <th scope="col" class="bg-light">feelslike_c</th>
            <th scope="col" class="bg-light">feelslike_f</th>
            <th scope="col" class="bg-light">gust_kph</th>
          </tr>
          <thead>
          <tbody>
            <tr>
              <td>${hi.feelslike_c}</td>
              <td>${hi.feelslike_f}</td>
              <td>${hi.gust_kph}</td>
            </tr>
          </tbody>
      </table>

      <table class="table">

        <thead>
          <tr>
            <th scope="col" class="bg-light">gust_mph</th>
            <th scope="col" class="bg-light">humidity</th>
            <th scope="col" class="bg-light">is_day</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>${hi.gust_mph}</td>
            <td>${hi.humidity}</td>
            <td>${hi.is_day}</td>
          </tr>
          </tr>
        </tbody>

      </table>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="bg-light">gust_kph</th>
            <th scope="col" class="bg-light">last_updated</th>
            <th scope="col" class="bg-light">pressure_in</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${hi.gust_kph}</td>
            <td>${hi.last_updated}</td>
            <td>${hi.pressure_in}</td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <tbody>
          <tr>
            <td>${hi.temp_c}</td>
            <td>${hi.temp_f}</td>
            <td>${hi.wind_degree}</td>
            <td>${hi.wind_kph}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th scope="col" class="bg-light">temp_c</th>
            <th scope="col" class="bg-light">temp_f</th>
            <th scope="col" class="bg-light">wind_degree</th>
            <th scope="col" class="bg-light">wind_kph</th>
          </tr>
        </thead>
      </table>`
weatherInfo.innerHTML = html;
country= "";
}
//fun();
