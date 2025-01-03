// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const newEvent = new Promise((resolve, reject) => {            // It kind of works like try and catch 
    let name = "Pujal";
    if (name == "Pujal"){
        resolve(name);                            // If a condition is met, resolve the promise
    }else{
        reject("Name was not Pujal, try again");        // Else, we reject it
    }                            
});

newEvent
.then((name) => {                // We handle the accepted or rejected output here and further work on it however we like to
    console.log(name);    
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("Promise finished !");       // Finally is executed no matter what happens 
})
