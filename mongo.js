const mongoose = require('mongoose')

if (!(process.argv.length=== 3 || process.argv.length === 5)) {
    console.log('incorrect parameters')
    process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.4g1fx.mongodb.net/persons-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const getPeople = () =>{
    
}

if (process.argv.length === 3) {
    console.log("starting fetch")
    Person.find({}).then(result => {
        console.log("phonebook:")
        result.forEach(person => {
          console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}
else if (process.argv.length===5) {
    const name = process.argv[3]
    const number = process.argv[4]

    const person = new Person({
        name: name,
        number: number
    })

    person.save().then(result => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
    })
}

