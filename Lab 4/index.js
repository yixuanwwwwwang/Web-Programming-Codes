const mongoCollections = require('./config/mongoCollections')
const movies = require("./data/movies");

async function main() {
    try{
        const billAndTed = await movies.create("Bill and Ted Face the Music","Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.","PG-13", "1hr 31min","Comedy",["Keanu Reeves","Alex Winter"],{director: "Dean Parisot", yearReleased: 2020});
        // 1. Create a movie of your choice

        console.log(billAndTed); 
        // 2. Log the newly created movie


        const tomAndJerry = await movies.create("Tom and Jerry",
        "A legendary rivalry reemerges when Jerry moves into New York City's finest hotel on the eve of the wedding of the century, forcing the desperate event planner to hire Tom to get rid of him. As mayhem ensues, the escalating cat-and-mouse battle soon threatens to destroy her career, the wedding, and possibly the hotel itself.",
        "PG (Rude Humor|Cartoon Violence|Brief Language)",
        "1h 41m",
        "Kids And Family, Comedy",
        ["Chloe Grace Moretz","Michael Pena"],
        {director: "Tim Story", yearReleased: 2021});
        // 3. Create another movie of your choice


        const allMovies = await movies.getAll();
        console.log(allMovies)
        //4. Query all movies, and log them all


        const HarryPotter = await movies.create("HARRY POTTER AND THE DEATHLY HALLOWS: PART 2",
        "A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of evil. The friends must search for the Horcruxes that keep the dastardly wizard immortal. Harry and Voldemort meet at Hogwarts Castle for an epic showdown where the forces of darkness may finally meet their match.", 
        "PG-13 (Seq of Intense Action Violence|Frightening Images)",
        "2h 11m",
        "Adventure, Fantasy",
        ["Daniel Radcliffe","Emma Watson"],
        {director: "David Yates", yearReleased: 2011})
        //5. Create a 3rd movie of your choice.


        console.log(HarryPotter)
        // 6. Log the newly created 3rd movie


        let idBillAndTed = billAndTed._id.toString()
        const renamedBillAndTed = await movies.rename(idBillAndTed, "Bill and Ted Face the Music - Version 2")
        //7. Rename the first movie's title


        console.log(renamedBillAndTed)
        //8. Log the first movie's title


        let idTomAndJerry = tomAndJerry._id.toString()
        const removeTomAndJerry = await movies.remove(idTomAndJerry)
        console.log(removeTomAndJerry)
        //9. Remove the second movie you created


        const allMovies2 = await movies.getAll();
        console.log(allMovies2)
        //10. Query all movies, and log them all

    } catch(e) {
        console.log(e)
    }
    


    try{
        const badBillAndTed = await movies.create("Bill and Ted Face the Music","Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.","PG-13", "1hr 31min","Comedy",["Keanu Reeves","Alex Winter"],{director: " ", yearReleased: 2020})
        console.log(badBillAndTed)
        //11. Try to create a movie with bad input parameters to make sure it throws errors
    } catch(e) {
        console.log(e)
    }
    

    try{
        const removeWrongMovie = await movies.remove("123456789111")
        // 12. Try to remove a movie that does not exist to make sure it throws errors
    } catch(e) {
        console.log(e)
    }
    

    try{
        const renamedWrongMovie= await movies.rename("123456789100", "hahahaha")
        // 13. Try to rename a movie that does not exist to make sure it throws errors    
    } catch(e) {
        console.log(e)
    }
    

    try{
        const renamedInvalidData= await movies.rename(123456789100, "hahahaha")
        // 14. Try to rename a movie passing in invalid data for the parameter to make sure it throws errors   
    } catch(e) {
        console.log(e)
    }
    
    
    try{
        const getWrongId = await movies.get("123456789123")
        // 15. Try getting a movie by ID that does not exist to make sure it throws errors.  
    } catch(e) {
        console.log(e)
    }

}

main();