const cars = [{
  name: "Toyota",
  wheels: 4,
  doors: 4,
  isStarted: false,
  hp: 300,
},
{
  name: "Mersedes",
  wheels: 3,
  doors: 2,
  isStarted: false,
  hp: 320,
},
{
  name: "Audi",
  wheels: 6,
  doors: 1,
  isStarted: true,
  hp: 310,
}]

function searchCar(car) {
  for (const car of cars) {
    console.log(car.name)
  }
}

searchCar(cars)