"use strict"

//Term Project Phase 2 - W06
//Data Topic: As my daily time playing The Sims 4 increases my stress decreases. One other factor that could impact my stress is the temperature of the day.

let simsGamingObservations = [

//-----------------------January----------------------------//

  {
    date: "2026-01-24",
    playedSims: false, // Boolean: True if I played that day, False if I not played in that day
    minutesPlayed: 0, // Number: Minutes spent playing The Sims4
    temperatureC: -1, // Number: Daily temperature in Celsius
    timeOfDay: "none", // String: Moment of the day 
    stressLevelBefore: 4, // Daily strees level Scale: 0 (relaxed) 1 (Calm) 2(Uneasy) 3(Tense) 4(Stressed) to 5 (very stressed)
    stressLevelAfter: 4
  }, // observation for January 24
  {
    date: "2026-01-25",
    playedSims: false,
    minutesPlayed: 0,
    temperatureC: 5,
    timeOfDay: "none",
    stressLevelBefore: 5,
    stressLevelAfter: 5
  }, // observation for January 25
  {
    date: "2026-01-26",
    playedSims: true,
    minutesPlayed: 30,
    temperatureC: 3,
    timeOfDay: "Afternoon",
    stressLevelBefore: 3,
    stressLevelAfter: 2
  }, // observation for January 26
  {
    date: "2026-01-27",
    playedSims: false,
    minutesPlayed: 0,
    temperatureC: 5,
    timeOfDay: "none",
    stressLevelBefore: 1,
    stressLevelAfter: 1
  }, // observation for January 27
  {
    date: "2026-01-28",
    playedSims: true,
    minutesPlayed: 30,
    temperatureC: 6,
    timeOfDay: "Afternoon",
    stressLevelBefore: 3,
    stressLevelAfter: 0
  }, // observation for January 28
  {
    date: "2026-01-29",
    playedSims: true,
    minutesPlayed: 30,
    temperatureC: 9,
    timeOfDay: "Evening",
    stressLevelBefore: 4,
    stressLevelAfter: 3
  }, // observation for January 29
  {
    date: "2026-01-30",
    playedSims: true,
    minutesPlayed: 60,
    temperatureC: 9,
    timeOfDay: "Evening",
    stressLevelBefore: 3,
    stressLevelAfter: 1
  }, // observation for January 30
  {
    date: "2026-01-31",
    playedSims: true,
    minutesPlayed: 30,
    temperatureC: 12,
    timeOfDay: "Evening",
    stressLevelBefore: 4,
    stressLevelAfter: 3
  }, // observation for January 31

  //-----------------------February----------------------------//

  {
    date: "2026-02-01",
    playedSims: true,
    minutesPlayed: 42,
    temperatureC: 8,
    timeOfDay: "Evening",
    stressLevelBefore: 5,
    stressLevelAfter: 3
  }, // observation for February 1
  {
    date: "2026-02-02",
    playedSims: true,
    minutesPlayed: 30,
    temperatureC: 9,
    timeOfDay: "Afternoon",
    stressLevelBefore: 3,
    stressLevelAfter: 1
  }, // observation for February 2
  {
    date: "2026-02-03",
    playedSims: true,
    minutesPlayed: 40,
    temperatureC: 11,
    timeOfDay: "Evening",
    stressLevelBefore: 2,
    stressLevelAfter: 1
  }, // observation for February 3
  {
    date: "2026-02-04",
    playedSims: false,
    minutesPlayed: 0,
    temperatureC: 16,
    timeOfDay: "none",
    stressLevelBefore: 0,
    stressLevelAfter: 0
  }, // observation for February 4
  {
    date: "2026-02-05",
    playedSims: true,
    minutesPlayed: 50,
    temperatureC: 14,
    timeOfDay: "Evening",
    stressLevelBefore: 1,
    stressLevelAfter: 0
  }, // observation for February 5
  {
    date: "2026-02-06",
    playedSims: true,
    minutesPlayed: 40,
    temperatureC: 15,
    timeOfDay: "Evening",
    stressLevelBefore: 2,
    stressLevelAfter: 0
  }, // observation for February 6
  {
    date: "2026-02-07",
    playedSims: true,
    minutesPlayed: 30,
    temperatureC: 11,
    timeOfDay: "Afternoon",
    stressLevelBefore: 1,
    stressLevelAfter: 0
  }, // observation for February 7
  {
    date: "2026-02-08",
    playedSims: true,
    minutesPlayed: 30,
    temperatureC: 10,
    timeOfDay: "Afternoon",
    stressLevelBefore: 2,
    stressLevelAfter: 1
  }, // observation for February 8
  {
    date: "2026-02-09",
    playedSims: true,
    minutesPlayed: 45,
    temperatureC: 7,
    timeOfDay: "Evening",
    stressLevelBefore: 3,
    stressLevelAfter: 2
  }, // observation for February 9
  {
    date: "2026-02-10",
    playedSims: true,
    minutesPlayed: 32,
    temperatureC: 12,
    timeOfDay: "Evening",
    stressLevelBefore: 1,
    stressLevelAfter: 0
  }, // observation for February 10
  {
    date: "2026-02-11",
    playedSims: true,
    minutesPlayed: 30,
    temperatureC: 9,
    timeOfDay: "Evening",
    stressLevelBefore: 3,
    stressLevelAfter: 1
  }, // observation for February 11
  {
    date: "2026-02-12",
    playedSims: false,
    minutesPlayed: 0,
    temperatureC: 8,
    timeOfDay: "none",
    stressLevelBefore: 3,
    stressLevelAfter: 3
  }, // observation for February 12
  {
    date: "2026-02-13",
    playedSims: true,
    minutesPlayed: 36,
    temperatureC: 8,
    timeOfDay: "Afternoon",
    stressLevelBefore: 2,
    stressLevelAfter: 0
  } // observation for February 13
];// list of daily gaming, temperature and stress observations

//console.log(JSON.stringify(simsGamingObservations));
showData(simsGamingObservations);