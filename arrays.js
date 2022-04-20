// let cars = ['ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford']

// console.log(cars[0])

// console.log(cars.length)


let ourCars = [
    {
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25533,
    color: "Grey"
    },
    { brand: 'Jeep',
    year: 2015,
    model: 'Cherokee',
    color: "Black",
    miles: 55000
     }]

     //console.log(ourCars[1].model)

     const {miles, year} = ourCars[0]

     let mileage = (miles / (2022 - year))

    

     const hiLo = (mileage < 10000) 
     ? ''
     :   'NOT';

     console.log(`This is ${hiLo} a low mileage car`)