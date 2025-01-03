// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

let arr = [1, 2, 3];
arr.map((arr) =>{
    console.log(arr);      //prints the elements of the array (1 ,2 and 3 in this case)
});

let newArr = arr.map(() =>{
    return 5;           // map returns a new array and modifies the elements from the original array
});
console.log(newArr);

let names = ["Sujal", "Milind", "Huzaifah", "Siddh", "Bihari"];
let newNames = names.map((name) => {
    return name + "1";
})

let anotherNames = names.map((name) => {
    return <h1>{name}</h1>;             // Example of how it can be used in react
})
console.log(newNames);
