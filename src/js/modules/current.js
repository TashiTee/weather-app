import { getAnimatedIcon, toCelFah } from '../utils/utils';

let currentWeather;
let unit = "si";

// cache the DOM
const $currentIcon = document.querySelector(".current__icon");
const $currentSummary = document.querySelector(".current__summary");
const $tempNum = document.querySelector(".current__temp-num");
const $windSpeed = document.querySelector(".current__wind span");
const $humidity = document.querySelector(".current__humidity span");
const $precipitation = document.querySelector(".current__precipitation span");

export const setCurrentWeather = newWeather => {
  currentWeather = newWeather;
  render();
  console.log(currentWeather);

}

export const setCurrentUnit = newUnit => {
  unit = newUnit;
  render();
}

const whichTemp = weather => {
  if (weather.temperature) {
    return weather.temperature;
  }
  return Math.round((weather.temperatureHigh + weather.temperatureLow) / 2);
}

const render = _ => {
  $currentIcon.innerHTML = getAnimatedIcon(currentWeather.icon);
  $currentSummary.textContent = currentWeather.summary;
  $windSpeed.textContent = Math.round(currentWeather.windSpeed);
  $humidity.textContent = Math.round(currentWeather.humidity * 100);
  $precipitation.textContent = Math.round(currentWeather.precipProbability * 100)
  $tempNum.innerHTML = `${toCelFah(whichTemp(currentWeather), unit)}&#176;`
}








