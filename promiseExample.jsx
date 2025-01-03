const newEvent = new Promise((resolve, reject) => {            
    let name = "Pujal";
    if (name == "Pujal"){
        resolve(name);
    }else{
        reject("Name was not Pujal, try again");
    }                            
});

newEvent
.then((name) => {
    console.log(name);
})
.catch((err) => {
    console.log(err);
})
