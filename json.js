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

     const carJson = JSON.stringify(ourCars)
     console.log(carJson)

     const carParsed = JSON.parse(carJson)

     console.log(carParsed)