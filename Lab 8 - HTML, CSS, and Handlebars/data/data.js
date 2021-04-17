const axios = require('axios')

async function shows() {
    const { data } = await axios.get('http://api.tvmaze.com/shows')

    return data
}

async function getByID(id) {
    let nid = Number(id)
    if (nid == undefined || nid == null) throw 'Error: not valid id'
    if (nid < 1) throw 'Error: not valid id'
    if (typeof id !== 'string') throw 'Error: not valid id'
    
    const { data } = await axios.get('http://api.tvmaze.com/shows/'+id)
    if (data['id'] == nid) {
        return data}
        else throw 'Error: not found'
}

async function search(searchTerm) {
    if (!searchTerm) throw 'Error: no search term'
    const { data } = await axios.get('http://api.tvmaze.com/search/shows?q='+searchTerm)
    return data
}

module.exports = {shows,getByID, search}