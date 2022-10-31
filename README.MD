
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

## Spis treści
- [Opis](#Opis)
- [Jak działa aplikacja](#Jak-działa-aplikacja)
  - [Zrzuty ekranu](#Zrzuty-ekranu)
- [Użyte technologie](#Uzyte-technologie)


## Opis

To mój pierwszy samodzielny projekt aplikacji pogodowej z wykorzystaniem API,

This is my first independent more advanced API project.  
 It is a Weather App build
 using HTML, CSS, JavaScript and API.

Pozwala na wyświetlanie pogody na najbliższe 24 godziny dla szukanego miasta, wraz z opisem a
 także czas lokalny i ikone symbolizująca pogode.

## Jak działa aplikacja

 Jeśli pole z nazwą miasta pozostanie puste pokaże się ostrzeżenie o konieczności 
 uzupełnieniu pola. Geocoding API znajdzie najbardziej pasującą nazwę miasta. Jeśli takiej
 nie znajdzie pokaże się komunikat o nie istniejącym mieście.
 Jeśli Geocoding API znajdzie pasującą nazwę miasta w odpowiedzi otrzymamy współrzędne
najbliższej stacji pogodowej która wypisywana poniżej nazwy miasta którego szukaliśmy,
 następne współrzędne przekazywane są do kolejnego API "Currrent Weather API" którego zadaniem 
 jest pobrać dane o aktualnej pogodzie w wyszukiwanym mieście. Nazwa miasta, temperatura i 
 opis pogody zostaje zaktualizowany.
 Współrzedne miasta pobrane z Geocoding API zostają równiez przekazane do 
 "Hourly Forecast 4 days API"
 które pozwala pobrać dane pogode na kolejne 4 dni w odstępie czasowym co 3 h.
 Pobrane zostają najbliższe 24 godziny, temperatura na każdą godzine zostaję zaktualizowana.
 Dzieki dodatkowym funkcjom ikona pogody również jest przypisywana do każdej godziny wraz 
 ze słownym opisem dnia tygodnia.  
 Ponadto, w zależności od pory dnia zmieniany jest odcień tła.  
 Wypróbuj na różnych lokalizacjach.

 ### Zrzuty ekranu

![Widok małych ekranów - 320px szerokości](/screenshots/320px-width%20view.png)
![Widok małych ekranów - 576px szerokości](/screenshots/576px-width%20view.png)
![Widok ekranów komputera](/screenshots/Desktop-view.png)

## Użyte technologie

- Semantyczne tagi HTML
- CSS
- Flexbox
- Podejście "Mobile-first"
- JavaScript
- Current Weather Data API
- Hourly Forecast 4 days API
- Geocoding API