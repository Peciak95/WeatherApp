
# Weather App

## Table of contents
- [Describe](#Describe)
- [How it works](#How-it-works)
  - [Screenshots](#Screenshots)
- [Built with](#Built-with)

## Describe
This is my first independent more advanced API project.  
 It is a Weather App build using HTML, CSS, JavaScript and API.

It Allows you to display the weather for the next 24 hours for the city you are looking for, along with a description of a
 also local time and the weather icon.

 ## How it works.  
 If the field with the name of the city is left blank, a warning about necessity will appear.
 Geocoding API will find the most suitable city name. If such
 will not be found, a message about a city that does not exist will be displayed.  
 If the Geocoding API finds a matching city name, we will get coordinates in the response
 the nearest weather station listed below the name of the city we were looking for,
 next coordinates are transferred to the next API "Currrent Weather API" whose task
 is to retrieve data about the current weather in the city you are searching for.  
 City name, temperature and the weather description are updated.  
 The city coordinates downloaded from the Geocoding API are also passed to
 "Hourly Forecast 4 days API" which allows you to download weather data for the 
 next 4 days at intervals of 3 hours.
 The next 24 hours are downloaded and the temperature for the each hour is updated.  
 Thanks to additional functions, the weather icon is also assigned to each hour together
 with a verbal description of the weekday.  
 In addition, the shade of the background is changed depending on the time of day.  
 Try it on different locations

### Screenshots

![Small device view - 320px width](/screenshots/320px-width%20view.png)
![Small device view - 576px width](/screenshots/576px-width%20view.png)
![Desktop view](/screenshots/Desktop-view.png)

## Built with

- Semantic HTML markup
- CSS
- Flexbox
- Mobile-first workflow
- JavaScript
- Current Weather Data API
- Hourly Forecast 4 days API
- Geocoding API

# PL

# Aplikacja pogodowa

## Spis tre??ci
- [Opis](#Opis)
- [Jak dzia??a aplikacja](#Jak-dzia??a-aplikacja)
  - [Zrzuty ekranu](#Zrzuty-ekranu)
- [U??yte technologie](#Uzyte-technologie)


## Opis

To m??j pierwszy samodzielny projekt aplikacji pogodowej z wykorzystaniem API,

This is my first independent more advanced API project.  
 It is a Weather App build
 using HTML, CSS, JavaScript and API.

Pozwala na wy??wietlanie pogody na najbli??sze 24 godziny dla szukanego miasta, wraz z opisem a
 tak??e czas lokalny i ikone symbolizuj??ca pogode.

## Jak dzia??a aplikacja

 Je??li pole z nazw?? miasta pozostanie puste poka??e si?? ostrze??enie o konieczno??ci 
 uzupe??nieniu pola. Geocoding API znajdzie najbardziej pasuj??c?? nazw?? miasta. Je??li takiej
 nie znajdzie poka??e si?? komunikat o nie istniej??cym mie??cie.
 Je??li Geocoding API znajdzie pasuj??c?? nazw?? miasta w odpowiedzi otrzymamy wsp????rz??dne
najbli??szej stacji pogodowej kt??ra wypisywana poni??ej nazwy miasta kt??rego szukali??my,
 nast??pne wsp????rz??dne przekazywane s?? do kolejnego API "Currrent Weather API" kt??rego zadaniem 
 jest pobra?? dane o aktualnej pogodzie w wyszukiwanym mie??cie. Nazwa miasta, temperatura i 
 opis pogody zostaje zaktualizowany.
 Wsp????rzedne miasta pobrane z Geocoding API zostaj?? r??wniez przekazane do 
 "Hourly Forecast 4 days API"
 kt??re pozwala pobra?? dane pogode na kolejne 4 dni w odst??pie czasowym co 3 h.
 Pobrane zostaj?? najbli??sze 24 godziny, temperatura na ka??d?? godzine zostaj?? zaktualizowana.
 Dzieki dodatkowym funkcjom ikona pogody r??wnie?? jest przypisywana do ka??dej godziny wraz 
 ze s??ownym opisem dnia tygodnia.  
 Ponadto, w zale??no??ci od pory dnia zmieniany jest odcie?? t??a.  
 Wypr??buj na r????nych lokalizacjach.

 ### Zrzuty ekranu

![Widok ma??ych ekran??w - 320px szeroko??ci](/screenshots/320px-width%20view.png)
![Widok ma??ych ekran??w - 576px szeroko??ci](/screenshots/576px-width%20view.png)
![Widok ekran??w komputera](/screenshots/Desktop-view.png)

## U??yte technologie

- Semantyczne tagi HTML
- CSS
- Flexbox
- Podej??cie "Mobile-first"
- JavaScript
- Current Weather Data API
- Hourly Forecast 4 days API
- Geocoding API