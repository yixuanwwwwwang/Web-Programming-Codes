const people = require("./people")
const work = require("./work")

async function main(){
    // People
    try{
        const peopledata = await people.getPeople()
        console.log (peopledata)
    }catch(e){
        console.log (e)
    }

    //1 Get Person by ID
    try{
        const peopledata = await people.getPersonByID(2)
        console.log (peopledata)
    }catch(e){
        console.log (e)
    }

    //2 How many people per state
    try{
        const peopledata = await people.howManyPerState('NY')
        console.log (peopledata)
    }catch(e){
        console.log (e)
    }

    //3 People by age
    try{
        const peopledata = await people.personByAge(43)
        console.log (peopledata)
    }catch(e){
        console.log (e)
    }

    // 4 Collect total letters, vowels, consonants; longest name, shortest name; most repeating city; average age
    try{
        const peopledata = await people.peopleMetrics()
        console.log (peopledata)
    }catch(e){
        console.log (e)
    }

    //work
    try{
        const workdata = await work.getWork()
        console.log (workdata)
    }catch(e){
        console.log (e)
    }

    // 1 list companies and employees
    try{
        const workdata = await work.listEmployees()
        console.log (workdata)
    }catch(e){
        console.log (e)
    }

    // 2 find phone number and return company name and address
    try{
        const workdata = await work.fourOneOne('240-144-7553')
        console.log (workdata)
    }catch(e){
        console.log (e)
    }

    //3 find ssn and return full name and name of the company they work for
    try{
        const workdata = await work.whereDoTheyWork('299-63-8866')
        console.log (workdata)
    }catch(e){
        console.log (e)
    }

}

//call main
main();