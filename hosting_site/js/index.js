let retVal = (index) => {
    return index * 2
}

// this is a comment

let Person = function (name, year, place){
    this.name = name
    this.year = year
    this.place = place
}

Person.prototype.age = function() {
    return 2020 - this.year
}

let person = new Person('Max', 1998, 'USA')

console.log(person)
console.log(retVal(2))
console.log(person.age())

