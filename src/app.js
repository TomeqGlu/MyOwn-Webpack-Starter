import "./styles/styles.scss";

console.log('Welcome Webpack!');
const arrowFunction = (test) => test;
console.log(arrowFunction("Babel tested succesful!"));

console.log("transform object rest spread plugin test:");

const user = {
   id:1,
   name: "Thomas"
}
const advUser = {
   ...user,
   age: 23
}

console.log(advUser);