const axios = require('axios')

//getPeople

async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')
    return data
  }


//getWork: download work.json

async function getWork(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json')
    return data
  }


//Function 1: listEmployees()

async function listEmployees() {
    const people = await getPeople()
    const work = await getWork()   
    for (x in work) { 
        for(i=0; i<work[x].employees.length; i++){
            for (y in people){
                if(work[x].employees[i] == people[y].id){
                    let Obj = {}
                    Obj.first_name = people[y].first_name
                    Obj.last_name = people[y].last_name
                    work[x].employees.splice(i,1,Obj) 
                }
            }
        }
    }
    let Arr=[]
    for (let x in work) { 
        let newObject = {}
        newObject.company_name = work[x].company_name
        newObject.employees = JSON.stringify(work[x].employees)
        Arr.push(newObject)   
    }
    return Arr
}


//Function 2: fourOneOne(phoneNumber)

async function fourOneOne(phoneNumber) {
    if (phoneNumber == undefined ) throw 'Error: undefined'
    if (typeof phoneNumber !== 'string') 'Error: not proper type (string)'
    let phoneNumberFormat = /^(\d{3}-\d{3}-\d{4})$/
    if (phoneNumberFormat.test(phoneNumber) !== true) throw 'Error: Phone number not same format'
    const work = await getWork() 
    let obj = {}
    for (let x in work){
        if (phoneNumber == work[x].company_phone ){
            obj.company_name = work[x].company_name
            obj.company_address = work[x].company_address
            
        } 
    }
    if (Object.keys(obj).length === 0)  throw 'Error: nothing exists for that phone number'
    return obj
}


//Function 3: whereDoTheyWork(ssn)

async function whereDoTheyWork(ssn) {
    if (ssn == undefined) throw 'Error: parameter does not exist'
    if (typeof ssn !== 'string') throw 'Error: not proper type (string)'
    let ssnFormat = /^(\d{3}-\d{2}-\d{4})$/
    if (ssnFormat.test(ssn) !== true) throw 'Error: ssn not same format'
    const people = await getPeople()
    const work = await getWork()
    let fullName = ""
    let id = 0
    for (x in people) {
        if (people[x].ssn == ssn) {
            fullName = people[x].first_name + " " + people[x].last_name
            id = people[x].id
        }
    }
    let companyName = ""
    for (y in work) {
        for (let i = 0; i < work[y].employees.length; i++) {
            if (work[y].employees[i] == id) {
                companyName = work[y].company_name
            }
        }
    }
    let result = fullName + " works at " + companyName
    return result
    
}


module.exports = {
    getWork, listEmployees, fourOneOne, whereDoTheyWork
}