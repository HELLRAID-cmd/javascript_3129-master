const cars = {
  wheels: 4,
  doors: 1,
  isStarted: false,
}

function createCar(...arr) {
  return {...cars, ...arr} // Сидел годал что не так, а надо было вместо const object =, сделать return)
}

console.log(createCar({name: "Haval", hp: 198}))
