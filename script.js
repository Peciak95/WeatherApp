const shadow = document.querySelector('.shadow')
const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const error = document.querySelector('.error')

const localTime = document.querySelector('.local-time')
const cityName = document.querySelector('.city-name')
const station = document.querySelector('.weather-station')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')

const nextHoursArrow = document.querySelector('.next-hours')
const previousHoursArrow = document.querySelector('.previous-hours')

const weatherBars = document.querySelectorAll('.weather-bar')
const hours = document.querySelectorAll('.hour')
const dayOfTheWeek = document.querySelectorAll('.week')
const weatherStatus = document.querySelectorAll('.status')
const hourlyTemperatures = document.querySelectorAll('.temp')

const GEO_LINK = 'http://api.openweathermap.org/geo/1.0/direct?q='
const GEO_LIMIT = '&limit='
const LIMIT = '5'
const APP_ID = '&appid='
const KEY = '8f5948430d801522c1b03848d2341850'
const API_LON = '&lon='

const WEATHER_API_LINK = 'https://api.openweathermap.org/data/2.5/weather?lat='
const UNITS = '&units=metric'

const HOURS_WEATHER_LINK = 'https://api.openweathermap.org/data/2.5/forecast?lat='
const TIME_STEP = '&cnt='
const TIME_STEP_NUMBER = 8 //number of weather bars

const myTimeZone = 3600

let hoursIndex = 0
const visibleBars = document.querySelectorAll('.active')
const visibleHoursCount = visibleBars.length
let step = hoursIndex + visibleHoursCount

let enable = false
let delay

const checkEmptyInput = () => {
	if (searchInput.value === '') {
		error.textContent = 'Fill in the empty field'
		error.style.visibility = 'visible'
	} else {
		error.style.visibility = 'hidden'
		getCityName()
	}
}

const getCityName = () => {
	const city = searchInput.value || 'Kraków'
	const GEO_URL = GEO_LINK + city + GEO_LIMIT + LIMIT + APP_ID + KEY
	axios
		.get(GEO_URL)
		.then(res => {
			const lat = res.data[0].lat
			const lon = res.data[0].lon
			cityName.textContent = res.data[0].name
			getWeather(lat, lon)
		})
		.catch(() => {
			error.textContent = "City doesn't exist"
			error.style.display = 'inline'
		})
	searchInput.value = ''
}
const getWeather = (lat, lon) => {
	const WEATHER_API_URL = WEATHER_API_LINK + lat + API_LON + lon + APP_ID + KEY + UNITS
	axios.get(WEATHER_API_URL).then(res => {
		res.json
		const stationName = res.data.name
		const temp = res.data.main.temp
		const weather = Object.assign({}, ...res.data.weather)
		station.textContent = stationName
		temperature.textContent = Math.floor(temp) + '℃'
		description.textContent = weather.description
		getHoursWeather(lat, lon)
	})
}

