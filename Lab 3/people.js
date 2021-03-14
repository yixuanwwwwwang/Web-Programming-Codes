const axios = require('axios')

//getPeople: download people.js
async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')
    return data
  }


// Function 1: getPersonByID(id)
async function getPersonByID(id) {
    if (id == undefined) throw 'Error: undefined'
    if (typeof id !== 'number') throw 'Error: ID not a number'
    const people = await getPeople()
    if (id > people.length) throw 'Error: out of bounds'
    for (let x in people) {
        
        if (people[x].id == id) {
            return people[x]}
    }
}


// Function 2: howManyPerState(stateAbbrv)
async function howManyPerState(stateAbbrv) {
    if (stateAbbrv == undefined) throw 'Error: undefined' 
    if (typeof stateAbbrv !== 'string') throw 'Error: not proper type (string)'
    const people = await getPeople()
    let count = 0
    for (let x in people) {
    
        if (people[x].address.state === stateAbbrv) {
            count++
        }
    }
    if (count == 0) throw 'Error: no people'
    return count
}


// Function 3: personByAge(index)
async function personByAge(index) {
    if (index == undefined) throw 'Error: undefined' 
    if (typeof index !== 'number') throw 'Error: not a number'
    const people = await getPeople()
    let DobArray = []
    let today = new Date()
    for (let x in people) {
        let dob = people[x].date_of_birth.replace(/[^\w\s]|_/g, "")
        let year = dob.substr(4,4)
        let month = dob.substr(0,2)
        let day = dob.substr(2,2)
        let newDOB = year.concat(month,day)
        let age = today.getFullYear() - year 
        if (today.getMonth()+1 < month || (today.getMonth()+1 == month && today.getDate() < day)) {
            age = age -1
        }
        people[x].age = age
        people[x].date = newDOB
        DobArray.push(newDOB)
    }
    DobArray.sort(function(a,b){
        return a-b
    })
    let newArray = {}
    for (let y in people) {
        if (people[y].date == DobArray[index]) {
            newArray.first_name = people[y].first_name
            newArray.last_name = people[y].last_name
            newArray.date_of_birth = people[y].date_of_birth
            newArray.age = people[y].age
        }
    }
    return newArray       
}


// Function 4: peopleMetrics()
async function peopleMetrics() {
    const people = await getPeople()
    let fullName = []
    for (let x in people) {
        fullName.push(people[x].first_name.concat(people[x].last_name))
    }
    let totalLetters = 0
    let totalVowels = 0
    let totalConsonants = 0
    const Vowels = "aeoiu";
    let allName = ""
    for (let i=0; i<fullName.length;i++) {
        allName = allName+fullName[i]
    }
    for (let y of allName.toLowerCase()) {
        if (y>='a' && y<='z'){
            totalLetters++
        } 
        if (Vowels.includes(y)) {
            totalVowels++
        }
    }
    totalConsonants = totalLetters - totalVowels
    let longestLength = 0
    let longestName = ""
    let shortestLength = fullName[0].length
    let shortestName = fullName[0]
    for (let z of fullName) {
        if (z.length > longestLength) {
            longestLength = z.length
            longestName = z
        }
    }
    for (let s of fullName) {
        if (s.length < shortestLength) {
            shortestLength = s.length
            shortestName = s
        }
    }
    let city = []
    for (let x in people) {
        city.push(people[x].address.city)
    }
    let cityObject = {}
    for (let c of city) {
        if (cityObject.hasOwnProperty(c)) {
            cityObject[c] ++
        } else {
            cityObject[c] = 1
        }
    }
    let keys = Object.keys(cityObject)
    let max = cityObject[keys[0]]
    let mostRepeatingCity = ""
    for (i = 1; i < keys.length; i++) {
        let value = cityObject[keys[i]]
        if (value > max) {
            max = value
            mostRepeatingCity = keys[i]
        }
    }
    let ageArray = []
    let today = new Date()
    for (let x in people) {
        let dob = people[x].date_of_birth.replace(/[^\w\s]|_/g, "")
        let year = dob.substr(4,4)
        let month = dob.substr(0,2)
        let day = dob.substr(2,2)
        let newDOB = year.concat(month,day)
        let age = today.getFullYear() - year 
        if (today.getMonth()+1 < month || (today.getMonth()+1 == month && today.getDate() < day)) {
            age = age -1
        }
        ageArray.push(age)
    }
    let sumAge = ageArray[0]
    for (let i =1; i < ageArray.length; i++) {
        sumAge = sumAge + ageArray[i]
    }
    let averageAge = sumAge / ageArray.length
    return {
        "totalLetters": totalLetters,
        "totalVowels": totalVowels,
        "totalConsonants": totalConsonants,
        "longestName": longestName,
        "shortestName": shortestName,
        "mostReapearingCity": mostRepeatingCity,
        "averageAge": averageAge
    }
    
}


module.exports = {
    getPeople, getPersonByID, howManyPerState, personByAge, peopleMetrics
}