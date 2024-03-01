const locationSearch = document.querySelector("#searchLocation");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  if (locationSearch.value != "") {
    const url = "https://api.weatherapi.com/v1/current.json?key=";
    const key = "5b96b232abd3405ab2190137242302";

    const locationQuery = url + key + "&q=" + locationSearch.value;
    getWeather(locationQuery);
  }
});

async function getWeather(locationQuery) {
  console.log(locationQuery);
  const response = await fetch(locationQuery, { mode: "cors" });
  const data = await response.json();
  console.log(data);
  getInformation(data);
}

function getInformation(data) {
  //current
  const currentClouds = data.current.cloud;
  console.log(currentClouds);

  const conditionText = data.current.condition.text;
  console.log(conditionText);

  const humidity = data.current.condition.humidity;
  console.log(humidity);

  const temp_c = data.current.temp_c;
  console.log(temp_c);

  const temp_f = data.current.temp_f;
  console.log(temp_f);

  const feelslike_c = data.current.feelslike_c;
  console.log(feelslike_c);

  const feelslike_f = data.current.feelslike_f;
  console.log(feelslike_f);

  const last_updated = data.current.last_updated;
  console.log(last_updated);

  //location
  const country = data.location.country;
  console.log(country);

  const localtime = data.location.localtime;
  console.log(localtime);

  const name = data.location.name;
  console.log(name);

  const region = data.location.region;
  console.log(region);

  writeToDom(country, localtime, name, region);
}

const country = document.querySelector("#locationCountry");
const localtime = document.querySelector("#localtime");
const localname = document.querySelector("#localName");
const localRegion = document.querySelector("#localRegion");
const condition = document.querySelector("#condition");
const humidity = document.querySelector("#humidity");
const temp = document.querySelector("#temp");
const feelslike = document.querySelector("#feelslike");
const last_updated = document.querySelector("#updated");

function writeToDom(
  countryDom,
  localtimeDom,
  nameDom,
  regionDom,
  conditionDom,
  humidityDom,
  temp_cDom,
  temp_fDom,
  feelslike_cDom,
  feelslike_fDom,
  last_updatedDom
) {
  country.textContent = countryDom;
  localtime.textContent = localtimeDom;
  localname.textContent = nameDom;
  localRegion.textContent = regionDom;
  condition.textContent = conditionDom;
  humidity.textContent = humidityDom.toString();
  temp.textContent = temp_cDom.toString();
  feelslike.textContent = feelslike_cDom.toString();
  last_updated.textContent = last_updatedDom.toString();
}

/* {location: {…}, current: {…}}
current
: 
cloud
: 
50
condition
: 
code
: 
1003
icon
: 
"//cdn.weatherapi.com/weather/64x64/day/116.png"
text
: 
"Partly cloudy"
[[Prototype]]
: 
Object
feelslike_c
: 
9.5
feelslike_f
: 
49.2
gust_kph
: 
16
gust_mph
: 
10
humidity
: 
71
is_day
: 
1
last_updated
: 
"2024-03-01 11:30"
last_updated_epoch
: 
1709289000
precip_in
: 
0
precip_mm
: 
0
pressure_in
: 
29.74
pressure_mb
: 
1007
temp_c
: 
11
temp_f
: 
51.8
uv
: 
2
vis_km
: 
10
vis_miles
: 
6
wind_degree
: 
200
wind_dir
: 
"SSW"
wind_kph
: 
15.1
wind_mph
: 
9.4
[[Prototype]]
: 
Object
location
: 
country
: 
"Germany"
lat
: 
49.42
localtime
: 
"2024-03-01 11:45"
localtime_epoch
: 
1709289933
lon
: 
8.7
name
: 
"Heidelberg"
region
: 
"Baden-Wurttemberg"
tz_id
: 
"Europe/Berlin" */