const getHoursWeather = (lat, lon) => {
	const HOURS_API_URL = HOURS_WEATHER_LINK + lat + API_LON + lon + TIME_STEP + TIME_STEP_NUMBER + APP_ID + KEY + UNITS
	axios.get(HOURS_API_URL).then(res => {
		const localTimeZone = res.data.city.timezone
		const hourDifference = (localTimeZone - myTimeZone) / 3600
		const minutesDifference = (localTimeZone - myTimeZone) / 60
		for (let i = 0; i < TIME_STEP_NUMBER; i++) {
			const hour = res.data.list[i].dt
			const date = new Date(hour * 1000)
			const weatherIcon = Object.assign({}, res.data.list[i].weather[0])
			const icon = weatherIcon.icon
			const temp = Math.floor(res.data.list[i].main.temp)

			const weekDay = addHoursToDate(date, hourDifference).getDay()

			hours[i].textContent = addHoursToDate(date, hourDifference).getHours() + ':00'
			weatherStatus[i].setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
			hourlyTemperatures[i].textContent = `${temp}℃`
			function addHoursToDate(date, hours) {
				return new Date(new Date(date).setHours(date.getHours() + hours))
			}

			function addMinutesToDate(date, minutes) {
				return new Date(new Date(date).setMinutes(date.getMinutes() + minutes))
			}

			if (i === 0) {
				const now = new Date()
				const shadowParameter = addHoursToDate(now, hourDifference).getHours()
				changeShade(shadowParameter)
				if (addMinutesToDate(now, minutesDifference).getMinutes() < 10) {
					localTime.textContent =
						addHoursToDate(now, hourDifference).getHours() +
						':0' +
						addMinutesToDate(now, minutesDifference).getMinutes()
				} else {
					localTime.textContent =
						addHoursToDate(now, hourDifference).getHours() + ':' + addMinutesToDate(now, minutesDifference).getMinutes()
				}
			}

			switch (weekDay) {
				case 0:
					dayOfTheWeek[i].textContent = 'Sun'
					break
				case 1:
					dayOfTheWeek[i].textContent = 'Mon'
					break
				case 2:
					dayOfTheWeek[i].textContent = 'Tue'
					break
				case 3:
					dayOfTheWeek[i].textContent = 'Wed'
					break
				case 4:
					dayOfTheWeek[i].textContent = 'Thu'
					break
				case 5:
					dayOfTheWeek[i].textContent = 'Fri'
					break
				case 6:
					dayOfTheWeek[i].textContent = 'Sat'
					break

				default:
					dayOfTheWeek[i].textContent = 'weekDay'
					break
			}
		}
	})
}
const changeShade = shadowParameter => {
	console.log(shadowParameter);
	if (shadowParameter >= 0 && shadowParameter < 3) {
		shadow.style.backgroundColor = `rgba(0, 0, 0, 0.8)`} 
		else if (shadowParameter >= 3 && shadowParameter < 6){
		shadow.style.backgroundColor = `rgba(0, 0, 0, 0.64)`}
		else if (shadowParameter >= 6 && shadowParameter < 9){
		shadow.style.backgroundColor = `rgba(0, 0, 0, 0.48)`}
		else if (shadowParameter >= 9 && shadowParameter < 11){
		shadow.style.backgroundColor = `rgba(0, 0, 0, 0.32)`}
		else if (shadowParameter === 12){
		shadow.style.backgroundColor = `rgba(0, 0, 0, 0.16)`}
		else if (shadowParameter >= 13 && shadowParameter < 15){
		shadow.style.backgroundColor = `rgba(0, 0, 0, 0.32)`}
		else if (shadowParameter >= 15 && shadowParameter < 18){
		shadow.style.backgroundColor = `rgba(0, 0, 0, 0.48)`}
		else if (shadowParameter >= 18 && shadowParameter < 21){
		shadow.style.backgroundColor = `rgba(0, 0, 0, 0.64)`}
		else if (shadowParameter >= 21 && shadowParameter < 24){
		shadow.style.backgroundColor = `rgba(0, 0, 0, 0.8)`}
}

const handleNextHours = () => {
	if (hoursIndex === weatherBars.length - visibleHoursCount) {
		hoursIndex = weatherBars.length - visibleHoursCount
	} else {
		weatherBars[hoursIndex].classList.toggle('active')
		weatherBars[step].classList.toggle('active')
		hoursIndex++
		step++
		weatherBars.forEach(bar => {
			if (bar.classList.contains('active')) {
				bar.classList.add('move-left')
			} else {
				bar.classList.remove('move-left')
			}
		})
	}
	enable = false
	delay = setInterval(letItGo, 1000)
}
const handlePreviousHours = () => {
	if (hoursIndex === 0) {
		hoursIndex = 0
	} else {
		hoursIndex--
		step--
		weatherBars[hoursIndex].classList.toggle('active')
		weatherBars[step].classList.toggle('active')
		weatherBars.forEach(bar => {
			if (bar.classList.contains('active')) {
				bar.classList.add('move-right')
			} else {
				bar.classList.remove('move-right')
			}
		})
	}
	enable = false
	delay = setInterval(letItGo, 1000)
}

const letItGo = () => {
	weatherBars.forEach(bar => {
		bar.classList.remove('move-left')
		bar.classList.remove('move-right')
	})
	enable = true
	clearInterval(delay)
}
setTimeout(letItGo, 1000)

nextHoursArrow.addEventListener('click', () => {
	if (enable === true) {
		handleNextHours()
	} else {
		return
	}
})
previousHoursArrow.addEventListener('click', () => {
	if (enable === true) {
		handlePreviousHours()
	} else {
		return
	}
})

searchInput.addEventListener('keyup', e => {
	if (e.key === 'Enter') {
		checkEmptyInput()
	}
})
searchBtn.addEventListener('click', checkEmptyInput)

getCityName()
