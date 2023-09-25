function createCar(make, fuelLevel, engineOn) {
  return {
    'Make' : make,
    'Fuel Level' : fuelLevel,
    'Engine Status' : engineOn,
    drive() {
      if (!this['Engine Status']) {
        this["Engine Status"] = true;
      }
    }
  };
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();

console.log(raceCar1);
/*
Make: Jaguar
Fuel Level: 0.4
Engine Status: off
*/