const mongoCollections = require('../config/mongoCollections');
const movies = mongoCollections.movies;
let { ObjectId } = require('mongodb')


module.exports = {
    
    async create (title, plot, rating, runtime, genre, cast, info) {
        if (!title || !plot || !rating || !runtime || !genre || !cast || !info) throw 'Error: You must input valid values for a movie'
        if (typeof title !== 'string' || typeof plot !== 'string' || typeof rating !== 'string' || typeof runtime !== 'string' || typeof genre !== 'string' ) throw 'Error: title, plot, rating, runtime, genre are not strings'
        if (title.trim().length == 0 || plot.trim().length == 0 || rating.trim().length == 0 || runtime.trim().length == 0 || genre.trim().length == 0 ) throw 'Errors: inputs are empty strings'
        if (!Array.isArray(cast) || cast.length == 0) throw 'Error: cast error'
        for (i = 0; i < cast.length; i++) {
            if (typeof cast[i] !== 'string' || cast[i].trim().length == 0) throw 'Error: cast error'
        }
        if (typeof info !== 'object') throw 'Error: info not object'
        if (typeof info.director !== 'string' || info.director == undefined || info.director == null || info.director.trim().length == 0) throw 'Error: director error'
        let a = info.yearReleased.toString()
        if(a.length !== 4) throw 'Error: info.yearReleased error'
        if (typeof info.yearReleased !== 'number' || info.yearReleased == undefined || info.yearReleased == null) throw 'Error: info.yearReleased error'
        if (info.yearReleased < 1903 || info.yearReleased > 2026) throw 'Error: info.yearReleased error'

        const moviesCollection = await movies()
        
        let createMovies = {
            title:title,
            plot: plot, 
            rating: rating, 
            runtime: runtime, 
            genre: genre, 
            cast: cast, 
            info: info
        }
        const insertInfo = await moviesCollection.insertOne(createMovies)
        if (insertInfo.insertedCount === 0) throw 'Could not add a movie';
        const newId = insertInfo.insertedId
        const movieeee = await this.get(newId.toString())
        return movieeee
    },

    async getAll() {
        const moviesCollection = await movies();
        const movieList = await moviesCollection.find({}).toArray();
        return movieList;
    },
    
    async get(id) {
        if (!id) throw 'Error: You must provide an id to search for';
        if (typeof id !== 'string' || id.trim().length == 0) throw 'Error: You must provide a valid id'
        let parsedId = ObjectId(id)
        const moviesCollection = await movies();
        const moviesbyID = await moviesCollection.findOne({ _id: parsedId })
        if (moviesbyID === null) throw 'No movie with that id'
        return moviesbyID;
    },

    async remove(id) {
        if (!id) throw 'Error: You must provide an id to search for';
        if (typeof id !== 'string' || id.trim().length == 0) throw 'Error: You must provide a valid id'
        let parsedId = ObjectId(id)
        const moviesCollection = await movies()
        const moviesbyID = await moviesCollection.findOne({ _id: parsedId })
        const deletionInfo = await moviesCollection.deleteOne({ _id: parsedId })
        if (deletionInfo.deletedCount === 0) {
            throw 'Could not delete movie with id of ${id}'
          }
        let a = moviesbyID
        return `${a.title} has been successfully deleted`
        
    },

    async rename(id, newTitle) {
        if (!id) throw 'Error: You must provide an id'
        if (typeof id !== 'string' || id.trim().length == 0) throw 'Error: You must provide a valid id'
        let parsedId = ObjectId(id)
        if (!newTitle) throw 'Error: You must provide a title'
        if (typeof newTitle !== 'string' || newTitle.trim().length == 0) throw 'Error: You must provide a valid title'
        const moviesCollection = await movies()
        const updatedmovie = {
            title: newTitle
        }
        const updatedInfo = await moviesCollection.updateOne(
            { _id: parsedId },
            { $set: updatedmovie}
        )
        if (updatedInfo.modifiedCount === 0) {
            throw 'Error: cannot update movie successfully'
        }
        const movieeeenew = await this.get(id)
        return movieeeenew 

    } 

     
};