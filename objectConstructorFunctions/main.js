//Create two homes with object literal notation
/* var home = {
    rooms: 4,
    apartment: false,
    color: 'brown',
    swimmingPool: true,
    state: 'WA',
    city: 'Seattle'
}

var home2 = {
    rooms: 2,
    apartment: true,
    color: 'white', 
    swimmingPool: false,
    state: 'CA',
    city: 'Sacramento'   
} */

//Create a home with the use of an object constructor function
function Home(rooms, apartment, color, swimmingPool, state, city) {
    this.rooms = rooms;
    this.apartment = apartment;
    this.color = color;
    this.swimmingPool = swimmingPool;
    this.state = state;
    this.city = city;
}

var home1 = new Home(3, false, 'blue', true, 'Atlanta', 'GA');

console.log(home1)

var home2 = new Home(10, false, 'white', true, 'CA', 'Los Angeles')

var home3 = new Home(2, true, 'pink', false, 'WA', 'Spokane')

var home4 = new Home(1, true, 'yellow', false, 'TX', 'San Antonio')

console.log(home2)
console.log(home3)
console.log(home4)

//Create a book with object literal notation
/* var book = {
    pages: 200,
    cover: true,
    author: 'Mindy Haskins'
}

console.log(book) */

function Book(cover, pages, author) {
    this.cover = cover;
    this.pages = pages;
    this.author = author;
}

var book1 = new Book(true, 150, 'Carl Lloyd Brutens')

var book2 = new Book(false, 5000, 'Robert Downy')

var book3 = new Book(true, 5, 'Carol Baskins')

var book4 = new Book(false, 100, 'Jennifer Mautice')

var book5 = new Book(true, 50, 'Marlyn Decklen')

console.log(book1)
console.log(book2)
console.log(book3)
console.log(book4)
console.log(book5)

