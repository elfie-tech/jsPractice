// dot and bracket notation practice
var snowman = {
    isSnow: true,
    color: 'white',
    madeOfSnowballs: 3,
    'first name': 'Frosty'
};

snowman.isSnow = 'yes'
snowman.color = 'orange'
snowman.madeOfSnowballs = 8
snowman['first name'] = 'Jack Frost'

console.log(snowman.isSnow)
console.log(snowman.color)
console.log(snowman.madeOfSnowballs)
console.log(snowman['first name'])

var myHouse = {}

myHouse.color = 'brown'
myHouse.madeOfWood = true
myHouse.doors = 3
myHouse['first floor'] = '3 Bedrooms'
myHouse['second floor'] = '2 Bedrooms'
myHouse['third floor'] = 'Play Room'

console.log(myHouse)

//Example of building a house
var house = {}

house.doors = 4
house.bedrooms = 3
house.address = '421 S. Othello Street'
house.office = false

house['swimming pool'] = false
house['1stOwner'] = 'John Doe'
house['typeof'] = 'apartment'

console.log(house)