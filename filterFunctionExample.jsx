//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

let names = ["Sujal", "Sujal", "Sujal", "Siddh", "Bihari"];
let newNames = names.filter((name) => {
    return name !== "Sujal";
})

console.log(newNames);
