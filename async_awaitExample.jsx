/*
const axios = require("axios");
const returnedData = axios.get("https://cat-fact.herokuapp.com/facts");

returnedData.then((res) => {
    
    console.log(res);
    
})
.catch((err) => {
    
    console.log(err);
    
})
.finally(() => {
    console.log(" \n API fetched !")
});
*/

// Async and await makes it look shorter and cleaner to read, we can replace everything from above which is commented into this code below 

const axios = require("axios");

const fetchData = async () => {
    
    try{
        const returnedData = await axios.get("https://cat-fact.herokuapp.com/facts");
        console.log(returnedData);
    } catch (err){
        console.log(err);
    } finally{
        console.log("API Fetched !");
    }

};

fetchData();
