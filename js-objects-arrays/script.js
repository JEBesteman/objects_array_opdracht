/* //opdracht 1 Objecten

const person = {
    name: "Jolanda",
    age: 43,
    evaluations: [7, 10, 9] 
};

console.log(person);

//value van name loggen, dmv key

console.log(person.name);

//leeftijd loggen

console.log(person.age);

//beide properties loggen nu met bracket-notation

console.log(person["name"]);
console.log(person["age"]);

//key-value pair evaluations

console.log(person.evaluations);
console.log(person["evaluations"]);
//waarde is [7, 10, 9] = array

 */
//opdracht 2 Arrays

const colors = ["groen", "blauw", "rood"];

console.log(colors);

// loggen lengte array

console.log(colors.length);

//eerste element array loggen

console.log(colors[0]);

//laatste element, twee manieren

console.log(colors[2]);
console.log(colors[colors.length -1]);

//toevoegen 4e item array en number 5

colors.push("geel");
console.log(colors);

colors.push(5);
console.log(colors);

colors.push({greeting: "hi ik ben een object"});
console.log(colors);
console.log(colors[colors.length -1]);

//alleen begroeting van object (laatste element) loggen!!!!

console.log(Object.values(colors[colors.length -1]));  //['Hi ik ben een object']




